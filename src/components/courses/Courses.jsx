import React, { useEffect, useState } from 'react';
import { Table, Space, Checkbox, Modal } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import dataCourses from '../../mocks/courses.json';
import CourseDetails from '../../modals/courses/CourseDetails'; // Import your CourseDetails modal
import './Course.scss';
import { Radio } from 'antd';
import axios from '../../utils/axios';

const Courses = () => {
  useEffect(()=>{
    fetchGetClassByMajor()
    fetchGetAllCourses()
  }, [])

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRowKey, setSelectedRowKey] = useState(null);
  const [getAllCoursesData,setGetAllCoursesData] = useState()
  const [getClassByMajorData,setGetClassByMajorData] = useState()

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
        title: 'Mã HP cũ',
        dataIndex: 'maHpCu',
      },
      {
        title: 'Mã học phần mới',
        dataIndex: 'maHpMoi',
      },
      {
        title: 'Tên môn học',
        dataIndex: 'tenMonHoc',
        className: (record) =>
          record.key === selectedRowKey ? 'selected-row' : '',
      },
      {
        title: 'Số Tín chỉ',
        dataIndex: 'soTinChi',
      },
      {
        title: 'Bắt buộc',
        dataIndex: 'batBuoc',
        render: (_, record) => (
          <Space>
            <Checkbox checked={true} icon={<CheckOutlined style={{color:"#C40505"}} />} />
          </Space>
        ),
      },
      {
        title: 'HP trước tiên quyết',
        dataIndex: 'hpTruocTienQuyet',
      },
      {
        title: 'Học phần tương đương',
        dataIndex: 'hocPhanTuongDuong',
      },
  ];

  async function fetchGetClassByMajor (){
    const payload = {
      "major": "66265ec3bd56e143ee8eb1c1"
    }
    const rs = await axios.post(`/course/getClassByMajor`, payload)
    if(rs.errCode ===0){
      setGetClassByMajorData(rs.data)
    } else {

    }
  }
  async function fetchGetAllCourses(){
    const rs = await axios.post(`/course/getAllCourses`)
    if(rs.errCode ===0){
      setGetAllCoursesData(rs.data)
    } else {
    }
  }
  const mergeData = (getAllCoursesData, getClassByMajorData) => {
    // Check if data arrays exist and have data
    if (!getAllCoursesData || !Array.isArray(getAllCoursesData) || !getClassByMajorData || !Array.isArray(getClassByMajorData)) {
      return [];
    }
  
    const mergedData = {};
  
    // Iterate through the getAllCoursesData array and populate the mergedData object
    getAllCoursesData.forEach(course => {
      mergedData[course._id] = { ...course };
    });
  
    // Iterate through the getClassByMajorData array and merge data with existing courses
    getClassByMajorData.forEach(classData => {
      const courseId = classData.courseId?._id;
      if (courseId && mergedData[courseId]) {
        if (!mergedData[courseId].classes) {
          mergedData[courseId].classes = [];
        }
        mergedData[courseId].classes.push(classData);
      }
    });
  
    // Convert mergedData object to an array
    const mergedArray = Object.values(mergedData);
  
    return mergedArray;
  };
  
  // Usage example
  const mergedData = mergeData(getAllCoursesData, getClassByMajorData);
  console.log("mergedData", JSON.stringify(mergedData));

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataCourses}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
        rowKey={(record) => record.key}
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

export default Courses