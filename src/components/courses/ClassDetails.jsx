import React, { useEffect, useState } from 'react';
import { Table, Space, Checkbox, Modal } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import dataClassDetails from '../../mocks/classDetails.json';
import CourseDetails from '../../modals/courses/CourseDetails';
import './Course.scss';
import { Radio } from 'antd';
import axios from '../../utils/axios';
import { Form, Select, Button } from 'antd';

const { Option } = Select;


const ClassDetails = ({selectedClass, onClassDetailRowClick}) => {

    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedRowKey, setSelectedRowKey] = useState(null);

    const [arrayData, setArrayData] = useState([]);
    const handleRowClick = (record) => {
      onClassDetailRowClick(record);
      // setSelectedCourse(record);
      // setIsModalVisible(true);
    };
  
    const handleCloseModal = () => {
      // setIsModalVisible(false);
      setSelectedCourse(null);
    };
  
    const handleRadioChange = (key) => {
      setSelectedRowKey(key);
    };
  
    useEffect(() => {
      setArrayData([selectedClass]);
    }, [selectedClass]);
  
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
          title: 'Lịch học',
          dataIndex: 'classSchedule',
          render: classSchedule => `Thứ ${classSchedule?.weekDay}, Tiết ${classSchedule?.start} - ${classSchedule?.end}`
        },
        {
          title: 'Nhóm TH',
          dataIndex: 'tenLopHocPhan',
        },
        {
          title: 'Phòng',
          dataIndex: 'room',
        },
        {
          title: 'Dãy nhà',
          dataIndex: 1,
        },
        {
          title: 'Cơ sở',
          dataIndex: 1,
        },
        {
          title: 'Giảng viên',
          dataIndex: 'instructor',
        },
        {
          title: 'Thời gian học',
          dataIndex: 4,
        }
    ];
    const onFinish = (values) => {
        console.log('Selected Example:', values.example);
    };
    
    return (
      <div>
        <Form onFinish={onFinish} layout="inline" style={{ marginLeft: 26, marginBottom: 10, marginTop: 10, flexDirection: 'row', justifyContent: 'center' }} initialValues={{ example: "1" }}>
            <div className="practice-group-label">Nhóm thực hành</div>
            <Form.Item name="example" style={{ marginRight: 20 }}>
                <Select style={{ width: 120 }}>
                    <Select.Option value="1">1</Select.Option>
                    <Select.Option value="2">2</Select.Option>
                    <Select.Option value="3">3</Select.Option>
                    <Select.Option value="4">4</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type="primary" style={{ backgroundColor: 'orange', border: 'none' }}>Xem lịch trùng</Button>
            </Form.Item>
        </Form>
        <Table
          columns={columns}
          dataSource={arrayData}
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
export default ClassDetails