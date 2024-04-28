import React, { useState } from 'react'
import { Table, Space, Checkbox } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { Radio } from 'antd';
import dataCourses from '../../mocks/courses.json' 
import './Course.scss'

const Courses = () => {
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
    const [selectedRowKey, setSelectedRowKey] = useState(null);

    const handleRowClick = (record) => {
    // Lấy ID của hàng (key của đối tượng)
    const { key } = record;
    console.log('ID của hàng được chọn:', key);

    // Thực hiện các hành động khác với ID này
    // Ví dụ: Gửi yêu cầu API, mở form chỉnh sửa, ...
    };

    const handleRadioChange = (key) => {
        setSelectedRowKey(key);
    };

  return (
        <Table columns={columns} dataSource={dataCourses} 
            onRow={(record) => ({
                onClick: () => handleRowClick(record),
            })}
            rowKey={(record) => record.key}
        />
  )
}

export default Courses