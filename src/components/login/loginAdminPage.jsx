import React, { useEffect } from "react";
import './login.scss';
import { Tabs } from 'antd';
import Phone from "./phone.login";
import LoginQR from '../login/qr.login';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Layout } from 'antd';
import LoginAdmin from "./web.loginAdmin";

const items = [
    {
        key: '1',
        label: <p className="title-login title-login--r">ADMIN</p>,
        children: <LoginAdmin />,
    },
    {
        key: '2',
        label: <p className="title-login title-login--l">QUÊN MẬT KHẨU</p>,
        children: <LoginQR />,
    }
];

const LoginAdminPage = () => {
    return (
        <Tabs
            style={{width: '100%', marginLeft: '630px', marginTop: '200px', backgroundColor:'#f0f2f5'}}
            defaultActiveKey="1"
            items={items}
            // onChange={onChange}
            className="login-body"
            centered
        />       
    )
}


export default LoginAdminPage;