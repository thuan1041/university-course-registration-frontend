import React, { useEffect } from "react";
import './login.scss';
import { Tabs } from 'antd';
import LoginPhone from "./phone.login";
import LoginQR from '../login/qr.login';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Layout } from 'antd';

const items = [
    {
        key: '1',
        label: <p className="title-login title-login--r">VỚI MÃ SINH VIÊN</p>,
        children: <LoginPhone />,
    },
    {
        key: '2',
        label: <p className="title-login title-login--l">ĐỔI MẬT KHẨU</p>,
        children: <LoginQR />,
    },
];


const Login = () => {


    return (
        <Tabs
            defaultActiveKey="1"
            items={items}
            // onChange={onChange}
            className="login-body"
            centered
        />       
    )
}


export default Login;