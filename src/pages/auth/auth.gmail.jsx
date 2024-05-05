import React, { useState } from "react";
import { Form, Input, Button } from 'antd';

const GmailAuthencation = ({ onConfirm }) => {
    const [verificationCode, setVerificationCode] = useState('');

    const handleSendGmailFogotPassword = () => {
        // Xác nhận và chuyển sang trang "Mật khẩu mới"
        onConfirm();
    };

    return (
        <>
            <p style={{fontSize:14, padding:"0px 8px 8px 8px"}}>Nhập mã xác minh được gởi tới gmail của sinh viên</p>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                size="large"
            >
                <Form.Item
                    name="studentId"
                    rules={[{ required: true, message: 'Nhập mã xác minh!' }]}
                >
                    <Input 
                        placeholder="Mã xác minh" 
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" className="login-form-button" block onClick={handleSendGmailFogotPassword}>
                        Xác nhận
                    </Button>
                </Form.Item>
            </Form>
            <p style={{fontSize:14, padding:"0px 4px 4px 4px", color:'blue', textAlign:'center'}} >Gởi lại mã ?</p>
        </>
    );
}

export default GmailAuthencation;
