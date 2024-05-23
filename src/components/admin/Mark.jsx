import React, { useEffect, useState } from 'react';
import { Table, Button, Space, InputNumber, message, Row, Col } from 'antd';
import { EditOutlined, SaveOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import axios from '../../utils/axios';

const Mark = ({ onBack }) => {
    const [dataSource, setDataSource] = useState([
        // Dữ liệu mẫu
        { key: '1', stt: 1, studentId: 'SV001', fullName: 'Nguyễn Văn A', grade: 0 },
        { key: '2', stt: 2, studentId: 'SV002', fullName: 'Trần Thị B', grade: 0 },
        // Thêm các dòng dữ liệu cho các học viên khác ở đây
    ]);
    const [editingKey, setEditingKey] = useState('');
    const [getListStudent, setListStudent] = useState([]);

    const fetchCourses = async () => {
        try {
            const rs = await axios.post(`/course/getStudentInClass`, { "_id": "664604bfe95feb70c573e80d" });
            if (rs.errCode === 0) {
                setListStudent(rs.data.map(item => item.studentInfo));
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const handleFinishCourse = async (key) => {
        console.log("key in cham diem", key);
        const student = dataSource.find(item => item.key === key);
        console.log("student id in handle cham diem", student.studentId, student.grade);
        const payload = {
            "_id": "664604bfe95feb70c573e80d",
            "studentId": student.studentId,
            "point": student.grade
        };
        try {
            const rs = await axios.put(`/course/finishCourse`, payload);
            if (rs.errCode === 0) {
                message.success("Chấm điểm thành công");
            } else if (rs.errCode === 6) {
                message.error("Bạn đã chấm điểm không đạt cho học viên này");
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    const isEditing = (record) => record.key === editingKey;

    const edit = (record) => {
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const handleGradeChange = (key, value) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => key === item.key);
        if (index > -1) {
            newData[index].grade = value;
            setDataSource(newData);
        }
    };

    const save = (key) => {
        console.log("key in save", key);
        handleFinishCourse(key);
        setEditingKey('');
    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            render: (_, __, index) => index + 1,
        },
        {
            title: 'Mã số sinh viên',
            dataIndex: 'studentId',
            key: 'studentId',
        },
        {
            title: 'Họ và tên',
            dataIndex: 'name',
            key: 'name',
        },
        // {
        //     title: 'Điểm',
        //     dataIndex: 'grade',
        //     key: 'grade',
        //     render: (_, record) => (
        //         isEditing(record) ? (
        //             <InputNumber
        //                 defaultValue={record.grade !== undefined ? record.grade : 1}
        //                 onChange={(value) => handleGradeChange(record.key, value)}
        //             />
        //         ) : record.grade
        //     ),
        // },
        // {
        //     title: 'Hành động',
        //     key: 'action',
        //     render: (_, record) => {
        //         const editable = isEditing(record);
        //         return (
        //             <Space size="middle">
        //                 {editable ? (
        //                     <>
        //                         <Button
        //                             type="primary"
        //                             icon={<SaveOutlined />}
        //                             onClick={() => save(record.key)}
        //                         />
        //                         <Button onClick={cancel}>Hủy</Button>
        //                     </>
        //                 ) : (
        //                     <Button
        //                         type="primary"
        //                         icon={<EditOutlined />}
        //                         onClick={() => edit(record)}
        //                     />
        //                 )}
        //             </Space>
        //         );
        //     },
        // },
    ];

    return (
        <>
            <Row justify="space-between" style={{ marginBottom: '16px' }}>
                <Col>
                    <Button icon={<ArrowLeftOutlined />} onClick={onBack}>
                        Trở lại
                    </Button>
                </Col>
                <Col>
                    <Button type="primary" icon={<SaveOutlined />} onClick={() => save(editingKey)}>
                        Lưu
                    </Button>
                </Col>
            </Row>
            <Table
                dataSource={getListStudent}
                columns={columns}
                pagination={false} // Tắt phân trang nếu danh sách học viên dài
            />
        </>
    );
};

export default Mark;
