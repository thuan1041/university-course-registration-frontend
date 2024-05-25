import React, { useEffect, useState } from 'react';
import { Table, Button, InputNumber, message, Row, Col } from 'antd';
import { ArrowLeftOutlined, SaveOutlined, EditOutlined } from '@ant-design/icons';
import axios from '../../utils/axios';

// const Mark = ({ onBack, record, setDataChange }) => {
// console.log("record in mark", record);
//     const [dataSource, setDataSource] = useState([]);
//     const [editingKey, setEditingKey] = useState('');
//     const [getListStudent, setListStudent] = useState([]);
//     const [refesh, setRefesh ] = useState(false)

//     const fetchCourses = async (record) => {
//         try {
//             const rs = await axios.post(`/course/getStudentInClass`, { "_id": record?._id });
//             if (rs.errCode === 0) {
//                 const students = rs.data.map((item, index) => ({
//                     key: index.toString(),
//                     stt: index + 1,
//                     studentId: item.studentInfo.studentId,
//                     name: item.studentInfo.name,
//                     grade: null, // Khởi tạo điểm mặc định là 0
//                 }));
//                 setDataSource(students);
//                 setListStudent(students);
//             }
//         } catch (error) {
//             console.log("error", error);
//         }
//     };

//     useEffect(() => {
//         fetchCourses(record);
//     }, [refesh]);

//     const handleFinishCourse = async (key, record) => {
//         const student = dataSource.find(item => item.key === key);
//         const payload = {
//             "_id": record?._id,
//             "studentId": student.studentId,
//             "point": student.grade
//         };
//         try {
//             const rs = await axios.put(`/course/finishCourse`, payload);
//             console.log("rs in handle finish", rs);
//             if (rs.errCode === 0) {
//                 message.success("Chấm điểm thành công");
//                 setRefesh(true);
//             } else if (rs.errCode === 6) {
//                 message.error("Bạn đã chấm điểm không đạt cho học viên này");
//                 setRefesh(true);
//             }
//         } catch (error) {
//             console.log("error", error);
//         }
//     };

//     const isEditing = (record) => record.key === editingKey;

//     const edit = (record) => {
//         setEditingKey(record.key);
//     };

//     const cancel = () => {
//         setEditingKey('');
//     };

//     const handleGradeChange = (key, value) => {
//         const newData = [...dataSource];
//         const index = newData.findIndex((item) => key === item.key);
//         if (index > -1) {
//             newData[index].grade = value;
//             setDataSource(newData);
//         }
//     };

//     const save = (key) => {
//         handleFinishCourse(key, record);
//         setEditingKey('');
//     };


const Mark = ({ onBack, record, setDataChange }) => {
    const [dataSource, setDataSource] = useState([]);
    const [editingKey, setEditingKey] = useState('');
    const [getListStudent, setListStudent] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const fetchCourses = async (record) => {
        try {
            const rs = await axios.post(`/course/getStudentInClass`, { "_id": record?._id });
            if (rs.errCode === 0) {
                const students = rs.data.map((item, index) => ({
                    key: index.toString(),
                    stt: index + 1,
                    studentId: item.studentInfo.studentId,
                    name: item.studentInfo.name,
                    grade: null, // Khởi tạo điểm mặc định là null
                }));
                setDataSource(students);
                setListStudent(students);
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        fetchCourses(record);
    }, [refresh]);

    const handleFinishCourse = async (key, record) => {
        const student = dataSource.find(item => item.key === key);
        const payload = {
            "_id": record?._id,
            "studentId": student.studentId,
            "point": student.grade
        };
        try {
            const rs = await axios.put(`/course/finishCourse`, payload);
            if (rs.errCode === 0) {
                message.success("Chấm điểm thành công");
                setDataSource(prevData => prevData.filter(item => item.key !== key));
            } else if (rs.errCode === 6) {
                message.error("Bạn đã chấm điểm không đạt cho học viên này");
                setDataSource(prevData => prevData.filter(item => item.key !== key));
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
        handleFinishCourse(key, record);
        setEditingKey('');
    };

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
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Điểm',
            dataIndex: 'grade',
            key: 'grade',
            render: (text, record) => (
                <InputNumber
                    min={0}
                    max={10}
                    defaultValue={record.grade}
                    onChange={(value) => handleGradeChange(record.key, value)}
                    disabled={!isEditing(record)}
                />
            ),
        },
        {
            title: 'Hành động',
            dataIndex: 'actions',
            key: 'actions',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Button onClick={() => save(record.key)} style={{ marginRight: 8 }}>
                            <SaveOutlined /> Lưu
                        </Button>
                        <Button onClick={cancel}>
                            Hủy
                        </Button>
                    </span>
                ) : (
                    <Button onClick={() => edit(record)}>
                        <EditOutlined /> Chỉnh sửa
                    </Button>
                );
            },
        },
    ];

    return (
        <>
            <Row justify="space-between" style={{ marginBottom: '16px' }}>
                <Col>
                    <Button icon={<ArrowLeftOutlined />} onClick={onBack}>
                        Trở lại
                    </Button>
                </Col>
            </Row>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
            />
        </>
    );
};

export default Mark;