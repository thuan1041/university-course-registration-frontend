import React, { useState } from "react";
import { Layout, Input, Button, Avatar, Menu, Dropdown, Row, Col, message, Card, DatePicker, Radio, Space } from 'antd';
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
    ExpandOutlined
  } from '@ant-design/icons';


const { Sider } = Layout; 
const { SubMenu } = Menu;

const datafake1 = [
    {
        "_id": "664605e3af55520fe5297dcc",
        "studentId": 20051041,
        "studiedCourses": [],
        "currentCourses": [
            {
                "_id": "664604bfe95feb70c573e80d",
                "courseId": "66275e06c5bae68b2606b620",
                "major": "66265ec3bd56e143ee8eb1c1",
                "instructor": "Hoàng Hữu Nghĩa",
                "maxStudents": 30,
                "waitingStudents": [],
                "registeredStudents": [
                    20051041
                ],
                "classSchedule": {
                    "weekDay": 4,
                    "start": 1,
                    "end": 3,
                    "_id": "664604bfe95feb70c573e80f"
                },
                "practiceSchedule": [
                    {
                        "group": 1,
                        "weekDay": 4,
                        "start": 1,
                        "end": 3
                    },
                    {
                        "group": 2,
                        "weekDay": 8,
                        "start": 1,
                        "end": 3
                    }
                ],
                "room": "X12.07",
                "semester": "HKII 2024-2025",
                "status": true,
                "createdAt": "2024-05-16T13:06:07.137Z",
                "updatedAt": "2024-05-16T13:14:57.837Z",
                "__v": 2
            },
            {
                "_id": "664604bfe95feb70c573e80d",
                "courseId": "66275e06c5bae68b2606b620",
                "major": "66265ec3bd56e143ee8eb1c1",
                "instructor": "Hoàng Hữu Thuận",
                "maxStudents": 30,
                "waitingStudents": [],
                "registeredStudents": [
                    20051041
                ],
                "classSchedule": {
                    "weekDay": 4,
                    "start": 1,
                    "end": 3,
                    "_id": "664604bfe95feb70c573e80f"
                },
                "practiceSchedule": [
                    {
                        "group": 1,
                        "weekDay": 4,
                        "start": 1,
                        "end": 3
                    },
                    {
                        "group": 2,
                        "weekDay": 8,
                        "start": 1,
                        "end": 3
                    }
                ],
                "room": "X12.07",
                "semester": "HKII 2024-2025",
                "status": true,
                "createdAt": "2024-05-16T13:06:07.137Z",
                "updatedAt": "2024-05-16T13:14:57.837Z",
                "__v": 2
            }
        ],
        "failedCourses": [],
        "GPA": 0,
        "status": true,
        "__v": 1
    }
]

const datafake2 = datafake1.map(item => item.currentCourses)
console.log("datafake2", datafake2);


const RenderTimeTableOnRow = ({data}) => {
    const timeTables = [
        ['Math', 'English', 'History', 'null', 'PE', 'Music', '11'],
        ['Physics', 'null', 'Biology', 'null', 'PE', 'Drama', 'null'],
    ];

    const timeTables2 = [
        [{"classSchedule": {
            "weekDay": 4,
            "start": 1,
            "end": 3,
            "_id": "664604bfe95feb70c573e80f"
        },
        "practiceSchedule": [
            {
                "group": 1,
                "weekDay": 4,
                "start": 1,
                "end": 3
            },
            {
                "group": 2,
                "weekDay": 8,
                "start": 1,
                "end": 3
            }
        ]}
        ,'3', '3null','n3ull','n3ull','null', 'nu'
        ],
    ];

    const rows = [];

    for (let i = 0; i < timeTables2.length; i++) {
        const cols = [];
        for (let j = 0; j < timeTables2[i].length; j++) {
            if(timeTables2[i][j] != 'null') {
                cols.push(
                    <Col key={j} span={3} style={{ margin: 6 }}>
                        <ItemTimeTable subject={timeTables2[i][j]} />
                    </Col>
                );
            } else {
                cols.push(
                    <Col span={3} style={{ margin: 6 }}>
                        <ItemNULL/>
                    </Col>
                );
            }
        }
        rows.push(
            <Row key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {cols}
            </Row>
        );
    }

    return <>{rows}</>;
}

const ItemTimeTable = ({subject}) => {
    return (
        <Card style={{backgroundColor:"#E7ECF0", width:'100px'}}>
            <p style={{fontWeight:'700', fontSize:11, width:70, marginLeft:-6}}>Kiến trúc và Thiết kế phần mềm</p>
            <p style={{fontSize:10, width:70, marginLeft:-6, fontWeight:'500'}}></p>
            <p style={{fontSize:10, width:70, marginLeft:-6, fontWeight:'500'}}>Tiết: 5 - 6</p>
            <p style={{fontSize:10, width:70, marginLeft:-6, fontWeight:'500'}}>Phòng: X10.08</p>
            <p style={{fontSize:10, width:70, marginLeft:-6, fontWeight:'500'}}>GV: Võ Văn Hải</p>
        </Card>
    )
}

const ItemNULL = ({data}) => {
    return (
        <Card style={{ width:'100px', opacity:0}}>
            <p style={{fontWeight:'700', fontSize:11, width:70, marginLeft:-6}}></p>
        </Card>
    )
}

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
            <Card style={{minHeight:'40%', marginTop:6, border: '1px solid #ccc'}}>
                <img src="https://ascvn.com.vn/content/images/appsinhvienqr.png" alt="QR Code" style={{ width: '100%', height:"100%" }} />
            </Card>
          </Menu>
        </Sider>
      </Layout>
    );
  };

  const TimeTable = () => {

    return (
        <Content>
            <Row span={24} style={{border: '1px solid #ddd', background: '#fff', backgroundColor:'#F3F7F9', minHeight:'60px', display:'flex', alignItems:'center'}}>
                <Col span={3}>
                    <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Ca học</p>
                </Col>
                <Col span={3}>
                    <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Thứ 2</p>
                    <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>22/04/2024</p>
                </Col>
                <Col span={3}>
                    <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Thứ 3</p>
                    <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>23/04/2024</p>
                </Col>
                <Col span={3}>
                    <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Thứ 4</p>
                    <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>24/04/2024</p>
                </Col>
                <Col span={3}>
                    <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Thứ 5</p>
                    <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>25/04/2024</p>
                </Col>
                <Col span={3}>
                    <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Thứ 6</p>
                    <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>26/04/2024</p>
                </Col>
                <Col span={3}>
                    <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Thứ 7</p>
                    <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>27/04/2024</p>
                </Col>
                <Col span={3}>
                    <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Chủ nhật</p>
                    <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>28/04/2024</p>
                </Col>
            </Row>
            <Row style={{borderBottom: '1px solid #ccc'}}>
                <Col span={3} style={{backgroundColor:'#FFFFCE'}}>
                    <p style={{textAlign:'center', fontWeight:'700', color:'gray'}}>Sáng</p>
                </Col>
                <Col span={21} style={{ backgroundImage: 'url("../../public/images/timetable_bg.png")', backgroundSize: 'cover', width:'100px', height:'100%', minHeight:'100px'}}>
                    <Row style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <Col span={12}></Col>
                        <Col span={3} style={{marginLeft:36}}>
                            <ItemTimeTable/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{borderBottom: '1px solid #ccc'}}>
                <Col span={3} style={{backgroundColor:'#FFFFCE'}}>
                    <p style={{textAlign:'center', fontWeight:'700', color:'gray'}}>Chiều</p>
                </Col>
                <Col span={21} style={{ backgroundImage: 'url("../../public/images/timetable_bg.png")', backgroundSize: 'cover', width:'100px', height:'100%', minHeight:'100px'}}>
                    <Row style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        {/* <Col span={3} style={{margin:6}}>
                            <ItemTimeTable/>
                        </Col> */}
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col span={3} style={{backgroundColor:'#FFFFCE'}}>
                    <p style={{textAlign:'center', fontWeight:'700', color:'gray'}}>Tối</p>
                </Col>
                <Col span={21} style={{ backgroundImage: 'url("../../public/images/timetable_bg.png")', backgroundSize: 'cover', width:'100px', height:'100%', minHeight:'100px'}}>
                    {/* <Row style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <Col span={3} style={{margin:6}}>
                            <ItemTimeTable/>
                        </Col>
                        <Col span={3} style={{margin:6}}>
                            <ItemTimeTable/>
                        </Col>
                        <Col span={3} style={{margin:6}}>
                            <ItemTimeTable/>
                        </Col>
                        <Col span={3} style={{margin:6}}>
                            <ItemTimeTable/>
                        </Col>
                        <Col span={3} style={{margin:6}}>
                            <ItemTimeTable/>
                        </Col>
                        <Col span={3} style={{margin:6}}>
                            <ItemTimeTable/>
                        </Col>
                        <Col span={3} style={{margin:6}}>
                            <ItemTimeTable/>
                        </Col>
                    </Row> */}
                    <Row>
                        <RenderTimeTableOnRow/>
                    </Row>
                </Col>
            </Row>
        </Content>
    )
  }

    const { RangePicker } = DatePicker

    const MyContent = () => {
        const [radioValue, setRadioValue] = React.useState('all');
    
        const onRadioChange = e => {
        setRadioValue(e.target.value);
        };
  
    return (
        <>
            <Row span={24} style={{background: '#fff'}}>
                <div>
                    <h3  style={{padding:10, fontWeight:'600'}}>Lịch học, lịch thi theo tuần</h3>
                </div>
                <Content direction="vertical" style={{marginTop:10, display:'flex', flexDirection:'row', justifyContent:'space-between', paddingLeft:10}}>
                    <Content>
                        <Radio.Group  onChange={onRadioChange} value={radioValue} style={{ marginBottom: '16px', display:'flex', flexDirection:'row'}}>
                        <Radio.Button value="all" style={{ fontSize: '10px' }}>Tất cả</Radio.Button>
                        <Radio.Button value="schedule" style={{ fontSize: '10px' }}>Lịch học</Radio.Button>
                        <Radio.Button value="exam" style={{ fontSize: '10px' }}>Lịch thi</Radio.Button>
                        </Radio.Group>
                    </Content>
                    <Content>
                        <DatePicker style={{fontSize:'10px', height:30}}/>
                    </Content>
                    <Content>
                        <Button style={{ fontSize: '10px' }} icon={<CalendarOutlined />}>Hiện tại</Button>
                        <Button style={{ fontSize: '10px' }} icon={<PrinterOutlined />}>In lịch</Button>
                        <Button style={{ fontSize: '10px' }} icon={<ArrowLeftOutlined />}>Trở về</Button>
                        <Button style={{ fontSize: '10px' }} icon={<ArrowRightOutlined />}>Tiếp theo</Button>
                        <Button style={{ fontSize: '10px' }} icon={<ExpandOutlined />}>Mở rộng</Button>
                    </Content>
                    <Content/>
                </Content>
            </Row>
            <Row>
                <TimeTable/>
            </Row>
        </>
    );
  };

const BoardLayout = () => {
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
            <Content style={{padding:'0 260px', }}>
                <Row span={24}>
                    <Col style={{marginTop:10}}>
                        <MySidebar/>
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

export default BoardLayout;
