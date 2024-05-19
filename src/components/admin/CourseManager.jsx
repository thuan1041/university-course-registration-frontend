import React, { useState } from 'react';
import { Table, Button, Space, Spin, Alert } from 'antd';
import { TeamOutlined, EditOutlined } from '@ant-design/icons';
import axios from '../../utils/axios';

const CourseManager = ({handleScore, setIsClassRequestVisible }) => {
    // const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [getCourses, setCourses] = useState([])
    
    const fetchCourses =  async () => {
        try {
            const rs = await axios.post(`/course/getAllClasses`);
            if(rs.errCode === 0){
                setCourses(rs.data)
            }
        } catch (error) {
            console.log("error",error);
        }
    }
    useEffect(() => {
        fetchCourses()
    }, []);


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
            title: 'STT',
            dataIndex: 'stt',
            render: (_, __, index) => index + 1,
        },

        {
            title: 'Mã lớp học phần',
            dataIndex: '_id',
            render: (_id) => `LHP${_id.slice(-8)}`,
        },
        {
            title: 'Mã môn học',
            dataIndex: 'courseId',
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
            dataIndex: 'classSchedule.start',
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
            title: 'Phê duyệt',
            dataIndex: 'score',
            render: (_, record) => (
                <Space size="small">
                    <Button type="primary" icon={<EditOutlined style={{fontSize:12}} />} onClick={() => handleScoreClick(record)} />
                </Space>
            ),
        }
    ];

    const handleViewStudents = (classId) => {
        // Thực hiện hành động khi nhấn nút "Xem danh sách học viên"
        console.log(`Xem danh sách học viên của lớp học phần có ID: ${classId}`);
        // Bạn có thể điều hướng đến trang chi tiết hoặc mở modal hiển thị danh sách học viên
    };

    // const handleScore = (classId) => {
    //     // Thực hiện hành động khi nhấn nút "Chấm điểm"
    //     console.log(`Chấm điểm cho lớp học phần có ID: ${classId}`);
    //     // Bạn có thể điều hướng đến trang chấm điểm hoặc mở modal chấm điểm
    // };
    const handleScoreClick = (record) => {
        console.log("record in teaching classes");
        handleScore(record);
        setIsClassRequestVisible(true)
    }


    if (loading) {
        return <Spin tip="Loading..." style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} />;
    }

    if (error) {
        return <Alert message="Error" description="Không thể tải dữ liệu." type="error" showIcon />;
    }

    return (
        // <Card title="Lớp học phần đang dạy" style={{ margin: '20px' }}>
            <Table columns={columns}
            // dataSource={getCourses}
            rowKey="_id" />
        // </Card>
    );
};
export default CourseManager;