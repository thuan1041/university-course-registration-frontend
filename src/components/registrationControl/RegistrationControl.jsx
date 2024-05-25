import React from 'react'
import { Row, Col, Card, Avatar } from 'antd';
import { Select } from 'antd';
import { Radio } from 'antd';
import { UserOutlined, ReloadOutlined, ArrowUpOutlined, DiffOutlined } from '@ant-design/icons';

const RegistrationControl = ({setStateCourse}) => {
    const semesters = [
        { id: 1, name: 'HK1 2020-2021' },
        { id: 2, name: 'HK2 2020-2021' },
        { id: 3, name: 'HK1 2021-2022' },
        { id: 5, name: 'HK2 2021-2022' },
        { id: 6, name: 'HK1 2022-2023' },
        { id: 7, name: 'HK2 2022-2023' },
        { id: 8, name: 'HK1 2023-2024' },
        { id: 9, name: 'HK2 2023-2024' },
    ];

    const handleChange = (value) => {
        console.log(`Đã chọn học kỳ: ${value}`);
    };

    const onChange = (e) => {
        console.log('Lựa chọn:', e.target.value);
        // Thực hiện các hành động khi người dùng thay đổi lựa chọn
        setStateCourse(e.target.value);
    };

  return (
    <Row style={{minHeight:40}} align='center'>
        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <label htmlFor="registrationPeriod" style={{fontWeight:600, fontSize:16, color:'black'}}>Đợt đăng ký </label>
            <Select
                id="registrationPeriod"
                style={{ width: 200, paddingLeft:20 }}
                placeholder="Chọn đợt đăng ký"
                onChange={handleChange}
            >
                {/* Tạo các Option từ danh sách học kỳ */}
                {semesters.map((semester) => (
                <Select.Option key={semester.id} value={semester.name}>
                    {semester.name}
                </Select.Option>
                ))}
            </Select>   

            <Radio.Group onChange={onChange} defaultValue="new" style={{marginLeft:40}}>
                <Radio value="new">
                    <Avatar icon={<DiffOutlined />} />
                    <span style={{ marginLeft: 8 }}>Học mới</span>
                </Radio>
                <Radio value="repeat">
                    <Avatar icon={<ReloadOutlined />} />
                    <span style={{ marginLeft: 8 }}>Học lại</span>
                </Radio>
                <Radio value="improve">
                    <Avatar icon={<ArrowUpOutlined />} />
                    <span style={{ marginLeft: 8 }}>Học cải thiện</span>
                </Radio>
            </Radio.Group>                           
        </div>
    </Row>
  )
}

export default RegistrationControl