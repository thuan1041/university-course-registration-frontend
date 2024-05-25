import { Outlet } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Layout } from 'antd';
const { Content, Sider } = Layout;
import './homelayout.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const HomeLayout = () => {
  const navigate = useNavigate();

  const userDataString = localStorage.getItem('userData');
  const userData = JSON.parse(userDataString);
  const userInfo = userData?.payload;

  console.log("userInfo in homeLayout", userInfo);
  useEffect(() => {
    if (userInfo?.studentId == null) {
      window.location.href = '/login'
    }
  }, [])

  return (
    <>
      <Layout
        className='homelayout-container'
      >
        <Layout>
          <Content>
            <Outlet />
          </Content>
        </Layout>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition:Bounce
        />
      </Layout >

    </>
  );
}

export default HomeLayout;
