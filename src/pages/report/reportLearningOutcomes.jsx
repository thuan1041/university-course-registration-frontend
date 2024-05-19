import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import '../../layouts/homeSubLayout.scss';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import { Button, Drawer, Form, Row, Select, message, theme , Menu, Table} from 'antd';
import logo from '../../../public/images/dai-hoc-cong-nghiep-bacground.png'
import axios from '../../utils/axios';
import { Layout, Input, Avatar, Dropdown, Col, Card, DatePicker, Radio, Space, Spin, Alert, InputNumber } from 'antd';
import { HomeOutlined, BellOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
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
    TeamOutlined,
    SaveOutlined
  } from '@ant-design/icons';
import moment from 'moment';
import LeftSidebar from "../sidebar/LeftSidebar";


const { Search } = Input;
const { Option } = Select;
const {Header, Content, Footer} = Layout;
const { Sider } = Layout; 
const { SubMenu } = Menu;

const ReportTable = ({ data }) => {
    const [getResultCourse, setResultCourse] = useState([]);
    const savedData = localStorage.getItem('userData');
    // Chuyển đổi chuỗi JSON thành đối tượng JavaScript
    const parsedData = JSON.parse(savedData);
    // Sử dụng dữ liệu đã lấy từ localStorage
    const studenId = parsedData?.payload?.studentId;

    
    const fetchResultCourse =  async (studenId) => {
        const payload = {
            studentId: studenId
        }
        try {
            const rs = await axios.post(`student/getStudyResult`, payload);
            if(rs.errCode === 0){
                setResultCourse(rs.data)
            }
        } catch (error) {
            console.log("error",error);
        }
    }
    useEffect(() => {
        fetchResultCourse(studenId)
    }, []);

    const generateFakeData = () => {
        const data = [];
        const gradeScale = ['F', 'D', 'D+', 'C', 'C+', 'B', 'B+', 'A', 'A+'];
        const honorScale = ['Kém', 'Yếu', 'Trung bình', 'Khá', 'Giỏi', 'Xuất sắc'];
    
        for (let i = 1; i <= 10; i++) {
            const gradeIndex = Math.floor(Math.random() * gradeScale.length);
            const honorIndex = Math.floor(Math.random() * honorScale.length);
    
            data.push({
                stt: i,
                maLopHP: `LHP00${i}`,
                tenMonHoc: `Môn học ${i}`,
                soTinChi: Math.floor(Math.random() * 5) + 1,
                diem: parseFloat((Math.random() * 10).toFixed(1)),
                thangDiem4: Math.floor(Math.random() * 4) + 1,
                thangDiemChu: gradeScale[gradeIndex],
                xepLoai: honorScale[honorIndex]
            });
        }
        return data;
    };
    
    
    const fakeData = generateFakeData();

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            render: (_, __, index) => index + 1,
        },
        {
            title: 'Mã lớp học phần',
            dataIndex: '_id',
            key: '_id',
            render: (_id) => `LHP${_id.slice(-8)}`,
        },
        {
            title: 'Tên môn học',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Số tín chỉ',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Điểm',
            dataIndex: 'point_10',
            key: 'point_10',
        },
        {
            title: 'Thang điểm 4',
            dataIndex: 'point_4',
            key: 'point_4',
        },
        {
            title: 'Thang điểm chữ',
            dataIndex: 'point_char',
            key: 'point_char',
        },
        {
            title: 'Xếp loại',
            dataIndex: 'academic_performance',
            key: 'academic_performance',
        },
    ];
    

    return (
        <Table
            dataSource={getResultCourse}
            columns={columns}
            pagination={false} // Tắt phân trang nếu cần
        />
    );
};


const ReportLearingOutcomes = () => {
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
                        <h3  style={{padding:10, fontWeight:'600'}}>Kết quả học tập</h3>
                    </div>
                    <Content direction="vertical" style={{marginTop:10, display:'flex', flexDirection:'row', justifyContent:'space-between', paddingLeft:10}}>
                        <ReportTable/>
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
                    <LeftSidebar/>
                </Col>
                <Col span={19} style={{ marginTop:10}}>
                    <MyContent/>
                </Col>
            </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2024 Created by You</Footer>
    </Layout>
    )
}

export default ReportLearingOutcomes;