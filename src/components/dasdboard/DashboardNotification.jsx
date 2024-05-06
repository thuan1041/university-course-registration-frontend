import React from 'react';
import { Row, Col, Badge, Divider, Card } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import ReminderBoard from './reminderBoard';

const DashboardNotification = () => {
    return (
        <Row gutter={[16, 16]} style={{padding:10, marginTop:-10}}>
            <Col span={24}>
                <Card>
                    <ReminderBoard index={0} />
                </Card>
            </Col>
            <Col span={12}>
                <Card>
                    <ReminderBoard index={1} />
                </Card>
            </Col>
            <Col span={12}>
                <Card>
                    <ReminderBoard index={2} />
                </Card>
            </Col>
        </Row> 
    );
};

export default DashboardNotification;
