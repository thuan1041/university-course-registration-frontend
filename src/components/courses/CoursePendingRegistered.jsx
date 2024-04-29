import React, { useEffect, useState } from 'react';
import { Table, Space, Checkbox, Modal, Spin } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import dataCoursePendingRegistered from '../../mocks/coursePendingRegistered.json';
import CourseDetails from '../../modals/courses/CourseDetails';
import './Course.scss';
import { Radio } from 'antd';
import axios from '../../utils/axios';

const CoursePendingRegistered = ({ selectedCourse, onClassRowClick }) => {
    const [selectedRowKey, setSelectedRowKey] = useState(null);
    const [classRegistration, setClassRegistration] = useState();
    const [loading, setLoading] = useState(true); // State để theo dõi trạng thái loading

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
          title: 'Tên học phần',
          dataIndex: 'name',
        },
        {
          title: 'Số tín chỉ',
          dataIndex: 'credit',
        },
        {
          title: 'Giảng viên',
          dataIndex: 'classes[0].instructor',
        },
        {
          title: 'Phòng học',
          dataIndex: 'classes[0].room',
        },
        {
          title: 'Thời gian học',
          dataIndex: 'classes[0].classSchedule.weekDay',
        //   render: (weekDay, record) => `${weekDay} - ${record.classes[0].classSchedule.start}-${record.classes[0].classSchedule.end}`,
        },
        {
          title: 'Sĩ số tối đa',
          dataIndex: 'classes[0].maxStudents',
        },
        {
          title: 'Số lượng đã đăng ký',
          dataIndex: 'classes[0].registeredStudents.length',
        },
      ];


    return (
        <div>
            {loading ? (
                <Spin />
            ) : (
                <Table
                columns={columns}
                dataSource={[classRegistration].map(item => ({
                    key: item._id,
                    name: item.name,
                    credit: item.credit,
                    ...(item.classes && item.classes.length > 0 && {
                        'classes[0].instructor': item.classes[0]?.instructor,
                        'classes[0].room': item.classes[0]?.room,
                        'classes[0].classSchedule.weekDay': item.classes[0]?.classSchedule?.weekDay,
                        'classes[0].maxStudents': item.classes[0]?.maxStudents,
                        'classes[0].registeredStudents.length' : item?.classes[0]?.registeredStudents?.length
                    }),
                }))}
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
