import React, { useEffect, useState } from 'react';
import { Table, Space, Checkbox, Modal, Spin } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import dataCoursePendingRegistered from '../../mocks/coursePendingRegistered.json';
import CourseDetails from '../../modals/courses/CourseDetails';
import './Course.scss';
import { Radio } from 'antd';
import axios from '../../utils/axios';

const CoursePendingRegistered = ({ selectedCourse, onClassRowClick, courseId }) => {
    console.log("courseId 2", courseId);
    const [selectedRowKey, setSelectedRowKey] = useState(null);
    const [classRegistration, setClassRegistration] = useState();
    const [loading, setLoading] = useState(true); // State để theo dõi trạng thái loading
    
    // update
    const [getClassByCourse,setGetClassByCourse] = useState()

    useEffect(() => {
        fetchClassByCourse()
    },[courseId])
    async function fetchClassByCourse (){
        const payload = {
            "course": courseId
        }
        const rs = await axios.post(`/course/getClassByCourse`, payload)
        if(rs.errCode ===0){
            setGetClassByCourse(rs.data)
            console.log("rs2",rs.data);
        } else {
    
        }
    }

    useEffect(() => {
        if (selectedCourse) {
            // Mô phỏng việc fetch dữ liệu từ server
            setTimeout(() => {
                setClassRegistration(selectedCourse);
                const dataClass = [selectedCourse].filter(item => item.classes);
                console.log(dataClass);
                setLoading(false); // Sau khi dữ liệu được render vào bảng, setLoading(false) để ẩn loading
            }, 1000); // Thời gian mô phỏng fetch dữ liệu (3 giây)
        }
    }, [selectedCourse]);

    const handleRowClick = (record) => {
        onClassRowClick(record);
    };

    const handleRadioChange = (key) => {
        setSelectedRowKey(key);
    };
    const columns = [
        {
            title: '',
            dataIndex: 'select',
            render: (_, record) => (
            <Radio
                checked={record.key === selectedRowKey}
                onChange={(e) => handleRadioChange(record.key)}
            />
            ),
        },
        {
            title: 'STT',
            render: (text, record, index) => index + 1,
        },
        {
          title: 'Mã LHP',
          dataIndex: '_id',
          render: (_id)=> `LHP${_id.slice(-8)}`
        },
        {
            title: 'Tên lớp học phần',
            dataIndex: 'courseId',
            render: (text, record) => record?.courseId?.name,
        },
        {
          title: 'Lớp dự kiến',
            dataIndex: 'className',
            render: className => "DHKTPM16A"
        },
        {
          title: 'Số lượng đã đăng ký',
            dataIndex: 'registeredStudents',
            render: registeredStudents => registeredStudents?.length
        },
      ];

    return (
        <div>
            {loading ? (
                <Spin />
            ) : (
                <Table
                columns={columns}
                dataSource={getClassByCourse}
                onRow={(record) => ({
                    onClick: () => handleRowClick(record),
                })}
                pagination={false}
            />
            )}
        </div>
    )
}

export default CoursePendingRegistered;
