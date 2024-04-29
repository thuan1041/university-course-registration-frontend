import React, { useEffect, useState } from 'react';
import { Table, Space, Checkbox, Modal } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import dataCoursePendingRegistered from '../../mocks/coursePendingRegistered.json';
import CourseDetails from '../../modals/courses/CourseDetails';
import './Course.scss';
import { Radio } from 'antd';
import axios from '../../utils/axios';

const CoursePendingRegistered = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedRowKey, setSelectedRowKey] = useState(null);
  
    const handleRowClick = (record) => {
      setSelectedCourse(record);
      setIsModalVisible(true);
    };
  
    const handleCloseModal = () => {
      setIsModalVisible(false);
      setSelectedCourse(null);
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
          dataIndex: 'stt',
        },

        {
          title: 'Mã học phần',
          dataIndex: 'maHp',
        },
        {
          title: 'Tên lớp học phần',
          dataIndex: 'tenLopHocPhan',
        },
        {
          title: 'Lớp dự kiến',
          dataIndex: 'lopDuKien',
        },
        {
          title: 'Sĩ số tối đa',
          dataIndex: 'siSoToiDa',
        },
        {
          title: 'Số lượng đã đăng ký',
          dataIndex: 'soLuongDaDangKy',
        },
        {
          title: 'Trạng thái',
          dataIndex: 'trangThai',
          render: (text) => (
            <span>{text === 0 ? "Đang chờ sinh viên đăng ký" : "Chấp nhận mở lớp"}</span>
          ),
        },
        
    ];
  
    return (
      <div>
        <Table
          columns={columns}
          dataSource={dataCoursePendingRegistered}
          onRow={(record) => ({
            onClick: () => handleRowClick(record),
          })}
          rowKey={(record) => record.key}
        //   scroll={{ y: 300 }}
          pagination={false}
        //   bordered
        //   rowClassName={() => 'fixed-height-row'}
        />
  
        <Modal
          title="Course Details"
          open={isModalVisible}
          onCancel={handleCloseModal}
          footer={null}
        >
          {selectedCourse && <CourseDetails course={selectedCourse} />}
        </Modal>
      </div>
    )
}
export default CoursePendingRegistered