// ReminderBoard.jsx
import React from 'react';
import { Row, Col, Badge } from 'antd';
import { BellOutlined, CalendarOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const ReminderBoard = ({ index }) => {
    const data = [
        {
            text: "Nhắc nhở mới, chưa xem",
            newReminderCount: 2,
            iconDesign: BellOutlined
        },
        {
            text: "Lịch trong tuần",
            newReminderCount: 6,
            iconDesign: CalendarOutlined
        },
        {
            text: "Lịch thi trong tuần",
            newReminderCount: 3,
            faIcon: faCalendarAlt
        }
    ];

    const { iconDesign, faIcon } = data[index];
    const IconComponent = iconDesign || FontAwesomeIcon;

    return (
        <Row justify="space-between">
            <Col span={22}> {/* Thay đổi span từ 16 thành 24 */}
                <div>
                    <div>
                        <span>{data[index].text}</span>
                    </div>
                    <div style={{ marginTop: 16 }}>
                        <a href="#">Xem chi tiết</a>
                    </div>
                </div>
            </Col>
            <Col span={2}> {/* Thay đổi span từ 8 thành 24 */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                    <div style={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
                        <Badge count={data[index].newReminderCount}>
                            <IconComponent icon={faIcon} style={{ fontSize: 24 }} />
                        </Badge>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default ReminderBoard;