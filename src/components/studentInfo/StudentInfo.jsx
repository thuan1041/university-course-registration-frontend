import React from 'react'
import { Row, Col, Card, Avatar } from 'antd';
import { Button, message } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import studentAvt from '../../../public/images/student_avt.jpg'
const StudentInfo = () => {
    const handleLogout = () => {
        message.success('Đăng xuất thành công.');
    }
  return (
    <Row style={{minHeight:50, backgroundColor:'#ffffff', border: '2px solid #E1EBF6', borderRadius:6}}>
        <Col span={5}>
            <Card style={{height:'100%', borderRadius:0, border:'none', backgroundColor:'#4EB0FF', color:'white'}}>
                <p>Xin chào!</p> <br></br>
                <h5 style={{fontSize:16}}>Trần Minh Thuận</h5>
                <p>Giới tính: Nam</p>
                <p>MSSV: 20051401</p>
                <p>Trạng thái: Đang học</p>
                <br></br>
                <Button style={{color:"white", fontWeight:'500', backgroundColor:'#EB7B21'}} icon={<LogoutOutlined />} onClick={handleLogout}>
                    Đăng xuất
                </Button>
            </Card>
        </Col>
        <Col span={4} justify="center" align="middle">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <div style={{width: '100%' }}>
                    <img
                    src={studentAvt}
                    alt="Ảnh"
                    style={{ 
                        width: '100%', 
                        padding: 20, 
                        borderRadius: 40,
                        transition: 'transform 0.2s',
                        cursor: 'pointer', 
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = 'scale(1)';
                    }}
                    />
                </div>
            </div>
        </Col>
        <Col span={15} style={{minHeight:'100%', display:"flex", flexDirection:'column', justifyContent:'center', paddingLeft:60, fontWeight:500}}>
            <Typography.Link href="" target="_blank" style={{lineHeight:'26px'}} >
            THÔNG TIN SINH VIÊN
            </Typography.Link>
            <Typography.Link href="" target="_blank" style={{lineHeight:'26px'}}>
            ĐĂNG KÝ HỌC PHẦN
            </Typography.Link>
            <Typography.Link href="" target="_blank" style={{lineHeight:'26px'}}>
            CHƯƠNG TRÌNH KHUNG
            </Typography.Link>
        </Col>
    </Row>
  )
}

export default StudentInfo