import React from "react";
import { Row, Col, Card, Avatar } from "antd";
import './StudentDetail.scss';
const { Meta } = Card;

const StudentDetail = ({userInfo}) => {
  console.log("userInfo", userInfo);
  function formatDateToDDMMYY(dateString) {
    // Create a Date object from the date string
    const date = new Date(dateString);

    // Extract day, month, and year components
    const day = String(date.getDate()).padStart(2, "0"); // Get day with leading zero if necessary
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month with leading zero if necessary (Month is zero-based)
    const year = String(date.getFullYear()); // Get last two digits of the year

    // Combine day, month, and year components
    const ddmmyy = `${day}/${month}/${year}`;

    return ddmmyy;
  }
  const dateString = userInfo.dateOfBirth;
  const formattedDate = formatDateToDDMMYY(dateString);
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
          <p>MSSV: <strong>{userInfo.studentId}</strong></p>
          <p>Họ tên: <strong>{userInfo.name}</strong></p>
          <p>Giới tính: <strong>Nam</strong></p>
          <p>Ngày sinh: <strong>{formattedDate}</strong></p>
          <p>Nơi sinh: <strong>{userInfo.homeTown}</strong></p>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <p>Lớp học: <strong>{userInfo.clazz}</strong></p>
          <p>Khóa học: <strong>{userInfo.schoolYear}</strong></p>
          <p>Bậc đào tạo: <strong>{userInfo.educationLevel}</strong></p>
          <p>Loại hình đào tạo: <strong>Chính quy</strong></p>
          <p>Ngành: <strong>KTPM</strong></p>
        </Col>
      </Row>
    </Card>
  );
};

export default StudentDetail;