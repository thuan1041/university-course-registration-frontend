import React from "react";
import { Row, Col, Card, Avatar } from "antd";

const { Meta } = Card;

const StudentDetail = () => {
  return (
    <Card title="Thông tin sinh viên" style={{padding:2}}>
        <Row style={{ width: "100%", display:'flex', alignItems:"center", justifyContent:'space-between', paddingLeft:20, paddingRight:20}}>
            <Col>
                <Avatar
                src="../../../public/images/student_avt.jpg"
                size={130}
                style={{ margin: "6px auto", display: "block" }}
                />
                <Meta title="Xem chi tiết" style={{ textAlign: "center" }} />            
            </Col>
            <Col>
                <p>MSSV: 20051041</p>
                <p>Họ tên: Trần Minh Thuận</p>
                <p>Giới tính: Nam</p>
                <p>Ngày sinh: 03/03/2002</p>
                <p>Nơi sinh: Tỉnh Tây Ninh</p>
            </Col>
            <Col>
                <p>Lớp học: DHKTPM16A</p>
                <p>Khóa học: 2020 - 2021</p>
                <p>Bậc đào tạo: Đại học</p>
                <p>Loại hình đào tạo: Chính quy</p>
                <p>Ngành: Kỹ thuật phần mềm</p>            
            </Col>
        </Row>
    </Card>

  );
};

export default StudentDetail;
