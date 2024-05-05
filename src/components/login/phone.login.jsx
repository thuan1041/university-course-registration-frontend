import React, { useState } from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './phone.login.scss';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../utils/axios";
import { loginSuccess } from "../../redux/actions/app.action";

const LoginPhone = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let state = useSelector(state => state?.appReducer)

    const handleLogin = async (values) => {
        const { studentId, password } = values;
        const payload = {
            studentId : studentId,
            password : password
        }
        console.log(payload)
        try {
            setLoading(true);
            const response = await axios.post('/student/login', payload);
            
            if (response.errCode === 0) {
                console.log("Login response", response);
                toast.success("Login successful!");
                setTimeout(()=>{
                    // dispatch(loginSuccess(response.data))
                    const dataToSave = JSON.stringify(dispatch(loginSuccess(response.data)))
                    localStorage.setItem('userData', dataToSave);
                    navigate(`/home`)
                },[1000])
            } else {
                setLoading(false);
                toast.error("Login failed. Please check your credentials.");
            }
        } catch (error) {
            setLoading(false);
            toast.error("Login failed. Please try again.");
            console.error("Login error", error);
        }
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={handleLogin}
            size="large"
        >
            <Form.Item
                name="studentId"
                rules={[{ required: true, message: 'Please input your Student ID!' }]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Student ID"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    loading={loading}
                    block
                >
                    Đăng nhập
                </Button>
            </Form.Item>
        </Form>
    );
}

export default LoginPhone;
