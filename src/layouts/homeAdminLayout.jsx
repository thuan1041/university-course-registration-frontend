import React, { useEffect, useState } from "react";
import { Layout, Input, Button, Avatar, Menu, Dropdown, Row, Col, message, Card, DatePicker, Radio, Space, Spin } from 'antd';
import { HomeOutlined, BellOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import { Content } from "antd/es/layout/layout";
import StudentDetail from "../components/studentInfo/StuddentDetail";
import DashBoardMenu from "../components/dasdboard/DashbooardMenu";
import DashboardLearningProgress from "../components/dasdboard/DashboardLearningProgress";
import DashboardNotification from "../components/dasdboard/DashboardNotification";
import { useFetcher, useNavigate } from "react-router-dom";
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
import LeftSidebarAdmin from "../pages/sidebar/LeftSideBarAdmin";
import TeachingClasses from "../components/admin/TeachingClassing";
import Mark from "../components/admin/Mark";
import CourseManager from "../components/admin/CourseManager";
import ClassRequest from "../components/admin/ClassRequest";


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
                "weekDay": 4,
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
                "weekDay": 4,
                "start": 13,
                "end": 15,
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
                "_id": "664604bfe95feb70c573e80f",
                "name": "Lập trình Java",
                "instructor":"Nguyễn Thị Thanh"
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

const fetchDataTimeTable = (dataAfter) => {
    if(dataAfter != null){
        const getDayCurrent = moment().format('YYYY-MM-DD');
        const timeOutCourse = moment(getDayCurrent).add(30, 'days')
        console.log("timeOutCourse", timeOutCourse.format('YYYY-MM-DD'));
        // const classSchedules = dataFetch[0].currentCourses.map(course => course.classSchedule);
        const classSchedules = dataAfter

        const handleDataCluster = (classSchedules) => {
            const dataClusterMorning_1_3 = [];
            const dataClusterMorning_4_6 = [];
            const dataClusterAterNoon_7_9 = [];
            const dataClusterAterNoon_10_12 = [];
            const dataClusterEvening = [];
            for (let i = 0; i < classSchedules.length; i++) {
                if(classSchedules[i].start >= 0 && classSchedules[i].start <= 3) {
                    const data = {
                        weekDay: classSchedules[i].weekDay,
                        start: classSchedules[i].start,
                        end: classSchedules[i].end,
                        _id: classSchedules[i]._id,
                        instructor: classSchedules[i].instructor,
                        room: classSchedules[i].room,
                        name: classSchedules[i].name,
                        semester: classSchedules[i].semester,
                        type: classSchedules[i].type
                    }
                    dataClusterMorning_1_3.push(data);
                } else
                if(classSchedules[i].start >= 4 && classSchedules[i].start <= 6) {
                    const data = {
                        weekDay: classSchedules[i].weekDay,
                        start: classSchedules[i].start,
                        end: classSchedules[i].end,
                        _id: classSchedules[i]._id,
                        instructor: classSchedules[i].instructor,
                        room: classSchedules[i].room,
                        name: classSchedules[i].name,
                        semester: classSchedules[i].semester,
                        type: classSchedules[i].type
                    }
                    dataClusterMorning_4_6.push(data);
                } else
                if (classSchedules[i].start >= 7 && classSchedules[i].start <= 9) {
                    const data = {
                        weekDay: classSchedules[i].weekDay,
                        start: classSchedules[i].start,
                        end: classSchedules[i].end,
                        _id: classSchedules[i]._id,
                        instructor: classSchedules[i].instructor,
                        room: classSchedules[i].room,
                        name: classSchedules[i].name,
                        semester: classSchedules[i].semester,
                        type: classSchedules[i].type
                    }
                    dataClusterAterNoon_7_9.push(data);
                } else 
                if (classSchedules[i].start >= 10 && classSchedules[i].start <= 12) {
                    const data = {
                        weekDay: classSchedules[i].weekDay,
                        start: classSchedules[i].start,
                        end: classSchedules[i].end,
                        _id: classSchedules[i]._id,
                        instructor: classSchedules[i].instructor,
                        room: classSchedules[i].room,
                        name: classSchedules[i].name,
                        semester: classSchedules[i].semester,
                        type: classSchedules[i].type
                    }
                    dataClusterAterNoon_10_12.push(data);
                } else 
                if (classSchedules[i].start >= 13 && classSchedules[i].start <= 15) {
                    const data = {
                        weekDay: classSchedules[i].weekDay,
                        start: classSchedules[i].start,
                        end: classSchedules[i].end,
                        _id: classSchedules[i]._id,
                        instructor: classSchedules[i].instructor,
                        room: classSchedules[i].room,
                        name: classSchedules[i].name,
                        semester: classSchedules[i].semester,
                        type: classSchedules[i].type
                    }
                    dataClusterEvening.push(data);
                }
            }
            return {
                morning_1_3: dataClusterMorning_1_3,
                morning_4_6: dataClusterMorning_4_6,
                afternoon_7_9: dataClusterAterNoon_7_9,
                afternoon_10_12: dataClusterAterNoon_10_12,
                evening: dataClusterEvening
            }
        }
        const dataAfterCluster = handleDataCluster(classSchedules);
    
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
        const dataAfterGrouping_MORNING_1_3 = handleDataTimeGrouping(dataAfterCluster.morning_1_3)
        const dataAfterGrouping_MORNING_4_6 = handleDataTimeGrouping(dataAfterCluster.morning_4_6)
        const dataAfterGrouping_AFFTERNOON_7_9 = handleDataTimeGrouping(dataAfterCluster.afternoon_7_9)
        const dataAfterGrouping_AFFTERNOON_10_12 = handleDataTimeGrouping(dataAfterCluster.afternoon_10_12)
        const dataAfterGrouping_EVENING = handleDataTimeGrouping(dataAfterCluster.evening)
        
        return (
            {
                morning_1_3: dataAfterGrouping_MORNING_1_3,
                morning_4_6: dataAfterGrouping_MORNING_4_6,
                afternoon_7_9: dataAfterGrouping_AFFTERNOON_7_9,
                afternoon_10_12: dataAfterGrouping_AFFTERNOON_10_12,
                evening: dataAfterGrouping_EVENING
            }
        )
    } else {
        console.log("nulllllllllllll");
    }

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
            <p style={{fontSize:10, width:70, marginLeft:-6, fontWeight:'500'}}>{`KTPM16A - LHP${subject?._id.slice(-8)}`.toUpperCase()}</p>
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


  const TimeTable = ({dayOfWeek, selectedData, currentDayOfWeek, currentDay, dataFetch, setCheckTimeOut}) => {
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

    // console.log("daaFretch", dataFetch[1]);
    const dataFetachMorning_1_3 = dataFetch.morning_1_3
    const dataFetachMorning_4_6 = dataFetch.morning_4_6
    const dataFetachAfternoon_7_9 = dataFetch.afternoon_7_9
    const dataFetachAfternoon_10_12 = dataFetch.afternoon_10_12
    console.log("dataFetachMorning_1_32222222", dataFetachAfternoon_10_12);
    const dataFetachEvening = dataFetch.evening

    const CHECK_NULL_ALL_DATA = (data) => {
        if (!Array.isArray(data)) {
            // If data is not an array, it cannot use the every method
            return false;
        }
        return data.every(item => item == 'null');
    }

    console.log("checkNULL_ALL_DATA", CHECK_NULL_ALL_DATA(dataFetachAfternoon_10_12));
    const checkDayInSemeter = (selectedData) => {
        // Ngày hớt HKII 2024-2025  
        const timeOutDayString = "2024-06-27";
        const timeOutDay = moment(timeOutDayString, 'YYYY-MM-DD');
        if(selectedData == null){
            const getDayCurrent = moment().format('YYYY-MM-DD');
            const selectDataTemp = moment(getDayCurrent, 'YYYY-MM-DD');
            // const formattedSelectedData = selectDataTemp.format('YYYY-MM-DD');
            const isSelectedDateBeforeTimeout = selectDataTemp.isBefore(timeOutDay);
            return isSelectedDateBeforeTimeout;

        } else {
            const selectDataTemp = moment(selectedData, 'YYYY-MM-DD');
            // const formattedSelectedData = selectDataTemp.format('YYYY-MM-DD');
            const isSelectedDateBeforeTimeout = selectDataTemp.isBefore(timeOutDay);
            return isSelectedDateBeforeTimeout;
        }
    }

    useEffect(() => {
        checkDayInSemeter(selectedData, currentDayOfWeek);
    },[selectedData])

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
                        {(checkDayInSemeter(selectedData, currentDayOfWeek)==true) ? (
                            <>
                            {(!(CHECK_NULL_ALL_DATA(dataFetachMorning_1_3))) ? (
                                <Row style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <RenderTimeTableOnRow data={[dataFetachMorning_1_3]}/>
                                </Row>
                                ) : (
                                    <></>
                                )}
                            </>
                        ) : (<></>)

                        }
                    </Row>
                    <Row style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        {(checkDayInSemeter(selectedData, currentDayOfWeek)==true) ? (
                            <>
                            {(!(CHECK_NULL_ALL_DATA(dataFetachMorning_4_6))) ? (
                                <Row style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <RenderTimeTableOnRow data={[dataFetachMorning_4_6]}/>  
                                </Row>
                                ) : (
                                    <></>
                                )}
                            </>
                        ) : (<></>)

                        }
                    </Row>
                </Col>
            </Row>
            <Row style={{borderBottom: '1px solid #ccc'}}>
                <Col span={3} style={{backgroundColor:'#FFFFCE'}}>
                    <p style={{textAlign:'center', fontWeight:'700', color:'gray'}}>Chiều</p>
                </Col>
                <Col span={21} style={{ backgroundImage: 'url("../../public/images/timetable_bg.png")', backgroundSize: 'cover', width:'100px', height:'100%', minHeight:'100px'}}>
                    <Row style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        {(checkDayInSemeter(selectedData, currentDayOfWeek)==true) ? (
                            <>
                            {(!(CHECK_NULL_ALL_DATA(dataFetachAfternoon_7_9))) ? (
                                <Row style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <RenderTimeTableOnRow data={[dataFetachAfternoon_7_9]}/>   
                                </Row>
                                ) : (
                                    <></>
                                )}
                            </>
                        ) : (<></>)

                        }
                    </Row>
                    {checkDayInSemeter(selectedData, currentDayOfWeek) ? (
                        <>
                            {(CHECK_NULL_ALL_DATA(dataFetachAfternoon_10_12) == false) ? (
                                <Row style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <RenderTimeTableOnRow data={[dataFetachAfternoon_10_12]} />
                                </Row>
                            ) : (
                                <></>
                            )}
                        </>
                    ) : (
                        <></>
                    )}
                </Col>
            </Row>
            <Row>
                <Col span={3} style={{backgroundColor:'#FFFFCE'}}>
                    <p style={{textAlign:'center', fontWeight:'700', color:'gray'}}>Tối</p>
                </Col>
                <Col span={21} style={{ backgroundImage: 'url("../../public/images/timetable_bg.png")', backgroundSize: 'cover', width:'100px', height:'100%', minHeight:'100px'}}>
                <Row style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        {(checkDayInSemeter(selectedData, currentDayOfWeek)==true) ? (
                            <>
                            {(!(CHECK_NULL_ALL_DATA(dataFetachEvening))) ? (
                                <Row style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <RenderTimeTableOnRow data={[dataFetachEvening]}/>
                                </Row>
                                ) : (
                                    <></>
                                )}
                            </>
                        ) : (<></>)
                        }
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

        const [checkTimeOut, setCheckTimeOut] = useState(null);

        useEffect(() => {
            console.log('currentDayOfWeek', currentDayOfWeek);
            setIsLoading(false)
        }, []);

        const onRadioChange = e => {
        setRadioValue(e.target.value);
        };
        
        // if(isLoading) return (<p>Loading...</p>)
        if (isLoading) {
            return (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Spin size="large" />
              </div>
            );
        }
        
        return (
        <>
            <Row span={24} style={{background: '#fff'}}>
                <div>
                    <h3  style={{padding:10, fontWeight:'600'}}>Lịch học, lịch thi theo tuần</h3>
                </div>
                <Content direction="vertical" style={{marginTop:10, display:'flex', flexDirection:'row', justifyContent:'space-between', paddingLeft:10}}>
                </Content>
            </Row>
            <Row>
            </Row>
        </>
    );
  };

const HomeLayoutAdmin = () => {
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
    const [dataFetchSchedule, setDataFetchSchedule] = useState(null);
    const [dataAfter, setDataAfter] = useState(null);

    const [selectedKey, setSelectedKey] = useState('1');
    const [isMarkVisible, setIsMarkVisible] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);


    // quản lí accept
    const [isClassRequestVisible, setIsClassRequestVisible] = useState(false);

    const handleMenuClick = ({ key }) => {
        setSelectedKey(key);
        setIsMarkVisible(false); // Reset trạng thái khi chuyển menu
    };
    const handleStudents = (record) => {
        setSelectedRecord(record);
        setIsClassRequestVisible(true);
    }

    const handleScore = (record) => {
        setSelectedRecord(record);
        setIsMarkVisible(true);
    };

    const handleBack = () => {
        setIsMarkVisible(false);
        setIsClassRequestVisible(false);
        setSelectedRecord(null);
    };

    const renderContent = () => {
        if (isMarkVisible) {
            return <>
                <Card style={{paddingLeft:10, background:'#fff', margin:'10px', marginTop:10}}>
                    <Mark record={selectedRecord} onBack={handleBack} />
                </Card>
            </>
        }
        if (isClassRequestVisible) {
            return <>
                <Card style={{paddingLeft:10, background:'#fff', margin:'10px', marginTop:10}}>
                    <ClassRequest record={selectedRecord} onBack={handleBack} />
                </Card>
            </>
        }

        switch (selectedKey) {
            case '1':
                return (
                    <Row span={24} style={{ background: '#fff' }}>
                        <div>
                            <h3 style={{ padding: 10, fontWeight: '600' }}>Danh sách lớp học phần</h3>
                        </div>
                        <Content direction="vertical" style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10 , margin:10}}>
                            <TeachingClasses handleStudents={handleStudents} handleScore={handleScore} setIsClassRequestVisible={setIsClassRequestVisible} setIsMarkVisible={setIsMarkVisible} />
                        </Content>
                    </Row>
                );
            case '2':
                return <div>Quản lí</div>;
            case '3':
                return <></>
            case '4':
                // return (
                //     <Row span={24} style={{ background: '#fff' }}>
                //         <div>
                //             <h3 style={{ padding: 10, fontWeight: '600' }}>Danh sách lớp học phần</h3>
                //         </div>
                //         <Content direction="vertical" style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10 , margin:10}}>
                //             <TeachingClasses handleScore={handleScore} handleStudents={handleStudents} setIsMarkVisible={setIsMarkVisible}  />
                //         </Content>
                //     </Row>
                // );
            case '5':
                return <div>Quản lí</div>;
            default:
                return <div>Trang chủ</div>;
        }
    };

    const handleFetchSchedule = async () => {
        console.log('fetch schedule');
        const payload = {
            studentId: userInfo?.studentId
        };
        console.log('studentId', payload);
        try {
            const rs = await axios.post(`/course/getSchedules`, payload);
            console.log('rs============', rs);
            if (rs.errCode === 0) {
                console.log("connnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
                setDataFetchSchedule(rs.data);
                // return rs.data;
            }
        } catch (error) {
            console.log("error in handleFetch", error);
        }
    };

    // useEffect(() => {
    //     handleFetchSchedule()
    //     const dataFetch = fetchDataTimeTable(dataFetchSchedule)
    //     setDataFetch(dataFetch);
    // }, []);

    
    useEffect(() => {
        handleFetchSchedule();
    }, []); // Dependency array empty to run only once when component mounts

    useEffect(() => {
        // if (dataFetchSchedule) {
            const dataFetch = fetchDataTimeTable(dataFetchSchedule);
            setDataFetch(dataFetch);
        // }
    }, [dataFetchSchedule]); // Run this effect when dataFetchSchedule changes


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
                        <div style={{ background:'#fff', marginRight:10}}>
                            <LeftSidebarAdmin setSelectedKey={setSelectedKey}/>
                        </div>
                    </Col>
                    <Col span={19} style={{ marginTop:10}}>
                        {/* {isLoading ? (
                            <p>Loading...</p>
                        ) :( */}
                            {/* <MyContent handleDataPickerChange={handleDataPickerChange} dayOfWeek={dayOfWeek} selectedData={selectedData} dataFetch={dataFetch}/> */}
                        {/* )
                        } */}
                        {/* {
                            (dataFetch != null) ? (
                                <MyContent handleDataPickerChange={handleDataPickerChange} dayOfWeek={dayOfWeek} selectedData={selectedData} dataFetch={dataFetch}/>
                            ) : (<></>)
                        } */}
                        {
                            renderContent()
                        }
                    </Col>
                </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2024 Created by You</Footer>
        </Layout>
    )
}


export default HomeLayoutAdmin;
