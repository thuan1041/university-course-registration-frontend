import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import './homeSubLayout.scss';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import { Col, Drawer, Row, Select, theme } from 'antd';
import {Layout} from 'antd'
import logo from '../../public/images/dai-hoc-cong-nghiep-bacground.png'
import Courses from "../components/courses/Courses";
import RegistrationControl from "../components/registrationControl/RegistrationControl";
import StudentInfo from "../components/studentInfo/StudentInfo";
import CoursePendingRegistered from "../components/courses/CoursePendingRegistered";
import ClassDetails from "../components/courses/ClassDetails";
import axios from '../../src/utils/axios';

const { Option } = Select;

const {Header, Content, Footer} = Layout;

const homeSublayout = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedClass, setSelectedClass] = useState(null);
    const [showCoursePendingRegistered, setShowCoursePendingRegistered] = useState(false);
    const [showClassDetails, setShowClassDetails] = useState(false);

    // Hàm callback để xử lý khi chọn một dòng từ Courses
    const handleCourseRowClick = (record) => {
        setSelectedCourse(record);
        setShowCoursePendingRegistered(true);
        setShowClassDetails(false);
    };

    // Hàm callback để xử lý khi chọn một dòng từ CoursePendingRegistered
    const handleClassRowClick = (record) => {
        setSelectedClass(record);
        setShowClassDetails(true);
    };

    useEffect(()=>{
        fetchGetClassByMajor()
        fetchGetAllCourses()
    }, [])
    
    const [getAllCoursesData,setGetAllCoursesData] = useState()
    const [getClassByMajorData,setGetClassByMajorData] = useState()

    async function fetchGetClassByMajor (){
        const payload = {
          "major": "66265ec3bd56e143ee8eb1c1"
        }
        const rs = await axios.post(`/course/getClassByMajor`, payload)
        if(rs.errCode ===0){
          setGetClassByMajorData(rs.data)
        } else {
    
        }
    }
    async function fetchGetAllCourses(){
    const rs = await axios.post(`/course/getAllCourses`)
    if(rs.errCode ===0){
        setGetAllCoursesData(rs.data)
    } else {
    }
    }
    const mergeData = (getAllCoursesData, getClassByMajorData) => {
    // Check if data arrays exist and have data
    if (!getAllCoursesData || !Array.isArray(getAllCoursesData) || !getClassByMajorData || !Array.isArray(getClassByMajorData)) {
        return [];
    }
    
    const mergedData = {};
    
    // Iterate through the getAllCoursesData array and populate the mergedData object
    getAllCoursesData.forEach(course => {
        mergedData[course._id] = { ...course };
    });
    
    // Iterate through the getClassByMajorData array and merge data with existing courses
    getClassByMajorData.forEach(classData => {
        const courseId = classData.courseId?._id;
        if (courseId && mergedData[courseId]) {
        if (!mergedData[courseId].classes) {
            mergedData[courseId].classes = [];
        }
        mergedData[courseId].classes.push(classData);
        }
    });
    
    // Convert mergedData object to an array
    const mergedArray = Object.values(mergedData);
    
    return mergedArray;
    };
    
    // Usage example
    const mergedData = mergeData(getAllCoursesData, getClassByMajorData);
    // console.log("mergedData", JSON.stringify(mergedData));

    // Thêm thuộc tính key cho mỗi phần tử trong mergedData
    const mergedDataWithKeys = mergedData.map((item, index) => ({
    ...item,
    key: index, // Sử dụng index của mỗi phần tử trong mảng làm key
    }));

// console.log("mergedDataWithKeys", mergedDataWithKeys);

    return (
        <Layout style={{ minHeight: '100vh'}}>
            <Content style={{ padding: '0 220px', borderBlockColor:'blue'}}>
                <Row align="center" style={{marginBottom:20, marginTop:10}}>
                    <img src={logo} style={{width:"100%"}}></img>
                </Row>
                <StudentInfo/>
                <Content style={{backgroundColor:'#ffffff', color:"#EB7B21"}}>
                    <h1 className="title2" style={{textAlign:'center', paddingTop:10, marginBottom:30, color:'#0C6FBE'}}>ĐĂNG KÝ HỌC PHẦN</h1>
                    <RegistrationControl/>
                    <Content>
                        {/* <h3 className="title2" style={{textAlign:'center', paddingTop:30, marginBottom:20}}>MÔN HỌC PHẦN ĐANG CHỜ ĐƯỢC ĐĂNG KÝ</h3>
                        <Courses allCoursesData={mergedDataWithKeys}/>
                        <h3 className="title2" style={{textAlign:'center', paddingTop:30, marginBottom:20}}>LỚP HỌC PHẦN ĐANG CHỜ ĐƯỢC ĐĂNG KÝ</h3>
                        <CoursePendingRegistered/>
                        <h3 className="title2" style={{textAlign:'center', paddingTop:30, marginBottom:20}}>CHI TIẾT LỚP HỌC PHẦN</h3>
                        <ClassDetails/> */}
                        <h3 className="title2" style={{ textAlign: 'center', paddingTop: 30, marginBottom: 20 }}>MÔN HỌC PHẦN ĐANG CHỜ ĐƯỢC ĐĂNG KÝ</h3>
                        <Courses allCoursesData={mergedDataWithKeys} onCourseRowClick={handleCourseRowClick} />
                        {showCoursePendingRegistered &&
                            <>
                                <h3 className="title2" style={{ textAlign: 'center', paddingTop: 30, marginBottom: 20 }}>LỚP HỌC PHẦN ĐANG CHỜ ĐƯỢC ĐĂNG KÝ</h3>
                                <CoursePendingRegistered selectedCourse={selectedCourse} onClassRowClick={handleClassRowClick} />
                            </>
                        }
                        {showClassDetails &&
                            <>
                                <h3 className="title2" style={{ textAlign: 'center', paddingTop: 30, marginBottom: 20 }}>CHI TIẾT LỚP HỌC PHẦN</h3>
                                <ClassDetails selectedClass={selectedClass} />
                            </>
                        }
                    </Content>
                </Content>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2024 Created by You</Footer>
        </Layout>
    )
}

export default homeSublayout;