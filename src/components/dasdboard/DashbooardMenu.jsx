import React from "react";
import { Card, Row, Col, Typography, Space } from "antd";
import {
  CalendarOutlined,
  BookOutlined,
  FormOutlined,
  SearchOutlined,
  CreditCardOutlined,
  FileTextOutlined,
  SyncOutlined,
  BellOutlined
} from "@ant-design/icons";

const { Meta } = Card;

const IconLinkCard = ({ icon, title }) => (
  <Card style={{ width: "100%", textAlign: "center" }}>
    <Space direction="vertical">
      {React.createElement(icon, { style: { fontSize: "24px" } })}
      <Typography.Link>{title}</Typography.Link>
    </Space>
  </Card>
);

const DashBoardMenu = () => {
  const text = "Nhắc nhở\n";
  return (
    <Row gutter={[10, 10]}>
      <Col xs={24} sm={12} md={8} lg={6} xl={3}>
        <IconLinkCard icon={CalendarOutlined} title="Lịch theo tuần" />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={3}>
        <IconLinkCard icon={BookOutlined} title="Kết quả học tập" />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={3}>
        <a href="/courseRegistration">
          <IconLinkCard icon={FormOutlined} title="Đăng ký học phần" />
        </a>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={3}>
        <IconLinkCard icon={SearchOutlined} title="Tra cứu công nợ" />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={3}>
        <IconLinkCard icon={CreditCardOutlined} title="Thanh toán trực tuyến" />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={3}>
        <IconLinkCard icon={FileTextOutlined} title="Phiếu thu tổng hợp" />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={3}>
        <IconLinkCard icon={SyncOutlined} title="Lịch theo tiến độ" />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={3}>
        <IconLinkCard icon={BellOutlined} title={
          text.split("\n").map((line, index) => (
            <p style={{ fontSize: 14 }} key={index}>{line}</p>
          ))
        }/>
      </Col>
    </Row>
  );
};

export default DashBoardMenu;
