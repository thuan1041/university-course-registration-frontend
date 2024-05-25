import React, { useState } from "react";
import { Form, Input, Button, message } from 'antd';
import axios from "../../utils/axios";

const GmailAuthencation = ({ onConfirm, studentFogotPasswordData }) => {
    const [verificationCode, setVerificationCode] = useState('');
    const userDataString = localStorage.getItem('dataStudentInfoFogotPassword');
    const userData = JSON.parse(userDataString);
    const userInfo = userData;

    const handleVerifyOtpResquest = async (verificationCode) => {
        const payload = {
            "email": userData.email,
            "otp": verificationCode
        }
        console.log("payload in otp verity", payload);
        try {
            let rs = await axios.post(`/student/verifyOTP`, payload)
            if (rs.errCode === 0) {
                // message.success("Xác minh email thành công");
                // setOtp('');
                // setIsModalVisible(false)
                return 0
            }
            if (rs.errCode === 1) {
                // message.error("Xác minh thất bại. Vui lòng kiểm tra lại mã OTP và thử lại");
                // setOtp('');
                return 1
            }
        } catch (error) {
            console.log("error in veriry", error);
            return 1
        }
    }

    const handleVerifyOTP = async (verificationCode) => {
        // // Xác nhận và chuyển sang trang "Mật khẩu mới"
        // const payload = {
        //     "studentId":studentId,
        //     "newPassword": "123456"            
        // }
        // try {
        //     let rs = await axios.put(`/student/resetPassword`)
        // } catch (error) {

        // }
        let rs = await handleVerifyOtpResquest(verificationCode)
        if (rs === 0) {
            onConfirm()
            message.success("Xác minh email thành công");
        }
        if (rs === 1) {
            message.error("Xác minh thất bại. Vui lòng kiểm tra lại mã OTP và thử lại");
        }
    };


    const onFinish = (values) => {
        console.log('Received values: coed', values);
        handleVerifyOTP(values.verificationCode);
    };

    return (
        <>
            <p style={{ fontSize: 14, padding: "0px 8px 8px 8px" }}>Nhập mã xác minh được gởi tới gmail của sinh viên</p>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                size="large"
                onFinish={onFinish}
            >
                {/* <Form.Item
                    name="verificationCode"
                    rules={[{ required: true, message: 'Nhập mã xác minh!' }]}
                >
                    <Input
                        placeholder="Mã xác minh"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                    />
                </Form.Item> */}
                <Form.Item
                    name="verificationCode"
                    rules={[{ required: true, message: 'Nhập mã xác minh!' }]}
                >
                    <Input style={{ gap: '5px' }} placeholder="Mã xác minh" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" block>
                        <span>Xác nhận</span>
                    </Button>
                </Form.Item>
            </Form>
            <p style={{ fontSize: 14, padding: "0px 4px 4px 4px", color: 'blue', textAlign: 'center' }} >Gởi lại mã ?</p>
        </>
    );
}

export default GmailAuthencation;
