import React, { useEffect, useRef, useState } from "react";
import { Flex, Form, Input, Button} from 'antd';
import './qr.login.scss';
import QRCode from "react-qr-code";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ReactLoading from 'react-loading';
import { LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';


const LoginQR = () => {
    const [value, setValue] = useState('');
    const onlyRender = useRef(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isConnected, setIsConnected] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        if (!onlyRender.current && !isConnected) {
            let token = uuidv4() + JSON.stringify(Date.now())
            setValue(token);
            // fetchWaitScanner(token);
        }
        onlyRender.current = true;
    });
    const handleSendGmailFogotPassword = ()=>{
        navigate('/fogotPassword')
    }
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            size="large"
        >
        <Form.Item
            name="studentId"
            rules={[{ required: true, message: 'Nhập mã sinh viên!' }]}
        >
            <Input style={{ gap: '5px' }} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Student ID" />
        </Form.Item>

        {/* <Form.Item
            name="password"
            rules={[{ required: true, message: 'Nhập mật khẩu hiện tại!' }]}
        >
            <Input style={{ gap: '5px' }} prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Mật khẩu hiện tại" />
        </Form.Item>

        <Form.Item
            name="password"
            rules={[{ required: true, message: 'Nhập nhận mật khẩu mới' }]}
        >
            <Input style={{ gap: '5px' }} prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Mật khẩu mới" />
        </Form.Item> */}

        {/* <Form.Item
            name="password"
            rules={[{ required: true, message: 'Nhập nhận mật khẩu mới' }]}
        >
            <Input style={{ gap: '5px' }} prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Xác nhận mật khẩu mới" />
        </Form.Item> */}

        <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" block onClick={handleSendGmailFogotPassword}>
                    <span>Gởi yêu cầu</span>
                </Button>

        </Form.Item>
    </Form>    
    )
}

export default LoginQR;