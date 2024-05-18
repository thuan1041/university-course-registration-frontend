import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import './homeSubLayout.scss';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import { Button, Drawer, Form, Row, Select, message, theme , Menu, Table} from 'antd';
import logo from '../../public/images/dai-hoc-cong-nghiep-bacground.png'
import Courses from "../components/courses/Courses";
import RegistrationControl from "../components/registrationControl/RegistrationControl";
import StudentInfo from "../components/studentInfo/StudentInfo";
import CoursePendingRegistered from "../components/courses/CoursePendingRegistered";
import ClassDetails from "../components/courses/ClassDetails";
import axios from '../../src/utils/axios';
import RegisteredCourse from "../components/courses/RegisteredCourse";
import { Layout, Input, Avatar, Dropdown, Col, Card, DatePicker, Radio, Space, Spin, Alert, InputNumber } from 'antd';
import { HomeOutlined, BellOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import StudentDetail from "../components/studentInfo/StuddentDetail";
import DashBoardMenu from "../components/dasdboard/DashbooardMenu";
import DashboardLearningProgress from "../components/dasdboard/DashboardLearningProgress";
import DashboardNotification from "../components/dasdboard/DashboardNotification";
import { useFetcher, useNavigate } from "react-router-dom";
import ChangePasswordModal from "../../src/modals/app/changePasswordModal";
import { useSelector } from "react-redux";
import {
    InfoCircleOutlined,
    BookOutlined,
    FormOutlined,
    DollarCircleOutlined,
    QrcodeOutlined,
    CalendarOutlined,
    PrinterOutlined,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    ExpandOutlined,
    EditOutlined,
    TeamOutlined
  } from '@ant-design/icons';
import moment from 'moment';


const { Search } = Input;
const { Option } = Select;
const {Header, Content, Footer} = Layout;
const { Sider } = Layout; 
const { SubMenu } = Menu;

const Mark = () => {
    const [dataSource, setDataSource] = useState([
        // Dữ liệu mẫu
        { key: '1', stt: 1, studentId: 'SV001', fullName: 'Nguyễn Văn A', grade: 0 },
        { key: '2', stt: 2, studentId: 'SV002', fullName: 'Trần Thị B', grade: 0 },
        // Thêm các dòng dữ liệu cho các học viên khác ở đây
    ]);

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
        },
        {
            title: 'Mã số sinh viên',
            dataIndex: 'studentId',
            key: 'studentId',
        },
        {
            title: 'Họ và tên',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'Điểm',
            dataIndex: 'grade',
            key: 'grade',
            render: (_, record) => (
                <InputNumber
                    defaultValue={record.grade}
                    onChange={(value) => handleGradeChange(record.key, value)}
                />
            ),
        },
        {
            title: 'Hành động',
            key: 'action',
            render: (_, record) => (
                <Button type="primary" onClick={() => handleSave(record.key)}>
                    Lưu
                </Button>
            ),
        },
    ];

    const handleGradeChange = (key, value) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => key === item.key);
        if (index > -1) {
            newData[index].grade = value;
            setDataSource(newData);
        }
    };

    const handleSave = (key) => {
        // Xử lý lưu điểm của học viên có key tương ứng
        // Thường là gửi yêu cầu lưu điểm đến máy chủ
    };        
    return (
        <>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false} // Tắt phân trang nếu danh sách học viên dài
            />
        </>
    )
}

const HomeInstructorLayout = () => {
    const savedData = localStorage.getItem('userData');
    const parsedData = JSON.parse(savedData);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const TeachingClasses = () => {
        // const [classes, setClasses] = useState([]);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);

        const data = [
            {
                _id: '1',
                name: 'Hệ cơ sở dữ liệu',
                room: 'X12.07',
                weekDay: 2,
                start: 1,
                end: 3,
                semester: 'HKII 2024-2025'
            },
            {
                _id: '2',
                name: 'Lập trình hướng đối tượng',
                room: 'X12.08',
                weekDay: 3,
                start: 2,
                end: 4,
                semester: 'HKII 2024-2025'
            },
            {
                _id: '3',
                name: 'Cấu trúc dữ liệu và giải thuật',
                room: 'X12.09',
                weekDay: 4,
                start: 3,
                end: 5,
                semester: 'HKII 2024-2025'
            },
            {
                _id: '4',
                name: 'Mạng máy tính',
                room: 'X12.10',
                weekDay: 5,
                start: 4,
                end: 6,
                semester: 'HKII 2024-2025'
            },
            {
                _id: '5',
                name: 'Phân tích và thiết kế hệ thống',
                room: 'X12.11',
                weekDay: 6,
                start: 5,
                end: 7,
                semester: 'HKII 2024-2025'
            }
        ];
        const columns = [
            {
                title: 'Mã lớp học phần',
                dataIndex: '_id',
            },
            {
                title: 'Tên môn học',
                dataIndex: 'name',
            },
            {
                title: 'Phòng học',
                dataIndex: 'room',
            },
            {
                title: 'Thứ',
                dataIndex: 'weekDay',
                render: (weekDay) => {
                    const days = ["Chủ Nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
                    return days[weekDay] || "Unknown";
                }
            },
            {
                title: 'Thời gian bắt đầu',
                dataIndex: 'start',
                render: (start) => `Tiết ${start}`,
            },
            {
                title: 'Thời gian kết thúc',
                dataIndex: 'end',
                render: (end) => `Tiết ${end}`,
            },
            {
                title: 'Học kỳ',
                dataIndex: 'semester',
            },
            {
                title: 'Danh sách học viên',
                dataIndex: 'viewStudents',
                render: (_, record) => (
                    <Space size="mall">
                        <Button type="primary"  icon={<TeamOutlined style={{fontSize:12}} />} onClick={() => handleViewStudents(record._id)} />
                    </Space> 
                ),
            },
            {
                title: 'Chấm điểm',
                dataIndex: 'score',
                render: (_, record) => (
                    <Space size="small">
                        <Button type="default" icon={<EditOutlined style={{fontSize:12}} />} onClick={() => handleScore(record._id)} />
                    </Space>
                ),
            }
        ];
    
        const handleViewStudents = (classId) => {
            // Thực hiện hành động khi nhấn nút "Xem danh sách học viên"
            console.log(`Xem danh sách học viên của lớp học phần có ID: ${classId}`);
            // Bạn có thể điều hướng đến trang chi tiết hoặc mở modal hiển thị danh sách học viên
        };
    
        const handleScore = (classId) => {
            // Thực hiện hành động khi nhấn nút "Chấm điểm"
            console.log(`Chấm điểm cho lớp học phần có ID: ${classId}`);
            // Bạn có thể điều hướng đến trang chấm điểm hoặc mở modal chấm điểm
        };
  
    
        if (loading) {
            return <Spin tip="Loading..." style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} />;
        }
    
        if (error) {
            return <Alert message="Error" description="Không thể tải dữ liệu." type="error" showIcon />;
        }
    
        return (
            // <Card title="Lớp học phần đang dạy" style={{ margin: '20px' }}>
                <Table columns={columns} dataSource={data} rowKey="_id" />
            // </Card>
        );
    };

    const MyContent = () => {
        
        return (
            <>
                <Row span={24} style={{background: '#fff'}}>
                    <div>
                        <h3  style={{padding:10, fontWeight:'600'}}>Lớp học phần đang dạy</h3>
                    </div>
                    <Content direction="vertical" style={{marginTop:10, display:'flex', flexDirection:'row', justifyContent:'space-between', paddingLeft:10}}>
                        <TeachingClasses></TeachingClasses>
                    </Content>
                </Row>
            </>
        );
    }

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const userMenu = (
        <Menu>
            <Menu.Item key="profile">
                <a href="#">Thông tin cá nhân</a>
            </Menu.Item>
            <Menu.Item key="changePassword">
                <a type="button" onClick={openModal} href="#">Đổi mật khẩu</a>
            </Menu.Item>
            <Menu.Item key="logout">
                <a type="button" >Đăng xuất</a>
            </Menu.Item>
        </Menu>
    );

    const MySidebar = () => {
        return (
            <Layout style={{ minHeight: '100vh' }}>
            <Sider style={{ background: '#fff', borderRight: '1px solid #ddd' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <Menu.Item key="1" icon={<HomeOutlined />} style={{ borderBottom: '1px solid #ddd' }}>
                  Trang chủ
                </Menu.Item>
                <SubMenu key="sub1" icon={<InfoCircleOutlined />} title="Thông tin chung" style={{ borderBottom: '1px solid #ddd' }}>
                  <Menu.Item key="2" style={{ borderBottom: '1px solid #ddd' }}>Thông tin sinh viên</Menu.Item>
                  <Menu.Item key="3" style={{ borderBottom: '1px solid #ddd' }}>Ghi chú nhắc nhở</Menu.Item>
                  <Menu.Item key="4" style={{ borderBottom: '1px solid #ddd' }}>Đề xuất cập nhật thông tin</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<BookOutlined />} title="Học tập" style={{ borderBottom: '1px solid #ddd' }}>
                  <Menu.Item key="5" style={{ borderBottom: '1px solid #ddd' }}>Kết quả học tập</Menu.Item>
                  <Menu.Item key="6" style={{ borderBottom: '1px solid #ddd' }}>Lịch học tập lớp học danh nghĩa</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<FormOutlined />} title="Đăng ký học phần" style={{ borderBottom: '1px solid #ddd' }}>
                  <Menu.Item key="7" style={{ borderBottom: '1px solid #ddd' }}>Chương trình khung</Menu.Item>
                  <Menu.Item key="8" style={{ borderBottom: '1px solid #ddd' }}>Đăng ký học phần</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" icon={<DollarCircleOutlined />} title="Học phí" style={{ borderBottom: '1px solid #ddd' }}>
                  <Menu.Item key="9" style={{ borderBottom: '1px solid #ddd' }}>Tra cứu công nợ</Menu.Item>
                  <Menu.Item key="10" style={{ borderBottom: '1px solid #ddd' }}>Thanh toán trực tuyến</Menu.Item>
                  <Menu.Item key="11" style={{ borderBottom: '1px solid #ddd' }}>Phiếu thu tổng hợp</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            {/* <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <SubMenu key="sub1" icon={<InfoCircleOutlined />} title="Quản lí lớp học phần" style={{ borderBottom: '1px solid #ddd' }}>
                        <Menu.Item key="1" style={{ borderBottom: '1px solid #ddd' }}>Lớp học</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider> */}
          </Layout>
        );
      };

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
                                {/* {userInfo.name} */}
                                <DownOutlined/>
                            </Button>
                        </Dropdown>
                    </div>
                </Col>
            </Row>
        </Header>
        <Content style={{padding:'0 260px', }}>
            <Row span={24}>
                <Col style={{marginTop:10}}>
                    <MySidebar/>
                </Col>
                <Col span={19} style={{ marginTop:10}}>
                    <MyContent/>
                    <Mark/>
                </Col>
            </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2024 Created by You</Footer>
    </Layout>
    )
}

export default HomeInstructorLayout;