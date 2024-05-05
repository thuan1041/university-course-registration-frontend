import React, { useEffect, useRef, useState } from "react";
import { Flex, Form, Input, Button} from 'antd';
import QRCode from "react-qr-code";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from 'react-loading';
import { LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify'
import axios from "../../utils/axios";

const NewPassword = () => {
    const [value, setValue] = useState('');
    const onlyRender = useRef(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isConnected, setIsConnected] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const state = useSelector(state => state?.appReducer);
    console.log(state);

    const handleChangePassword = async ()=>{
        const payload = {
            "studentId": 20051041, 
            "oldPassword": "1111",
            "newPassword": '1111'
        }
        try {
            const response = await axios.put('/student/changePassword', payload);
            
            if (response.errCode === 0) {
                toast.success("Change password successful!");
                setTimeout(()=>{
                    navigate(`/login`)
                },[1000])
            } else {
                toast.error("Change password failed. Please check your credentials.");
            }
        } catch {

        }
    }
    return (
        <Form
            name="normal2_login"
            className="login-form"
            initialValues={{ remember: true }}
            size="large"
        >

        <Form.Item
            name="newPassword" // Đặt tên độc nhất cho trường nhập liệu mật khẩu mới
            rules={[{ required: true, message: 'Nhập nhận mật khẩu mới' }]}
        >
            <Input style={{ gap: '5px' }} prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Mật khẩu mới" />
        </Form.Item>

        <Form.Item
            name="confirmPassword" // Đặt tên độc nhất cho trường nhập liệu xác nhận mật khẩu mới
            rules={[{ required: true, message: 'Nhập nhận mật khẩu mới' }]}
        >
            <Input style={{ gap: '5px' }} prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Xác nhận mật khẩu mới" />
        </Form.Item>

        <Form.Item>
            <Button type="primary" className="login-form-button" block onClick={handleChangePassword}>
                <span>Hoàn thành</span>
            </Button>
        </Form.Item>
    </Form>    
    )
}

export default NewPassword;