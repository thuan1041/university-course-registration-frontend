import React, { useState } from "react";
import { Layout, Input, Button, Avatar, Menu, Dropdown, Row, Col, message } from 'antd';
import { HomeOutlined, BellOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import { Content } from "antd/es/layout/layout";
import StudentDetail from "../components/studentInfo/StuddentDetail";
import DashBoardMenu from "../components/dasdboard/DashbooardMenu";
import DashboardLearningProgress from "../components/dasdboard/DashboardLearningProgress";
import DashboardNotification from "../components/dasdboard/DashboardNotification";
import { useNavigate } from "react-router-dom";
import ChangePasswordModal from "../../src/modals/app/changePasswordModal";
import axios from "../../src/utils/axios";
import { useSelector } from "react-redux";
const { Header, Footer } = Layout;
const { Search } = Input;

const HomeSublayout = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedClass, setSelectedClass] = useState(null);
    const [showCoursePendingRegistered, setShowCoursePendingRegistered] = useState(false);
    const [showClassDetails, setShowClassDetails] = useState(false);
    const navigate = useNavigate();
    const state = useSelector(state => state?.appReducer);
    const userDataString = localStorage.getItem('userData');
    const userData = JSON.parse(userDataString);
    const userInfo = userData?.payload;

    const handleLogout = () => {
        message.success('Đăng xuất thành công.');

        setTimeout(()=>{
            localStorage.clear()
            navigate("/login")
        },1500)
    }
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const handleConfirmPasswordChange = async (oldPassword, newPassword) => {
        const payload = {
            "studentId": userInfo?.studentId, 
            "oldPassword": oldPassword, 
            "newPassword": newPassword
        }
        try {
            const rs = await axios.put(`/student/changePassword`, payload);
            if(rs.errCode === 0){
                localStorage.clear()
                navigate("/login")
                message.success('Đổi mật khẩu thành công');
                closeModal()
            } else {
                message.error('Đổi mật khẩu thất bại');
            }
        } catch (error) {
            console.log('handleConfirmPasswordChange', error);
        }
    }
    const userMenu = (
        <Menu>
            <Menu.Item key="profile">
                <a href="#">Thông tin cá nhân</a>
            </Menu.Item>
            <Menu.Item key="changePassword">
                <a type="button" onClick={openModal} href="#">Đổi mật khẩu</a>
            </Menu.Item>
            <Menu.Item key="logout">
                <a type="button" onClick={handleLogout}>Đăng xuất</a>
            </Menu.Item>
        </Menu>
    );

    const [email, setEmail] = useState("");
    const [spiner,setSpiner] = useState(false);
        // sendotp
    const sendOtp = async (e) => {
        e.preventDefault();

        if (email === "") {
            toast.error("Enter Your Email !")
        } else if (!email.includes("@")) {
            toast.error("Enter Valid Email !")
        } else {
            setSpiner(true)
            const data = {
                email: email
            }

            const response = await axios.post("/user/send-otp", data);

            if (response.status === 200) {
                setSpiner(false)
                // navigate("/user/otp",{state:email})
            } else {
                toast.error(response.response.data.error);
            }
        }
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header className="header" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #ccc', padding: '0 200px', borderBlockColor:'#F5F5F5' }}>
                <Row justify="space-between" align="middle">
                    <Col xs={12} sm={8} md={6} lg={4} xl={3}>
                        <div className="logo" style={{display:'flex', justifyContent:'center'}}>
                            <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Logo_IUH.png/800px-Logo_IUH.png'} alt="Logo" style={{ height: 40 }} />
                        </div>
                    </Col>
                    <Col xs={12} sm={8} md={10} lg={12} xl={14}>
                        <div className="search" style={{ display: 'flex', alignItems:'center' }}>
                            <Search placeholder="Search" />
                        </div>
                    </Col>
                    <Col xs={24} sm={8} md={8} lg={8} xl={7}>
                        <div className="header-right" style={{ textAlign: 'right' }}>
                            <Button type="text" icon={<HomeOutlined />} title="Trang chủ" />
                            <Button type="text" icon={<BellOutlined />} title="Tin tức"/>
                            <Dropdown overlay={userMenu} trigger={['click']}>
                                <Button type="text" icon={<Avatar icon={<UserOutlined />} />} style={{ marginLeft: 8 }}>
                                    {userInfo.name}
                                    <DownOutlined/>
                                </Button>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </Header>
            <Content style={{padding:'0 260px'}}>
                <Row style={{padding:0, margin:10}}>
                    <Col span={15}>
                        <StudentDetail userInfo={userInfo}/>
                    </Col>
                    <Col span={9}>
                        <DashboardNotification style={{padding:10, marginRight:10}} /> 
                    </Col>
                </Row>
                <Row style={{padding:0, margin:10, marginTop:-10, marginRight:20}}>
                    <DashBoardMenu/>
                </Row>
                <Row style={{padding:0, margin:10, marginRight:0}}>
                    <DashboardLearningProgress/>
                </Row>
                {/* modal */}
                <ChangePasswordModal
                visible={isModalVisible}
                onCancel={closeModal}
                onConfirm={handleConfirmPasswordChange}
                />
                <Row>
                    {/* <Button type="primary" onClick={sendOtp}>Open Modal</Button> */}
                </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2024 Created by You</Footer>
        </Layout>
    )
}

export default HomeSublayout;
