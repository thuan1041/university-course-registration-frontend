import React, { useEffect, useRef, useState } from "react";
import { Flex, Form, Input, Button, message } from 'antd';
import './qr.login.scss';
import QRCode from "react-qr-code";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ReactLoading from 'react-loading';
import { LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import axios from "../../utils/axios";

const LoginQR = () => {
    const [value, setValue] = useState('');
    const onlyRender = useRef(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isConnected, setIsConnected] = useState(false);
    const [email, setEmail] = useState('');

    const fetchStudentInfoByStudentId = async (studentId) => {
        const payload = {
            "studentId": studentId
        }
        try {
            const rs = await axios.post(`/student/getStudentStatus`, payload)
            if (rs.errCode === 0) {
                console.log("get student info success", rs)
                setEmail(rs.data.email)
            } else
                return null
        } catch (error) {
            console.log("error in get student info", error);
        }
    }

    const handleSendOtp = async () => {
        const payload = {
            // "email": "tranminhthuan030302@gmail.com"
            // "email": parsedData?.payload?.email,
            "email": email,
        }
        try {
            const rs = await axios.post(`/student/sendOTP`, payload)
            if (rs.errCode === 0) {
                // message.success("Đã gởi mã OTP đến email của sinh viên");
                return 0
            } else {
                // message.error("Chưa gởi được mã");
                return 1
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleSendGmailFogotPassword = async (studentId) => {
        console.log("abc898989");
        // fetchStudentInfoByStudentId(studentId);

        const payload = {
            "studentId": studentId
        }
        try {
            const rs = await axios.post(`/student/getStudentStatus`, payload)
            if (rs.errCode === 0) {
                const dataStudentInfoFogotPassword = JSON.stringify(rs?.data[0])
                localStorage.setItem('dataStudentInfoFogotPassword', dataStudentInfoFogotPassword);
                console.log("get student info success", rs)
                const payload = {
                    // "email": "tranminhthuan030302@gmail.com"
                    // "email": parsedData?.payload?.email,
                    "email": rs.data[0].email,
                }

                // const dataStudentInfoFogotPassword = JSON.stringify(response?.data[0])
                // localStorage.setItem('dataStudentInfoFogotPassword', dataStudentInfoFogotPassword);
                console.log("payload in send otp", payload);
                try {
                    const rs = await axios.post(`/student/sendOTP`, payload)
                    console.log("rs in send otp", rs);
                    if (rs.errCode === 0) {
                        // message.success("Đã gởi mã OTP đến email của sinh viên");
                        message.success("Đã gởi mã OTP đến email của sinh viên");
                        navigate(`/fogotPassword?studentId=${studentId}`)
                        return 0
                    } else {
                        message.error("Mã số sinh viên có thể không chính xác hoặc chưa được đăng ký trong hệ thống. Vui lòng kiểm tra lại thông tin và thử lại.");
                        return 1
                    }
                } catch (error) {
                    console.log("error", error);
                }

            } else
                return null
        } catch (error) {
            console.log("error in get student info", error);
        }


        // console.log("email", email);
        console.log("abc09009");
        console.log('Student ID:', studentId);
        // let rs = await handleSendOtp()
        // if (rs === 0) {
        //     message.success("Đã gởi mã OTP đến email của sinh viên");
        //     navigate(`/fogotPassword?studentId=${studentId}`)
        // }
        // if (rs === 1) {
        //     message.error("Mã số sinh viên có thể không chính xác hoặc chưa được đăng ký trong hệ thống. Vui lòng kiểm tra lại thông tin và thử lại.");
        // }
    };

    const onFinish = (values) => {
        console.log('Received values:', values);
        handleSendGmailFogotPassword(values.studentId);
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish} // Đặt sự kiện onFinish vào đây
            size="large"
        >
            <Form.Item
                name="studentId"
                rules={[{ required: true, message: 'Nhập mã sinh viên!' }]}
            >
                <Input style={{ gap: '5px' }} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Student ID" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" block>
                    <span>Gởi yêu cầu</span>
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginQR;