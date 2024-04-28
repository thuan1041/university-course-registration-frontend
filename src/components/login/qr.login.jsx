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
            socket.then((socket) => {
                socket.emit('setup', token);
                socket.on('connected', () => {
                    setIsConnected(true);
                    socket.emit('join-qr-room', token);
                    socket.on('joined', () => {
                        socket.on('need-to-verify', (data) => { // Khi người dùng quét mã
                            setIsLoading(true);
                            setTimeout(() => {
                                setIsLoading(false);
                                dispatch(loginStart(data));
                                navigate(`/verify?id=${data.id}`);
                            }, 1000);
                        })
                    })
                })
            })
        }
        onlyRender.current = true;
    });
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            size="large"
        >
        <Form.Item
            name="phoneNumber"
            rules={[{ required: true, message: 'Nhập mã sinh viên!' }]}
        >
            <Input style={{ gap: '5px' }} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Mã sinh viên" />
        </Form.Item>

        <Form.Item
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
        </Form.Item>

        <Form.Item
            name="password"
            rules={[{ required: true, message: 'Nhập nhận mật khẩu mới' }]}
        >
            <Input style={{ gap: '5px' }} prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Xác nhận mật khẩu mới" />
        </Form.Item>


        <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" block>
                    <span>Hoàn thành</span>
                </Button>

        </Form.Item>
    </Form>    
    )
}

export default LoginQR;