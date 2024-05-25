import React, { useEffect, useState } from 'react';
import { Table, Space, Checkbox, Modal } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import dataCourses from '../../mocks/courses.json';
import CourseDetails from '../../modals/courses/CourseDetails'; // Import your CourseDetails modal
import './Course.scss';
import { Radio } from 'antd';
import axios from '../../utils/axios';

const Courses = ({ allCoursesData, onCourseRowClick, allFailedCourseData, stateCourses }) => {
  const courseData = allCoursesData;
  const courseFailedData = allFailedCourseData;
  const stateCourse = stateCourses
  const [selectedCourse, setSelectedCourse] = useState(null);
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRowKey, setSelectedRowKey] = useState(null);

  const handleRowClick = (record) => {
    setSelectedCourse(record);
    // setIsModalVisible(true);
    onCourseRowClick(record); // Gọi hàm callback để truyền thông tin khóa học được chọn
    console.log(JSON.stringify(record));
  };

  const handleCloseModal = () => {
    // setIsModalVisible(false);
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
      render: (text, record, index) => index + 1,
    },
    // {
    //   title: 'Mã HP cũ',
    //   dataIndex: 'maHpCu',
    // },
    {
      title: 'Mã học phần',
      dataIndex: '_id',
      render: (_id) => `HP${_id.slice(-8)}`
    },
    {
      title: 'Tên môn học',
      dataIndex: 'name',
      className: (record) =>
        record.key === selectedRowKey ? 'selected-row' : '',
    },
    {
      title: 'Số Tín chỉ',
      dataIndex: 'credit',
    },
    {
      title: 'Bắt buộc',
      dataIndex: 'batBuoc',
      render: (_, record) => (
        <Space>
          <Checkbox checked={true} icon={<CheckOutlined style={{ color: "#C40505" }} />} />
        </Space>
      ),
    },
    {
      title: 'HP trước tiên quyết',
      dataIndex: 'prerequisiteCourse',
      render: (prerequisites) => {
        if (prerequisites && prerequisites.length > 0) {
          const prereqString = prerequisites.join(', '); // Chuyển mảng thành chuỗi
          const last8Chars = prereqString.slice(-8); // Lấy 8 ký tự cuối
          return `HP${last8Chars}`; // Ghép chuỗi "HP" với 8 ký tự cuối
        } else {
          return ''; // Nếu không có mã học phần tiên quyết, trả về chuỗi rỗng
        }
      }
    },
    // {
    //   title: 'Học phần tương đương',
    //   dataIndex: 'hocPhanTuongDuong',
    // },
  ];

  return (
    <>
      {
        (stateCourse == 'new') ? (
          <div>
            <Table
              columns={columns}
              dataSource={courseData}
              onRow={(record) => ({
                onClick: () => handleRowClick(record),
              })}
              rowKey={(record) => record.key}
              pagination={false}
            />

          </div>
        ) : (stateCourse == 'repeat') ? (
          <div>
            <Table
              columns={columns}
              dataSource={courseFailedData}
              onRow={(record) => ({
                onClick: () => handleRowClick(record),
              })}
              rowKey={(record) => record.key}
              pagination={false}
            />

          </div>
        ) : null
      }
    </>
  )
}

export default Courses