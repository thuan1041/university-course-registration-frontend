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

const LeftSidebar = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider style={{ background: '#fff', borderRight: '1px solid #ddd' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />} style={{ borderBottom: '1px solid #ddd' }}>
            Trang chủ
          </Menu.Item>
          <SubMenu key="sub1" icon={<InfoCircleOutlined />} title="Thông tin chung" style={{ borderBottom: '1px solid #ddd' }}>
            <Menu.Item key="2" style={{ borderBottom: '1px solid #ddd' }}>Thông tin sinh viên</Menu.Item>
            <Menu.Item key="3" style={{ borderBottom: '1px solid #ddd' }}>Ghi chú nhắc nhở</Menu.Item>
            <Menu.Item key="4" style={{ borderBottom: '1px solid #ddd' }}>Đề xuất cập nhật thông tin</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<BookOutlined />} title="Học tập" style={{ borderBottom: '1px solid #ddd' }}>
            <Menu.Item key="5" style={{ borderBottom: '1px solid #ddd' }}>Kết quả học tập</Menu.Item>
            <Menu.Item key="6" style={{ borderBottom: '1px solid #ddd' }}>Lịch học tập lớp học danh nghĩa</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<FormOutlined />} title="Đăng ký học phần" style={{ borderBottom: '1px solid #ddd' }}>
            <Menu.Item key="7" style={{ borderBottom: '1px solid #ddd' }}>Chương trình khung</Menu.Item>
            <Menu.Item key="8" style={{ borderBottom: '1px solid #ddd' }}>Đăng ký học phần</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<DollarCircleOutlined />} title="Học phí" style={{ borderBottom: '1px solid #ddd' }}>
            <Menu.Item key="9" style={{ borderBottom: '1px solid #ddd' }}>Tra cứu công nợ</Menu.Item>
            <Menu.Item key="10" style={{ borderBottom: '1px solid #ddd' }}>Thanh toán trực tuyến</Menu.Item>
            <Menu.Item key="11" style={{ borderBottom: '1px solid #ddd' }}>Phiếu thu tổng hợp</Menu.Item>
          </SubMenu>
          <Card style={{minHeight:'40%', marginTop:6, border: '1px solid #ccc'}}>
              <img src="https://ascvn.com.vn/content/images/appsinhvienqr.png" alt="QR Code" style={{ width: '100%', height:"100%" }} />
          </Card>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default LeftSidebar;
