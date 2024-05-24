// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import './homeSubLayout.scss';
// import SplitPane, { Pane } from 'split-pane-react';
// import 'split-pane-react/esm/themes/default.css';
// import { Button, Col, Drawer, Form, Row, Select, message, theme } from 'antd';
// import {Layout} from 'antd'
// import logo from '../../public/images/dai-hoc-cong-nghiep-bacground.png'
// import Courses from "../components/courses/Courses";
// import RegistrationControl from "../components/registrationControl/RegistrationControl";
// import StudentInfo from "../components/studentInfo/StudentInfo";
// import CoursePendingRegistered from "../components/courses/CoursePendingRegistered";
// import ClassDetails from "../components/courses/ClassDetails";
// import axios from '../../src/utils/axios';
// import { toast } from "react-toastify";
// import RegisteredCourse from "../components/courses/RegisteredCourse";

// const { Option } = Select;

// const {Header, Content, Footer} = Layout;

// const homeCourseRegistration = () => {
//     const [selectedCourse, setSelectedCourse] = useState(null);
//     const [selectedClass, setSelectedClass] = useState(null);
//     const [selectedClassDetail, setSelectedClassDetail] = useState(null);
//     const [showCoursePendingRegistered, setShowCoursePendingRegistered] = useState(false);
//     const [showClassDetails, setShowClassDetails] = useState(false);
//     const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//     const [getClasbyCourse,setClassByCourse] = useState()
//     const [getClassIdByProps, setGetClassIdByProps] = useState()
//     const [getRegisteredCourseByStudentId, setGetRegisteredCourseByStudentId] = useState()

//     // Lấy dữ liệu từ localStorage với key 'selectedCourseData'
//     const savedData = localStorage.getItem('userData');
//     // Chuyển đổi chuỗi JSON thành đối tượng JavaScript
//     const parsedData = JSON.parse(savedData);
//     // Sử dụng dữ liệu đã lấy từ localStorage
//     console.log("user",parsedData.payload.major._id);


//     const fetchGetRegisteredCourseByStudentId = async () => {
//         const payload = {
//             "studentId": parsedData?.payload?.studentId
//         }
//         const rs = await axios.post(`/course/getRegisteredCourse`, payload)
//         console.log("rsppppppppppp",rs);
//         if(rs.errCode ===0){
//             setGetRegisteredCourseByStudentId(rs.data)
//             console.log(rs.data);
//         } else {

//         }
//     }

//     // Hàm callback để xử lý khi chọn một dòng từ Courses
//     const handleCourseRowClick = (record) => {
//         setSelectedCourse(record);
//         console.log("record",record);
//         setShowCoursePendingRegistered(true);
//         setShowClassDetails(false);
//     };

//     // Hàm callback để xử lý khi chọn một dòng từ CoursePendingRegistered
//     const handleClassRowClick = (record) => {
//         setSelectedClass(record);
//         setShowClassDetails(true);
//     };

//     const handleClassDetailRowClick = (record) => {
//         // fetchClassByCourse(record?._id)
//         setGetClassIdByProps(record?._id)
//         setIsButtonDisabled(false);
//         setSelectedClassDetail(record)
//         console.log("recorddetail",record);
//     }

//     useEffect(() => {
//         fetchGetRegisteredCourseByStudentId()
//     }, []);

//     useEffect(()=>{
//         fetchGetCourseByMajor()
//     }, [])


//     const [getCourseByMajor,setGetCourseByMajor] = useState()

//     async function fetchGetCourseByMajor (){
//         console.log("11111", parsedData?.payload?.major?._id);
//         const payload = {
//           "major": parsedData?.payload?.major?._id
//         }
//         const rs = await axios.post(`/course/getCourceByMajor`, payload)
//         if(rs.errCode ===0){
//             setGetCourseByMajor(rs.data)
//             console.log(rs.data);
//         } else {

//         }
//     }


//     const handleRegisterCourse = async () => {
//         const payload = {
//             "_id": getClassIdByProps, 
//             "studentId": parsedData?.payload?.studentId
//         }

//         console.log("payload",payload);
//         try {
//             const rs = await axios.post(`/course/registerClass`, payload)
//             console.log("222222",rs);
//             if(rs.errCode ===0){
//                 message.success("Đăng ký môn học thành công");
//             } else if (rs.errCode === 4){
//                 message.warning("Sinh viên đã đăng ký vào lớp học phần này và đang chờ được xác nhận");
//             } else if (rs.errCode === 3){
//                 message.warning("Sinh viên đã có trong danh sách lớp học phần này rồi");
//             } else {
//                 message.error("Đăng ký thất bại");
//             }
//         } catch (error) {
//             console.log("error", error);
//         }
//     }
//     return (
//         <Layout style={{ minHeight: '100vh'}}>
//             <Content style={{ padding: '0 220px', borderBlockColor:'blue'}}>
//                 <Row align="center" style={{marginBottom:20, marginTop:10}}>
//                     <img src={logo} style={{width:"100%"}}></img>
//                 </Row>
//                 <StudentInfo/>
//                 <Content style={{backgroundColor:'#ffffff', color:"#EB7B21", border: '2px solid #E1EBF6', borderRadius:6, marginTop:10}}>
//                     <h1 className="title2" style={{textAlign:'center', paddingTop:10, marginBottom:30, color:'#0C6FBE'}}>ĐĂNG KÝ HỌC PHẦN</h1>
//                     <RegistrationControl/>
//                     <Content>
//                         {/* <h3 className="title2" style={{textAlign:'center', paddingTop:30, marginBottom:20}}>MÔN HỌC PHẦN ĐANG CHỜ ĐƯỢC ĐĂNG KÝ</h3>
//                         <Courses allCoursesData={mergedDataWithKeys}/>
//                         <h3 className="title2" style={{textAlign:'center', paddingTop:30, marginBottom:20}}>LỚP HỌC PHẦN ĐANG CHỜ ĐƯỢC ĐĂNG KÝ</h3>
//                         <CoursePendingRegistered/>
//                         <h3 className="title2" style={{textAlign:'center', paddingTop:30, marginBottom:20}}>CHI TIẾT LỚP HỌC PHẦN</h3>
//                         <ClassDetails/> */}
//                         <h3 className="title2" style={{ textAlign: 'center', paddingTop: 30, marginBottom: 20 }}>MÔN HỌC PHẦN ĐANG CHỜ ĐƯỢC ĐĂNG KÝ</h3>
//                         {/* <Courses allCoursesData={mergedDataWithKeys} onCourseRowClick={handleCourseRowClick} /> */}
//                         <Courses allCoursesData={getCourseByMajor} onCourseRowClick={handleCourseRowClick} />
//                         {showCoursePendingRegistered &&
//                             <>
//                                 <h3 className="title2" style={{ textAlign: 'center', paddingTop: 30, marginBottom: 20 }}>LỚP HỌC PHẦN ĐANG CHỜ ĐƯỢC ĐĂNG KÝ</h3>
//                                 {/* <CoursePendingRegistered selectedCourse={selectedCourse} onClassRowClick={handleClassRowClick} /> */}
//                                 <CoursePendingRegistered selectedCourse={selectedCourse} onClassRowClick={handleClassRowClick} courseId={selectedCourse?._id} />
//                             </>
//                         }
//                         {showClassDetails &&
//                             <>
//                                 <h3 className="title2" style={{ textAlign: 'center', paddingTop: 30, marginBottom: 20 }}>CHI TIẾT LỚP HỌC PHẦN</h3>
//                                 <ClassDetails selectedClass={selectedClass} onClassDetailRowClick={handleClassDetailRowClick} classId={selectedClass?._id} courseId={selectedCourse?._id}/>
//                             </>
//                         }

//                     </Content>

//                     <Form.Item  style={{display:'flex', alignItems:"center", justifyContent:'center', paddingTop: 30, marginBottom: 20}}>
//                         <Button type="primary" style={{ border: 'none' }}
//                             className={isButtonDisabled ? 'visibility-button' : 'visibility-button'}
//                             disabled={isButtonDisabled}
//                             onClick={handleRegisterCourse}
//                         >Đăng ký môn học</Button>
//                     </Form.Item>
//                     {(getRegisteredCourseByStudentId) ? (
//                         <>
//                             <h3 className="title2" style={{ textAlign: 'center', paddingTop: 30, marginBottom: 20 }}>LỚP HỌC PHẦN ĐÃ ĐĂNG KÝ TRONG HỌC KỲ NÀY</h3>
//                             <RegisteredCourse getRegisteredCourseByStudentId={getRegisteredCourseByStudentId}/>
//                         </>
//                     ): (<></>)
//                     }
//                 </Content>
//             </Content>
//             <Footer style={{ textAlign: 'center' }}>Ant Design ©2024 Created by You</Footer>
//         </Layout>
//     )
// }

// export default homeCourseRegistration;

import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Layout, message, Modal, Input } from 'antd';
import axios from '../../src/utils/axios';
import logo from '../../public/images/dai-hoc-cong-nghiep-bacground.png';
import Courses from "../components/courses/Courses";
import RegistrationControl from "../components/registrationControl/RegistrationControl";
import StudentInfo from "../components/studentInfo/StudentInfo";
import CoursePendingRegistered from "../components/courses/CoursePendingRegistered";
import ClassDetails from "../components/courses/ClassDetails";
import RegisteredCourse from "../components/courses/RegisteredCourse";

const { Content, Footer } = Layout;

const homeCourseRegistration = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedClassDetail, setSelectedClassDetail] = useState(null);
    const [showCoursePendingRegistered, setShowCoursePendingRegistered] = useState(false);
    const [showClassDetails, setShowClassDetails] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [getClassIdByProps, setGetClassIdByProps] = useState();
    const [getRegisteredCourseByStudentId, setGetRegisteredCourseByStudentId] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [otp, setOtp] = useState('');
    const [isModalVisibleVerify, setIsModalVisibleVerify] = useState(false);
    const [refreshCourses, setRefreshCourses] = useState(false)

    const savedData = localStorage.getItem('userData');
    const parsedData = JSON.parse(savedData);

    const fetchGetRegisteredCourseByStudentId = async () => {
        const payload = { "studentId": parsedData?.payload?.studentId };
        const rs = await axios.post(`/course/getRegisteredCourse`, payload);
        if (rs.errCode === 0) {
            setGetRegisteredCourseByStudentId(rs.data);
        }
    };

    const handleCourseRowClick = (record) => {
        setSelectedCourse(record);
        setShowCoursePendingRegistered(true);
        setShowClassDetails(false);
    };

    const handleClassRowClick = (record) => {
        setSelectedClass(record);
        setShowClassDetails(true);
    };

    const handleClassDetailRowClick = (record) => {
        setGetClassIdByProps(record?._id);
        setIsButtonDisabled(false);
        setSelectedClassDetail(record);
    };

    useEffect(() => {
        fetchGetRegisteredCourseByStudentId();
    }, []);

    const [getCourseByMajor, setGetCourseByMajor] = useState();

    async function fetchGetCourseByMajor() {
        const payload = { "major": parsedData?.payload?.major?._id };
        const rs = await axios.post(`/course/getCourceByMajor`, payload);
        if (rs.errCode === 0) {
            setGetCourseByMajor(rs.data);
        }
    }
    useEffect(() => {
        fetchGetCourseByMajor()
    }, [])

    const handleRegisterCourse = async () => {
        // setIsModalVisible(true);
        // handleRegisteredCourse()
        // setTimeout(() => {
        //     handleSendOtp()
        // }, 1000);
        let rs = await handleRegisteredCourse()
        if (rs === 0) {
            message.success("Đăng ký vào danh sách chờ thành công.");
            setIsModalVisible(true);
            message.loading("Vui lòng chờ xác minh OTP để hoàn tất đăng ký lớp học phần");
            handleSendOtp()
        }
        if (rs === 3) {
            setIsModalVisible(false);
            message.warning("Học kỳ này sinh viên đã đăng ký vào lớp học phần này rồi");
        }
        if (rs === 4) {
            // message.warning("Sinh viên đã đăng ký vào lớp học phần này và đang chờ được xác nhận. Vui lòng liên hệ với giáo vụ để được hỗ trợ.");
            setIsModalVisibleVerify(true);
        }
    };

    const handleSendOtp = async () => {
        const payload = {
            "email": "tranminhthuan030302@gmail.com"
            // "email": parsedData?.payload?.email,
        }
        try {
            const rs = await axios.post(`/student/sendOTP`, payload)
            if (rs.errCode === 0) {
                // message.success("Đã gởi mã OTP đến email của sinh viên");
                return 0
            } else {
                // message.error("Chưa gởi được mã");
                return 1
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleRegisteredCourse = async () => {
        const payload = {
            "_id": getClassIdByProps,
            "studentId": parsedData?.payload?.studentId
        }
        console.log("payload", payload);
        try {
            const rs = await axios.post(`/course/registerClass`, payload)
            console.log("222222", rs);
            if (rs.errCode === 0) {
                // message.success("Đăng ký vào danh sách chờ thành công.");
                // // setTimeout(() => {
                // message.loading("Vui lòng chờ xác minh OTP để hoàn tất đăng ký lớp học phần");
                // }, 2000);
                return 0
            } else if (rs.errCode === 4) {
                // message.warning("Sinh viên đã đăng ký vào lớp học phần này và đang chờ được xác nhận. Vui lòng liên hệ với giáo vụ để được hỗ trợ.");
                return 4
            } else if (rs.errCode === 3) {
                // message.warning("Sinh viên đã có trong danh sách lớp học phần này rồi");
                return 3
            } else {
                message.error("Đăng ký vào danh sách chờ thất bại");
                return 1
            }
        } catch (error) {
            console.log("error", error);
        }
    }

    const handleVerifyOtp = async () => {
        const payload = {
            "email": "tranminhthuan030302@gmail.com",
            "otp": otp
        }
        console.log("payload in otp verity", payload);
        try {
            let rs = await axios.post(`/student/verifyOTP`, payload)
            if (rs.errCode === 0) {
                // message.success("Xác minh email thành công");
                // setOtp('');
                // setIsModalVisible(false)
                return 0
            } 
            if (rs.errCode === 1) {
                // message.error("Xác minh thất bại. Vui lòng kiểm tra lại mã OTP và thử lại");
                // setOtp('');
                return 1
            }
        } catch (error) {
            console.log("error in veriry", error);
            return 1
        }
    }

    const handleAcceptClasses = async () => {
        const payload = {
            "_id": getClassIdByProps,
            "studentId": parsedData?.payload?.studentId,
        };
        console.log("payload in otp submit", payload);
        try {
            const rs = await axios.put(`/course/acceptStudentToClass`, payload);
            if (rs.errCode === 0) {
                // message.success("Đăng ký vào lớp học thành công");
                // setIsModalVisible(false);
                return 0
            } else if (rs.errCode === 3) {
                // message.error("Sinh viên đã có trong danh sách lớp học phần này rồi");
                return 3
            }
            else {
                // message.error("Đăng ký thất bại");
                return 4
            }
        } catch (error) {
            message.error("Đã có lỗi xảy ra");
        }
    }
    const handleOtpSubmit = async () => {
        if (otp === '') {
            message.error("Vui lòng nhập mã OTP");
            return
        } else {
            let rs = await handleVerifyOtp()
            if (rs == 0) {
                // handleAcceptClasses()
                let rs = await handleAcceptClasses()
                if (rs == 0) {
                    message.success("Đăng ký vào lớp học thành công");
                    setIsModalVisible(false);
                    setOtp('')
                    // setRefreshCourses(!refreshCourses)
                    setRefreshCourses(prev => !prev)
                }
                if (rs == 3) {
                    message.warning("Sinh viên đã có trong danh sách lớp học phần này rồi");

                }
                if (rs == 4) {
                    message.error("Đăng ký thất bại");
                }
            }
            if (rs == 1) {
                setOtp('')
                message.error("Xác minh thất bại. Vui lòng kiểm tra lại mã OTP và thử lại");
            }
        }
    };

    const handleResendOtp = async () => {
        // handleSendOtp()
        // message.success("Mã OTP đã được gửi lại");
        // setOtp('')
        let rs = await handleSendOtp()
        if(rs === 0){
            message.success("Mã OTP đã được gửi lại");
            setOtp('')
        }
        if(rs === 1){
            message.error("Chưa gởi được mã");
        }
    };

    //  modal hien thi thong bao 
    const handleOk = async () => {
        // Handle email verification logic here
        let rs = await handleSendOtp()
        if (rs === 0) {
            message.success("Đã gởi mã OTP đến email của sinh viên");
            setIsModalVisibleVerify(false);
            setIsModalVisible(true);
            handleOtpSubmit()
        }
        if (rs === 1) {
            message.error("Chưa gởi được mã");
        }


    };

    const handleCancel = () => {
        setIsModalVisibleVerify(false);
    };

    const checkRegistrationStatus = (rs) => {
        if (rs === 4) {
            setIsModalVisibleVerify(true);
        }
    };

    useEffect(() => {
        fetchGetRegisteredCourseByStudentId()
    }, [refreshCourses]);
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content style={{ padding: '0 220px' }}>
                <Row align="center" style={{ marginBottom: 20, marginTop: 10 }}>
                    <img src={logo} style={{ width: "100%" }} alt="logo" />
                </Row>
                <StudentInfo />
                <Content style={{ backgroundColor: '#ffffff', border: '2px solid #E1EBF6', borderRadius: 6, marginTop: 10 }}>
                    <h1 className="title2" style={{ textAlign: 'center', paddingTop: 10, marginBottom: 30, color: '#0C6FBE' }}>ĐĂNG KÝ HỌC PHẦN</h1>
                    <RegistrationControl />
                    <Content>
                        <h3 className="title2" style={{ textAlign: 'center', paddingTop: 30, marginBottom: 20 }}>MÔN HỌC PHẦN ĐANG CHỜ ĐƯỢC ĐĂNG KÝ</h3>
                        <Courses allCoursesData={getCourseByMajor} onCourseRowClick={handleCourseRowClick} />
                        {showCoursePendingRegistered &&
                            <>
                                <h3 className="title2" style={{ textAlign: 'center', paddingTop: 30, marginBottom: 20 }}>LỚP HỌC PHẦN ĐANG CHỜ ĐƯỢC ĐĂNG KÝ</h3>
                                <CoursePendingRegistered selectedCourse={selectedCourse} onClassRowClick={handleClassRowClick} courseId={selectedCourse?._id} />
                            </>
                        }
                        {showClassDetails &&
                            <>
                                <h3 className="title2" style={{ textAlign: 'center', paddingTop: 30, marginBottom: 20 }}>CHI TIẾT LỚP HỌC PHẦN</h3>
                                <ClassDetails selectedClass={selectedClass} onClassDetailRowClick={handleClassDetailRowClick} classId={selectedClass?._id} courseId={selectedCourse?._id} />
                            </>
                        }
                    </Content>

                    <Form.Item style={{ display: 'flex', alignItems: "center", justifyContent: 'center', paddingTop: 30, marginBottom: 20 }}>
                        <Button type="primary" style={{ border: 'none' }}
                            className={isButtonDisabled ? 'visibility-button' : 'visibility-button'}
                            disabled={isButtonDisabled}
                            onClick={handleRegisterCourse}
                        >Đăng ký môn học</Button>
                    </Form.Item>
                    {getRegisteredCourseByStudentId && (
                        <>
                            <h3 className="title2" style={{ textAlign: 'center', paddingTop: 30, marginBottom: 20 }}>LỚP HỌC PHẦN ĐÃ ĐĂNG KÝ TRONG HỌC KỲ NÀY</h3>
                            <RegisteredCourse getRegisteredCourseByStudentId={getRegisteredCourseByStudentId} />
                        </>
                    )}
                </Content>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2024 Created by You</Footer>
            <Modal
                title="Nhập mã OTP"
                visible={isModalVisible}
                onOk={handleOtpSubmit}
                onCancel={() => setIsModalVisible(false)}
                required
                footer={[
                    <Button key="resend" type="link" onClick={handleResendOtp}>Gửi lại mã</Button>,
                    <Button key="submit" type="primary" onClick={handleOtpSubmit}>Hoàn thành</Button>,
                ]}
            >
                <Input
                    placeholder="Nhập mã OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                />
            </Modal>
            <Modal
                title="Thông báo"
                visible={isModalVisibleVerify}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Xác minh email"
                cancelText="Hủy"
            >
                <p>Sinh viên đã đăng ký vào lớp học phần này và đang chờ được xác nhận. Vui lòng liên hệ với giáo vụ để được hỗ trợ hoặc xác minh email otp để hoàn tất đăng ký.</p>
            </Modal>
        </Layout>
    );
};

export default homeCourseRegistration;
