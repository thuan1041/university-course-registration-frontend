import React, { useEffect, useState } from 'react';
import { Table, Space, Checkbox, Modal } from 'antd';
import { CheckOutlined, CloseOutlined  } from '@ant-design/icons';
import dataClassDetails from '../../mocks/classDetails.json';
import CourseDetails from '../../modals/courses/CourseDetails';
import './Course.scss';
import { Radio } from 'antd';
import axios from '../../utils/axios';
import { Form, Select, Button } from 'antd';

const RegisteredCourse = ({ allCoursesData, onCourseRowClick, getRegisteredCourseByStudentId }) => {
    console.log("get00000000000000",getRegisteredCourseByStudentId);
    // const courseData = allCoursesData;
    const [selectedCourse, setSelectedCourse] = useState(null);
    // const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedRowKey, setSelectedRowKey] = useState(null);
    
    const handleRowClick = (record) => {
      setSelectedCourse(record);
      // setIsModalVisible(true);
    //   onCourseRowClick(record); // Gọi hàm callback để truyền thông tin khóa học được chọn
      console.log(JSON.stringify(record));
    };
  
    const handleCloseModal = () => {
      // setIsModalVisible(false);
      setSelectedCourse(null);
    };
  
    const handleRadioChange = (key) => {
      setSelectedRowKey(key);
    };

    const handleCancel = (maLopHP) => {
        // Xử lý hủy học phần ở đây
        console.log(`Hủy học phần có mã ${maLopHP}`);
    };

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString('vi-VN');  // Định dạng ngày tháng năm theo chuẩn Việt Nam
    };


    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Mã lớp học phần',
            dataIndex: '_id',
            render: (_id)=> `LHP${_id.slice(-8)}`
        },
        {
            title: 'Tên môn học',
            dataIndex: 'name',
            render: (name)
        },
        {
            title: 'Tên Lớp học',
            dataIndex: 'tenLopHoc',
            render: (tenLopHoc)=> 'DHKTPM16A',
        },
        {
            title: 'Số Tín chỉ',
            dataIndex: 'credit',
        },
        {
            title: 'Nhóm Thực hành',
            dataIndex: 'nhomThucHanh',
        },
        {
            title: 'Học phí',
            dataIndex: 'fee',
        },
        {
            title: 'Hạn nộp',
            dataIndex: 'hanNop',
        },
        {
            title: 'Thu',
            dataIndex: 'statusPayment',
            render: (statusPayment) => {
                return statusPayment === true ? <CheckOutlined style={{ color: 'green' }} /> : <CloseOutlined style={{ color: 'red' }} />;
            },
        },
        {
            title: 'Trạng thái đăng ký',
            dataIndex: 'status',
            render: (status) => {
                return status== true ? 'Đăng ký mới' : 'Học lại';
            }
        },
        {
            title: 'Ngày đăng ký',
            dataIndex: 'createdAt',
            render: (createdAt) => formatDate(createdAt),
        },
        {
            title: 'Trạng thái học phần',
            dataIndex: 'status',
            render: (status) => {
                return status== true ? 'Chấp nhận mở lớp' : 'Đang chờ sinh viên đăng ký';
            }
        },
        {
            title: 'Thao tác',
            dataIndex: 'thaoTac',
            render: (_, record) => (
              <Button style={{fontSize:12}} type="primary" onClick={() => handleCancel(record._id)}>
                Hủy học phần
              </Button>
            ),
        },
    ];

    return (
        <div>
          <Table
            columns={columns}
            dataSource={getRegisteredCourseByStudentId}
            onRow={(record) => ({
              onClick: () => handleRowClick(record),
            })}
            rowKey={(record) => record.key}
            pagination={false}
          />
        </div>
      )
}

export default RegisteredCourse;