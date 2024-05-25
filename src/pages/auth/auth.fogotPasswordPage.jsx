import React, { useEffect, useState } from "react";
import '../auth/auth.loginPage.scss'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Button, Form, Input, Layout } from 'antd';
import { STATE } from "../../redux/types/type.app";
import { useSelector } from "react-redux";
import FogotPassword from "../../components/login/fogotPassword";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "../../utils/axios";

const { Footer } = Layout;

const FogotPage = () => {
    // Lấy dữ liệu từ localStorage với key 'selectedCourseData'
    const savedData = localStorage.getItem('userData');
    // Chuyển đổi chuỗi JSON thành đối tượng JavaScript
    const parsedData = JSON.parse(savedData);
    // Sử dụng dữ liệu đã lấy từ localStorage
    console.log(parsedData);
    const navigate = useNavigate();
    const state = useSelector(state => state?.appReducer);
    console.log(state);

    const [studentFogotPasswordData, setStudentFogotPasswordData] = useState()
    // lấy studentId từ url
    const location = useLocation();
    const search = location.search;
    const params = new URLSearchParams(search);
    const studentId = params.get('studentId');
    console.log("studentId in url: ", studentId);
    // 
    const handleGetStudentInfo = async () => {
        const payload = {
            "studentId": studentId
        }
        try {
            let rs = await axios.post(`/student/getStudentStatus`, payload)
            if (rs.errCode === 0) {
                console.log("get student info success", rs);
                // return rs.data
                setStudentFogotPasswordData(rs.data)
            }
        } catch (error) {
            console.log("error in get student info", error);
        }
    }
    useEffect(() => {
        if(studentId != null){
            handleGetStudentInfo()
        }
    }, [studentId])

    useEffect(() => {
        // if (state?.isLogin === STATE.RESOLVE) {
        //     navigate('/home');
        // }
        if(parsedData?.payload?.studentId != null ){
            navigate('/home')
        }
        // if(parsedData?.isLogin === STATE.RESOLVE ){
        //     navigate('/home')
        // }
    }, [state])

    return (
        <>
            <div style={{backgroundColor:'white', textAlign:'center', fontWeight:'500', display:"flex", flexDirection:'row', justifyContent:'center', alignItems:'center', padding:16, borderBottom: '2px solid #E1EBF6'}}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Logo_IUH.png/800px-Logo_IUH.png"} height={55}></img>
                <div style={{}}>
                    <h1 style={{color:'#08387F', fontSize:20, textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)", fontWeight:700}}>TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP TPHCM</h1>
                    <h2 style={{color:'#9A1616', fontSize:16, textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)", fontWeight:600, paddingTop:8}}>CỔNG THÔNG TIN SINH VIÊN</h2>   
                </div>
            </div>
            <div className="login-container">
                {
                    <FogotPassword studentFogotPasswordData={studentFogotPasswordData} />
                }
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition:Bounce
                />
                <ToastContainer />
            </div>

        </>
    )
}

export default FogotPage;