import React from 'react';
import { Layout, Menu, Card } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  BookOutlined,
  FormOutlined,
  DollarCircleOutlined
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

const LeftSidebarAdmin = ({ setSelectedKey }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider style={{ background: '#fff', borderRight: '1px solid #ddd' }}>
        <Menu
        //   mode="inline"
        //   defaultSelectedKeys={['1']}
        //   style={{ height: '100%', borderRight: 0 }}
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
            onClick={(e) => {
              setSelectedKey(e.key)
            }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />} style={{ borderBottom: '1px solid #ddd' }}>
            Trang chủ
          </Menu.Item>
            <Menu.Item key="2" icon={<InfoCircleOutlined />} style={{ borderBottom: '1px solid #ddd' }}>
                Quản lý sinh viên
            </Menu.Item>
            <Menu.Item key="3" icon={<BookOutlined />} style={{ borderBottom: '1px solid #ddd' }}>
                Quản lý học phần
            </Menu.Item>
            <Menu.Item key="4" icon={<FormOutlined />} style={{ borderBottom: '1px solid #ddd' }}>
                Quản lý lớp học phần
            </Menu.Item>
            <Menu.Item key="5" icon={<DollarCircleOutlined />} style={{ borderBottom: '1px solid #ddd' }}>
                Quản lý học phí
            </Menu.Item>
          <Card style={{minHeight:'40%', marginTop:6, border: '1px solid #ccc'}}>
              <img src="https://ascvn.com.vn/content/images/appsinhvienqr.png" alt="QR Code" style={{ width: '100%', height:"100%" }} />
          </Card>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default LeftSidebarAdmin;
