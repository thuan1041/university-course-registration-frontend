import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import './homeSubLayout.scss';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import { Col, Drawer, Row, Select, theme } from 'antd';
import {Layout} from 'antd'
import logo from '../../public/images/dai-hoc-cong-nghiep-bacground.png'
import Courses from "../components/courses/Courses";
import RegistrationControl from "../components/registrationControl/RegistrationControl";
import StudentInfo from "../components/studentInfo/StudentInfo";

const { Option } = Select;

const {Header, Content, Footer} = Layout;

const homeSublayout = () => {
    return (
        <Layout style={{ minHeight: '100vh'}}>
            <Content style={{ padding: '0 220px', borderBlockColor:'blue'}}>
                <Row align="center" style={{marginBottom:20, marginTop:10}}>
                    <img src={logo} style={{width:"110%"}}></img>
                </Row>
                <StudentInfo/>
                <Content style={{backgroundColor:'#ffffff', color:"#EB7B21"}}>
                    <h1 className="title2" style={{textAlign:'center', paddingTop:10, marginBottom:30, color:'#0C6FBE'}}>ĐĂNG KÝ HỌC PHẦN</h1>
                    <RegistrationControl/>
                    <Content>
                        <h3 className="title2" style={{textAlign:'center', paddingTop:30, marginBottom:20}}>MÔN HỌC PHẦN ĐANG CHỜ ĐƯỢC ĐĂNG KÝ</h3>
                        <Courses/>
                    </Content>
                </Content>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2024 Created by You</Footer>
        </Layout>
    )
}

export default homeSublayout;