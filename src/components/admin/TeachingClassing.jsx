import React, { useEffect, useState } from 'react';
import { Table, Button, Space, Spin, Alert } from 'antd';
import { TeamOutlined, EditOutlined } from '@ant-design/icons';
import axios from '../../utils/axios';

const TeachingClasses = ({ handleScore, setIsMarkVisible, setIsClassRequestVisible, handleStudents }) => {
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

    const [getCourses, setCourses] = useState([])

    const fetchCourses = async () => {
        try {
            const rs = await axios.post(`/course/getAllClasses`);
            if (rs.errCode === 0) {
                setCourses(rs.data)
            }
        } catch (error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        fetchCourses()
    }, []);

    // const columns = [
    //     {
    //         title: 'STT',
    //         dataIndex: 'index',
    //         render: (_, __, index) => index + 1,
    //     },
    //     {
    //         title: 'Mã lớp học phần',
    //         dataIndex: '_id',
    //         render: (_id) => `LHP${_id.slice(-8)}`,
    //     },
    //     {
    //         title: 'Môn học',
    //         dataIndex: 'courseId._id',
    //     },
    //     {
    //         title: 'Phòng học',
    //         dataIndex: 'room',
    //     },
    //     {
    //         title: 'Thứ',
    //         dataIndex: 'weekDay',
    //         // render: (weekDay) => {
    //         //     const days = ["Chủ Nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    //         //     return days[weekDay] || "Unknown";
    //         // }
    //         render: (weekDay) => "Thứ 4"
    //     },
    //     {
    //         title: 'Thời gian bắt đầu',
    //         dataIndex: 'start',
    //         // render: (start) => `Tiết ${start}`,
    //         render: (start) => "Tiết 1"
    //     },
    //     {
    //         title: 'Thời gian kết thúc',
    //         dataIndex: 'end',
    //         // render: (end) => `Tiết ${end}`,
    //         render: (start) => "Tiết 3"
    //     },
    //     {
    //         title: 'Học kỳ',
    //         dataIndex: 'semester',
    //     },
    //     {
    //         title: 'Danh sách học viên',
    //         dataIndex: 'viewStudents',
    //         render: (_, record) => (
    //             <Space size="mall">
    //                 <Button type="primary"  icon={<TeamOutlined style={{fontSize:12}} />} onClick={() => handleViewStudents(record._id)} />
    //             </Space> 
    //         ),
    //     },
    //     {
    //         title: 'Chấm điểm',
    //         dataIndex: 'score',
    //         render: (_, record) => (
    //             <Space size="small">
    //                 <Button type="default" icon={<EditOutlined style={{fontSize:12}} />} onClick={() => handleScoreClick(record)} />
    //             </Space>
    //         ),
    //     }
    // ];

    // const columns = [
    //     {
    //         title: 'STT',
    //         dataIndex: 'index',
    //         render: (_, __, index) => index + 1,
    //     },
    //     {
    //         title: 'Mã lớp học phần',
    //         dataIndex: '_id',
    //         render: (_id) => `LHP${_id.slice(-8)}`,
    //     },
    //     {
    //         title: 'Môn học',
    //         dataIndex: ['courseId', 'name'],
    //     },
    //     {
    //         title: 'Phòng học',
    //         dataIndex: 'room',
    //     },
    //     {
    //         title: 'Thứ',
    //         dataIndex: ['classSchedule', 'weekDay'],
    //         render: (weekDay) => {
    //             const days = ["Thứ 7", "Chủ Nhật" , "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6"];
    //             return days[weekDay] || "Unknown";
    //         }
    //     },
    //     {
    //         title: 'Thời gian bắt đầu',
    //         dataIndex: ['classSchedule', 'start'],
    //         render: (start) => `Tiết ${start}`,
    //     },
    //     {
    //         title: 'Thời gian kết thúc',
    //         dataIndex: ['classSchedule', 'end'],
    //         render: (end) => `Tiết ${end}`,
    //     },
    //     {
    //         title: 'Học kỳ',
    //         dataIndex: 'semester',
    //     },
    //     {
    //         title: 'Danh sách học viên',
    //         dataIndex: 'viewStudents',
    //         render: (_, record) => (
    //             <Space size="small">
    //                 <Button type="primary" icon={<TeamOutlined style={{ fontSize: 12 }} />} onClick={() => handleViewStudents(record._id)} />
    //             </Space>
    //         ),
    //     },
    //     {
    //         title: 'Chấm điểm',
    //         dataIndex: 'score',
    //         render: (_, record) => (
    //             <Space size="small">
    //                 <Button type="default" icon={<EditOutlined style={{ fontSize: 12 }} />} onClick={() => handleScoreClick(record)} />
    //             </Space>
    //         ),
    //     },
    // ];

    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            render: (_, __, index) => index + 1,
        },
        {
            title: 'Mã lớp học phần',
            dataIndex: '_id',
            render: (_id) => `LHP${_id.slice(-8)}`,
        },
        {
            title: 'Môn học',
            dataIndex: ['courseId', 'name'],
        },
        {
            title: 'Phòng học',
            dataIndex: 'room',
        },
        {
            title: 'Thứ',
            dataIndex: ['classSchedule', 'weekDay'],
            render: (weekDay) => {
                const days = ["Unknown", "Unknown", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ Nhật"];
                return days[weekDay] || "Unknown";
            }
        },
        {
            title: 'Thời gian bắt đầu',
            dataIndex: ['classSchedule', 'start'],
            render: (start) => `Tiết ${start}`,
        },
        {
            title: 'Thời gian kết thúc',
            dataIndex: ['classSchedule', 'end'],
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
                    <Button type="default" icon={<EditOutlined style={{fontSize:12}} />} onClick={() => handleScoreClick(record)} />
                </Space>
            ),
        }
    ];


    const handleViewStudents = (classId) => {
        // Thực hiện hành động khi nhấn nút "Xem danh sách học viên"
        console.log(`Xem danh sách học viên của lớp học phần có ID: ${classId}`);
        // Bạn có thể điều hướng đến trang chi tiết hoặc mở modal hiển thị danh sách học viên
        handleStudents(classId)
        setIsClassRequestVisible(true)
    };

    // const handleScore = (classId) => {
    //     // Thực hiện hành động khi nhấn nút "Chấm điểm"
    //     console.log(`Chấm điểm cho lớp học phần có ID: ${classId}`);
    //     // Bạn có thể điều hướng đến trang chấm điểm hoặc mở modal chấm điểm
    // };
    const handleScoreClick = (record) => {
        console.log("record in teaching classes");
        handleScore(record);
        setIsMarkVisible(true);
    }



    if (loading) {
        return <Spin tip="Loading..." style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} />;
    }

    if (error) {
        return <Alert message="Error" description="Không thể tải dữ liệu." type="error" showIcon />;
    }

    return (
        <>
            {
                (getCourses != null) ? (
                    <Table columns={columns} dataSource={getCourses} rowKey="_id" />
                ) : (<></>)
            }
        </>
        // <Card title="Lớp học phần đang dạy" style={{ margin: '20px' }}>

        // </Card>
    );
};
export default TeachingClasses;