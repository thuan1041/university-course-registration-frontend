import React, { useState } from "react";
import { Layout, Input, Button, Avatar, Menu, Dropdown, Row, Col } from 'antd';
import { HomeOutlined, BellOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import { Content } from "antd/es/layout/layout";
import StudentDetail from "../components/studentInfo/StuddentDetail";
import DashBoardMenu from "../components/dasdboard/DashbooardMenu";
import DashboardLearningProgress from "../components/dasdboard/DashboardLearningProgress";
import DashboardNotification from "../components/dasdboard/DashboardNotification";

const { Header, Footer } = Layout;
const { Search } = Input;

const HomeSublayout = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedClass, setSelectedClass] = useState(null);
    const [showCoursePendingRegistered, setShowCoursePendingRegistered] = useState(false);
    const [showClassDetails, setShowClassDetails] = useState(false);

    const userMenu = (
        <Menu>
            <Menu.Item key="profile">
                <a href="#">Thông tin cá nhân</a>
            </Menu.Item>
            <Menu.Item key="changePassword">
                <a href="#">Đổi mật khẩu</a>
            </Menu.Item>
            <Menu.Item key="logout">
                <a href="#">Đăng xuất</a>
            </Menu.Item>
        </Menu>
    );

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
                                    Trần Minh Thuận
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
                        <StudentDetail/>
                    </Col>
                    <Col span={9}>
                        <DashboardNotification/>
                    </Col>
                </Row>
                <Row style={{padding:0, margin:10, marginTop:-10, backgroundColor:'red'}}>
                    <DashBoardMenu/>
                </Row>
                <Row style={{padding:0, margin:10}}>
                    <DashboardLearningProgress/>
                </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2024 Created by You</Footer>
        </Layout>
    )
}

export default HomeSublayout;
