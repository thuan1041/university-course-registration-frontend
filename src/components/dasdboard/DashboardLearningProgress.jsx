import React from 'react';
import { Row, Col, Card } from 'antd';
import StudyProgress from './StudyProgress';
import StudentResultChart from './StudentResultChart';

const DashboardLearningProgress = () => {
    return (
        <>
            <Row gutter={[16, 16]} style={{width:'100%',}}>
                <Col span={12} lg={8} md={12} sm={12} xs={24}>
                    <Card title="Kết quả học tập" style={{ width: '100%', minHeight:'270px' }}>
                        <StudentResultChart/>
                    </Card>
                </Col>
                <Col span={12} lg={7} md={12} sm={12} xs={24}>
                    <Card title="Tiến độ học tập" style={{ width: '100%', minHeight:'270px'}}>
                        <Row style={{display:'flex', justifyContent:'center', alignItems:'center' }}>
                            <StudyProgress/>
                        </Row>
                    </Card>
                </Col>
                <Col span={12} lg={9} md={12} sm={12} xs={24}>
                    <Card title="Lớp học phần" style={{ width: '100%', minHeight:'270px' }}>
                        <p style={{textAlign:'center'}}> Chưa có dữ liệu hiển thị</p>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default DashboardLearningProgress;
