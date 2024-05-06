import React from "react";
import { Row, Col, Card, Avatar } from "antd";
import './StudentDetail.scss';
const { Meta } = Card;

const StudentDetail = ({userInfo}) => {
  console.log("userInfo", userInfo);
  return (
    <Card title="Thông tin sinh viên" style={{ padding: 2 }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Avatar
            src="../../../public/images/student_avt.jpg"
            size={100}
            style={{ margin: "6px auto", display: "block" }}
          />
          <Meta title="Xem chi tiết" style={{ textAlign: "center" }} />
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <p>MSSV: <strong>20051041</strong></p>
          <p>Họ tên: <strong>Trần Minh Thuận</strong></p>
          <p>Giới tính: <strong>Nam</strong></p>
          <p>Ngày sinh: <strong>03/03/2002</strong></p>
          <p>Nơi sinh: <strong>Tỉnh Tây Ninh</strong></p>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <p>Lớp học: <strong>DHKTPM16A</strong></p>
          <p>Khóa học: <strong>2020 - 2021</strong></p>
          <p>Bậc đào tạo: <strong>Đại học</strong></p>
          <p>Loại hình đào tạo: <strong>Chính quy</strong></p>
          <p>Ngành: <strong>Kỹ thuật phần mềm</strong></p>
        </Col>
      </Row>
    </Card>
  );
};

export default StudentDetail;