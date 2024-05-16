import React, { useEffect, useState } from "react";
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
import moment from 'moment';


const { Sider } = Layout; 
const { SubMenu } = Menu;

const dataFetch = [{
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
            "instructor": "Hoàng Hữu Nghĩa",
            "maxStudents": 30,
            "waitingStudents": [],
            "registeredStudents": [
                20051041
            ],
            "classSchedule": {
                "weekDay": 2,
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
            "instructor": "Hoàng Hữu Nghĩa",
            "maxStudents": 30,
            "waitingStudents": [],
            "registeredStudents": [
                20051041
            ],
            "classSchedule": {
                "weekDay": 8,
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
            "_id": "664604bfe95feb70c573e866",
            "courseId": "66275e06c5bae68b2606b6320",
            "major": "66265ec3bd56e143ee8eb1c1",
            "instructor": "Hoàng Hữu Thuận",
            "maxStudents": 30,
            "waitingStudents": [],
            "registeredStudents": [
                20051041
            ],
            "classSchedule": {
                "weekDay": 13,
                "start": 15,
                "end": 6,
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
            "_id": "664604bfe95feb70c573e866",
            "courseId": "66275e06c5bae68b2606b6320",
            "major": "66265ec3bd56e143ee8eb1c1",
            "instructor": "Hoàng Hữu Thuận",
            "maxStudents": 30,
            "waitingStudents": [],
            "registeredStudents": [
                20051041
            ],
            "classSchedule": {
                "weekDay": 3,
                "start": 7,
                "end": 9,
                "_id": "664604bfe95feb70c573e80f"
            },
            "practiceSchedule": [
                {
                    "group": 1,
                    "weekDay": 8,
                    "start": 10,
                    "end": 12
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
            "_id": "664604bfe95feb70c573e866",
            "courseId": "66275e06c5bae68b2606b6320",
            "major": "66265ec3bd56e143ee8eb1c1",
            "instructor": "Hoàng Hữu Thuận",
            "maxStudents": 30,
            "waitingStudents": [],
            "registeredStudents": [
                20051041
            ],
            "classSchedule": {
                "weekDay": 3,
                "start": 7,
                "end": 9,
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
                    "start": 10,
                    "end": 12
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

const timeTableMorning = [
    [
        {
            "weekDay": 2,
            "start": 1,
            "end": 3,
            "_id": "664604bfe95feb70c573e80f",
            "instructor": "Võ Văn Hải",
            "room": "X10.08",
            "name":"Lập trình phân tán"
        },
        'null', 
        'null', 
        {
            "weekDay": 5,
            "start": 1,
            "end": 3,
            "_id": "664604bfe95feb70c573e80f",
            "instructor": "Nguyễn Thị Thanh",
            "room": "A.01",
            "name":"Lập trình Java"
        },
        'null',
        {
            "weekDay": 7,
            "start": 1,
            "end": 3,
            "_id": "664604bfe95feb70c573e80f",
            "instructor": "Trần Minh Thuận",
            "room": "X10.08",
            "name":"Kiến trúc và Thiết kế phần mềm"
        },
        'null'
    ],
    [
        {
            "weekDay": 2,
            "start": 4,
            "end": 6,
            "_id": "664604bfe95feb70c573e80f",
            "instructor": "Trần Minh Thuận",
            "room": "X10.08",
            "name": "Kiến trúc và Thiết kế phần mềm",
        },
        'null', 
        {
            "weekDay": 4,
            "start": 4,
            "end": 5,
            "_id": "664604bfe95feb70c573e80f",
            "instructor": "Võ Văn Thái",
            "room": "X10.08",
            "name":"Lập trình WWW"
        },
        'null', 
        'null',
        {
            "weekDay": 7,
            "start": 5,
            "end": 6,
            "_id": "664604bfe95feb70c573e80f",
            "instructor": "Võ Văn Hải",
            "room": "X10.08",
            "name":"Lập trình phân tán"

        },
        {
            "weekDay": 8,
            "start": 4,
            "end": 6,
            "_id": "664604bfe95feb70c573e80f",
            "instructor": "Võ Văn Thái",
            "room": "X10.08",
            "name":"Lập trình WWW"
        },
    ],
];

const timeTableAfternoon = [
    [
        {
            "weekDay": 2,
            "start": 7,
            "end": 9,
            "_id": "664604bfe95feb70c573e80f",
            "instructor": "Võ Văn Hải",
            "room": "X10.08",
            "name":"Lập trình phân tán",
        },
        'null', 
        'null', 
        {
            "weekDay": 5,
            "start": 7,
            "end": 9,
            "_id": "664604bfe95feb70c573e80f",
            "instructor": "Nguyễn Thị Thanh",
            "room": "A.01",
            "name":"Java"
        },
        'null',
        {
            "weekDay": 7,
            "start": 8,
            "end": 9,
            "_id": "664604bfe95feb70c573e80f",
            "instructor": "Trần Minh Thuận",
            "room": "X10.08",
            "name":"Kiến trúc và Thiết kế phần mềm"
        },
        'null'
    ],
    [
        {
            "weekDay": 2,
            "start": 10,
            "end": 12,
            "_id": "664604bfe95feb70c573e80f",
            "instructor": "Trần Minh Thuận",
            "room": "X10.08",
            "name":"Kiến trúc và Thiết kế phần mềm"
        },
        'null', 
        {
            "weekDay": 4,
            "start": 10,
            "end": 12,
            "_id": "664604bfe95feb70c573e80f",
            "instructor": "Võ Văn Thái",
            "room": "X10.08",
            "name":"Lập trình WWW"
        },
        'null', 
        'null',
        {
            "weekDay": 7,
            "start": 9,
            "end": 12,
            "_id": "664604bfe95feb70c573e80f",
            "instructor": "Võ Văn Hải",
            "room": "X10.08",
            "name":"Lập trình Lập trình phân tán"
        },
        {
            "weekDay": 8,
            "start": 10,
            "end": 12,
            "_id": "664604bfe95feb70c573e80f",
            "instructor": "Võ Văn Thái",
            "room": "X10.08",
            "name":"Lập trình WWW"
        },
    ],
];

const fetchDataTimeTable = () => {
    const getDayCurrent = moment().format('YYYY-MM-DD');
    const timeOutCourse = moment(getDayCurrent).add(30, 'days')
    console.log("timeOutCourse", timeOutCourse.format('YYYY-MM-DD'));
    const classSchedules = dataFetch[0].currentCourses.map(course => course.classSchedule);
    console.log("classSchedules", classSchedules[0].start);
    
    const handleDataCluster = (classSchedules) => {
        const dataClusterMorning = [];
        const dataClusterAterNoon = [];
        const dataClusterEvening = [];
        for (let i = 0; i < classSchedules.length; i++) {
            if(classSchedules[i].start >= 0 && classSchedules[i].start <= 6) {
                const data = {
                    weekDay: classSchedules[i].weekDay,
                    start: classSchedules[i].start,
                    end: classSchedules[i].end,
                    _id: classSchedules[i]._id,
                }
                dataClusterMorning.push(data);
            } else
            if (classSchedules[i].start >= 7 && classSchedules[i].start <= 12) {
                const data = {
                    weekDay: classSchedules[i].weekDay,
                    start: classSchedules[i].start,
                    end: classSchedules[i].end,
                    _id: classSchedules[i]._id,
                }
                dataClusterAterNoon.push(data);
            } else 
            if (classSchedules[i].start >= 13 && classSchedules[i].start <= 15) {
                const data = {
                    weekDay: classSchedules[i].weekDay,
                    start: classSchedules[i].start,
                    end: classSchedules[i].end,
                    _id: classSchedules[i]._id,
                }
                dataClusterEvening.push(data);
            }
        }
        return {
            morning: dataClusterMorning,
            afternoon: dataClusterAterNoon,
            evening: dataClusterEvening
        }
    }
    const dataAfterCluster = handleDataCluster(classSchedules);
    console.log("dataAfterCluster_Morning", dataAfterCluster.morning);
    console.log("dataAfterCluster_AfterNoon", dataAfterCluster.afternoon);
    console.log("dataAfterCluster_Evening", dataAfterCluster.evening);

    const handleDataTimeGrouping = (dataCluster) => {
        const dataTimeGrouping = ['null', 'null', 'null', 'null', 'null', 'null', 'null'];
        for (let i = 0; i < dataCluster.length; i++) {
            const item = dataCluster[i];
            if (item.weekDay != null) {
                const position = item.weekDay - 2;
                if (position >= 0 && position < 7) {
                    dataTimeGrouping[position] = item;
                }
            }
        }
        return dataTimeGrouping;
    }
    const dataAfterGrouping = handleDataTimeGrouping(dataAfterCluster.morning)
    console.log("dataAfterGorupingMoring", dataAfterGrouping);
    return (
        dataAfterGrouping
    )
}


const RenderTimeTableOnRow = ({data}) => {
    const rows = [];

    for (let i = 0; i < data.length; i++) {
        const cols = [];
        for (let j = 0; j < data[i].length; j++) {
            if(data[i][j] != 'null') {
                cols.push(
                    <Col key={j} span={3} style={{ margin: 6 }}>
                        <ItemTimeTable subject={data[i][j]} />
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
            <Row key={i} style={{ display: 'flex', justifyContent: 'center' }}>
                {cols}
            </Row>
        );
    }
    return <>{rows}</>;
}

const ItemTimeTable = ({subject}) => {
    return (
        <Card style={{backgroundColor:"#E7ECF0", width:'100px', minHeight:'250px'}}>
            <p style={{fontWeight:'700', fontSize:11, width:70, marginLeft:-6}}>{subject.name}</p>
            {/* <p style={{fontSize:10, width:70, marginLeft:-6, fontWeight:'500'}}>{`KTPM16A - LHP${subject?._id.slice(-8)}`.toUpperCase()}</p> */}
            <p style={{fontSize:10, width:70, marginLeft:-6, fontWeight:'500'}}>{`Tiết: ${subject?.start} - ${subject?.end}`}</p>
            <p style={{fontSize:10, width:70, marginLeft:-6, fontWeight:'500'}}>{`Phòng: ${subject?.room}`}</p>
            <p style={{fontSize:10, width:70, marginLeft:-6, fontWeight:'500'}}>{`GV: ${subject?.instructor}`}</p>
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

  const TimeTable = ({dayOfWeek, selectedData, currentDayOfWeek, currentDay, dataFetch}) => {
    const handleCurrentDay = (currentDayOfWeek, currentDay) => {
        const selectedDate = moment(currentDayOfWeek, 'dd-mm-yyyy');
        switch (currentDay) {
            case 'Monday':
                return [
                    moment(selectedDate), 
                    moment(selectedDate).add(1, 'days'), 
                    moment(selectedDate).add(2, 'days'), 
                    moment(selectedDate).add(3, 'days'),
                    moment(selectedDate).add(4, 'days'),
                    moment(selectedDate).add(5, 'days'),
                    moment(selectedDate).add(6, 'days')
                ]
            case 'Tuesday':
                return [
                    moment(selectedDate).add(-1, 'days'),  
                    moment(selectedDate).add(0, 'days'), 
                    moment(selectedDate).add(1, 'days'), 
                    moment(selectedDate).add(2, 'days'),
                    moment(selectedDate).add(3, 'days'),
                    moment(selectedDate).add(4, 'days'),
                    moment(selectedDate).add(5, 'days')
                ]
            case 'Wednesday':
                return [
                    moment(selectedDate).add(-2, 'days'),  
                    moment(selectedDate).add(-1, 'days'), 
                    moment(selectedDate).add(0, 'days'), 
                    moment(selectedDate).add(1, 'days'),
                    moment(selectedDate).add(3, 'days'),
                    moment(selectedDate).add(3, 'days'),
                    moment(selectedDate).add(4, 'days')
                ]
            case 'Thursday':
                return [
                    moment(selectedDate).add(-3, 'days'),  
                    moment(selectedDate).add(-2, 'days'), 
                    moment(selectedDate).add(-1, 'days'), 
                    moment(selectedDate).add(0, 'days'),
                    moment(selectedDate).add(1, 'days'),
                    moment(selectedDate).add(2, 'days'),
                    moment(selectedDate).add(3, 'days')
                ]
            case 'Friday':
                return [
                    moment(selectedDate).add(-4, 'days'),  
                    moment(selectedDate).add(-3, 'days'), 
                    moment(selectedDate).add(-2, 'days'), 
                    moment(selectedDate).add(-1, 'days'),
                    moment(selectedDate).add(0, 'days'),
                    moment(selectedDate).add(1, 'days'),
                    moment(selectedDate).add(2, 'days')
                ]
            case 'Saturday':
                return [
                    moment(selectedDate).add(-5, 'days'),  
                    moment(selectedDate).add(-4, 'days'), 
                    moment(selectedDate).add(-3, 'days'), 
                    moment(selectedDate).add(-2, 'days'),
                    moment(selectedDate).add(-1, 'days'),
                    moment(selectedDate).add(0, 'days'),
                    moment(selectedDate).add(1, 'days')
                ]
            case 'Sunday':
                return [
                    moment(selectedDate).add(-6, 'days'),  
                    moment(selectedDate).add(-5, 'days'), 
                    moment(selectedDate).add(-4, 'days'), 
                    moment(selectedDate).add(-3, 'days'),
                    moment(selectedDate).add(-2, 'days'),
                    moment(selectedDate).add(-1, 'days'),
                    moment(selectedDate).add(0, 'days')
                ]
            default:
                return '';
        }
    }
    const handleDayOfWeek = (dayOfWeek, dateString) => {
        const selectedDate = moment(dateString, 'YYYY-MM-DD');
        switch (dayOfWeek) {
            case 0:
                return [
                    moment(selectedDate), 
                    moment(selectedDate).add(1, 'days'), 
                    moment(selectedDate).add(2, 'days'), 
                    moment(selectedDate).add(3, 'days'),
                    moment(selectedDate).add(4, 'days'),
                    moment(selectedDate).add(5, 'days'),
                    moment(selectedDate).add(6, 'days')
                ]
            case 1:
                return [
                    moment(selectedDate).add(-1, 'days'),  
                    moment(selectedDate).add(0, 'days'), 
                    moment(selectedDate).add(1, 'days'), 
                    moment(selectedDate).add(2, 'days'),
                    moment(selectedDate).add(3, 'days'),
                    moment(selectedDate).add(4, 'days'),
                    moment(selectedDate).add(5, 'days')
                ]
            case 2:
                return [
                    moment(selectedDate).add(-2, 'days'),  
                    moment(selectedDate).add(-1, 'days'), 
                    moment(selectedDate).add(0, 'days'), 
                    moment(selectedDate).add(1, 'days'),
                    moment(selectedDate).add(3, 'days'),
                    moment(selectedDate).add(3, 'days'),
                    moment(selectedDate).add(4, 'days')
                ]
            case 3:
                return [
                    moment(selectedDate).add(-3, 'days'),  
                    moment(selectedDate).add(-2, 'days'), 
                    moment(selectedDate).add(-1, 'days'), 
                    moment(selectedDate).add(0, 'days'),
                    moment(selectedDate).add(1, 'days'),
                    moment(selectedDate).add(2, 'days'),
                    moment(selectedDate).add(3, 'days')
                ]
            case 4:
                return [
                    moment(selectedDate).add(-4, 'days'),  
                    moment(selectedDate).add(-3, 'days'), 
                    moment(selectedDate).add(-2, 'days'), 
                    moment(selectedDate).add(-1, 'days'),
                    moment(selectedDate).add(0, 'days'),
                    moment(selectedDate).add(1, 'days'),
                    moment(selectedDate).add(2, 'days')
                ]
            case 5:
                return [
                    moment(selectedDate).add(-5, 'days'),  
                    moment(selectedDate).add(-4, 'days'), 
                    moment(selectedDate).add(-3, 'days'), 
                    moment(selectedDate).add(-2, 'days'),
                    moment(selectedDate).add(-1, 'days'),
                    moment(selectedDate).add(0, 'days'),
                    moment(selectedDate).add(1, 'days')
                ]
            case 6:
                return [
                    moment(selectedDate).add(-6, 'days'),  
                    moment(selectedDate).add(-5, 'days'), 
                    moment(selectedDate).add(-4, 'days'), 
                    moment(selectedDate).add(-3, 'days'),
                    moment(selectedDate).add(-2, 'days'),
                    moment(selectedDate).add(-1, 'days'),
                    moment(selectedDate).add(0, 'days')
                ]
            default:
                return '';
        }
    }
    const dataChangeDays = handleDayOfWeek(dayOfWeek, selectedData);
    const dataCurrentDay = handleCurrentDay(currentDayOfWeek, currentDay);

    console.log("daaFretch", dataFetch[1]);
    return (
        <Content>
            {(dataCurrentDay != null && dataChangeDays=='') ? (
                <Row span={24} style={{border: '1px solid #ddd', background: '#fff', backgroundColor:'#F3F7F9', minHeight:'60px', display:'flex', alignItems:'center'}}>
                    <Col span={3}>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Ca học</p>
                    </Col>
                    <Col span={3}>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Thứ 2</p>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>{dataCurrentDay[0].format('DD/MM/YYYY')}</p>
                    </Col>
                    <Col span={3}>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Thứ 3</p>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>{dataCurrentDay[1].format('DD/MM/YYYY')}</p>
                    </Col>
                    <Col span={3}>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Thứ 4</p>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>{dataCurrentDay[2].format('DD/MM/YYYY')}</p>
                    </Col>
                    <Col span={3}>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Thứ 5</p>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>{dataCurrentDay[3].format('DD/MM/YYYY')}</p>
                    </Col>
                    <Col span={3}>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Thứ 6</p>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>{dataCurrentDay[4].format('DD/MM/YYYY')}</p>
                    </Col>
                    <Col span={3}>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Thứ 7</p>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>{dataCurrentDay[5].format('DD/MM/YYYY')}</p>
                    </Col>
                    <Col span={3}>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Chủ nhật</p>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>{dataCurrentDay[6].format('DD/MM/YYYY')}</p>
                    </Col>
                </Row>
            ) : (dataChangeDays !=null && dataCurrentDay !=null) ? (
                <Row span={24} style={{border: '1px solid #ddd', background: '#fff', backgroundColor:'#F3F7F9', minHeight:'60px', display:'flex', alignItems:'center'}}>
                    <Col span={3}>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Ca học</p>
                    </Col>
                    <Col span={3}>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Thứ 2</p>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>{dataChangeDays[0].format('DD/MM/YYYY')}</p>
                    </Col>
                    <Col span={3}>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Thứ 3</p>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>{dataChangeDays[1].format('DD/MM/YYYY')}</p>
                    </Col>
                    <Col span={3}>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Thứ 4</p>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>{dataChangeDays[2].format('DD/MM/YYYY')}</p>
                    </Col>
                    <Col span={3}>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Thứ 5</p>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>{dataChangeDays[3].format('DD/MM/YYYY')}</p>
                    </Col>
                    <Col span={3}>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Thứ 6</p>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>{dataChangeDays[4].format('DD/MM/YYYY')}</p>
                    </Col>
                    <Col span={3}>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Thứ 7</p>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>{dataChangeDays[5].format('DD/MM/YYYY')}</p>
                    </Col>
                    <Col span={3}>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>Chủ nhật</p>
                        <p style={{textAlign:'center', fontWeight:'700', color:'#1DA1F2'}}>{dataChangeDays[6].format('DD/MM/YYYY')}</p>
                    </Col>
                </Row>
            ) : (<></>)

            }
            <Row style={{borderBottom: '1px solid #ccc'}}>
                <Col span={3} style={{backgroundColor:'#FFFFCE'}}>
                    <p style={{textAlign:'center', fontWeight:'700', color:'gray'}}>Sáng</p>
                </Col>
                <Col span={21} style={{ backgroundImage: 'url("../../public/images/timetable_bg.png")', backgroundSize: 'cover', width:'100px', height:'100%', minHeight:'100px'}}>
                    <Row style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <RenderTimeTableOnRow data={[dataFetch]}/>
                    </Row>
                </Col>
            </Row>
            <Row style={{borderBottom: '1px solid #ccc'}}>
                <Col span={3} style={{backgroundColor:'#FFFFCE'}}>
                    <p style={{textAlign:'center', fontWeight:'700', color:'gray'}}>Chiều</p>
                </Col>
                <Col span={21} style={{ backgroundImage: 'url("../../public/images/timetable_bg.png")', backgroundSize: 'cover', width:'100px', height:'100%', minHeight:'100px'}}>
                    <Row style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        {/* <RenderTimeTableOnRow data={timeTableAfternoon}/> */}
                        <RenderTimeTableOnRow data={[dataFetch]}/>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col span={3} style={{backgroundColor:'#FFFFCE'}}>
                    <p style={{textAlign:'center', fontWeight:'700', color:'gray'}}>Tối</p>
                </Col>
                <Col span={21} style={{ backgroundImage: 'url("../../public/images/timetable_bg.png")', backgroundSize: 'cover', width:'100px', height:'100%', minHeight:'100px'}}>
                    <Row>
                    </Row>
                </Col>
            </Row>
        </Content>
    )
  }

    const { RangePicker } = DatePicker

    const MyContent = ({handleDataPickerChange, dayOfWeek, selectedData, dataFetch}) => {
        const [radioValue, setRadioValue] = React.useState('all');
        const [isLoading, setIsLoading] = useState(true);
        const currentDayOfWeek = moment().format('dd-mm-yyyy');
        const currentDay = moment().format('dddd')

        useEffect(() => {

            console.log('currentDayOfWeek', currentDayOfWeek);
            setIsLoading(false)
        }, []);

        const onRadioChange = e => {
        setRadioValue(e.target.value);
        };
        
        if(isLoading) return (<p>Loading...</p>)
        
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
                        <DatePicker style={{fontSize:'10px', height:30}}
                            onChange={handleDataPickerChange}
                        />
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
                <TimeTable dayOfWeek={dayOfWeek} selectedData={selectedData} setIsLoading={setIsLoading} currentDayOfWeek={currentDayOfWeek} currentDay={currentDay} dataFetch={dataFetch}/>
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
    const [selectedData, setSelectedData] = useState(null);
    const [dayOfWeek, setDayOfWeek] = useState(null);
    const [dataFetch,setDataFetch]  = useState(null);

    useEffect(() => {
        const dataFetch = fetchDataTimeTable()
        setDataFetch(dataFetch)
    }, []);

    const handleDataPickerChange = (date, dateString) => {
        const selectedDateMoment = moment(dateString, 'YYYY-MM-DD');
        const dayOfWeek = selectedDateMoment.day();
        console.log('dayOfWeek', dayOfWeek);
        setSelectedData(dateString);
        setDayOfWeek(dayOfWeek);
        console.log('dateString', dateString);
    }

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
                        {/* {isLoading ? (
                            <p>Loading...</p>
                        ) :( */}
                            <MyContent handleDataPickerChange={handleDataPickerChange} dayOfWeek={dayOfWeek} selectedData={selectedData} dataFetch={dataFetch}/>
                        {/* )
                        } */}
                    </Col>
                </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2024 Created by You</Footer>
        </Layout>
    )
}

export default BoardLayout;
