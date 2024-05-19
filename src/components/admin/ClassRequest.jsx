import React, { useState } from 'react';
import { Table, Button, Space, message, Row, Col } from 'antd';
import { ArrowLeftOutlined, CheckOutlined } from '@ant-design/icons';
import axios from '../../utils/axios';

const ClassRequest = ({ onBack }) => {
    const [dataSource, setDataSource] = useState([
        // Dữ liệu mẫu
        { key: '1', stt: 1, studentId: 'SV001', fullName: 'Nguyễn Văn A', className: 'Lớp A', subjectName: 'Môn A', status: 'Đang yêu cầu' },
        { key: '2', stt: 2, studentId: 'SV002', fullName: 'Trần Thị B', className: 'Lớp B', subjectName: 'Môn B', status: 'Đang yêu cầu' },
        // Thêm các dòng dữ liệu cho các học viên khác ở đây
    ]);

    const handleApprove = async (key) => {
        try {
            const rs = await axios.put(`/class/approve`, { key });
            if (rs.data.errCode === 0) {
                message.success("Phê duyệt thành công");
                const newData = dataSource.map(item => item.key === key ? { ...item, status: 'Đã được chấp nhận' } : item);
                setDataSource(newData);
            } else {
                message.error("Có lỗi xảy ra");
            }
        } catch (error) {
            console.log("error", error);
            message.error("Đã xảy ra lỗi khi phê duyệt");
        }
    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
        },
        {
            title: 'Mã số sinh viên',
            dataIndex: 'studentId',
            key: 'studentId',
        },
        {
            title: 'Họ và tên',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'Tên lớp học phần',
            dataIndex: 'className',
            key: 'className',
        },
        {
            title: 'Tên môn học',
            dataIndex: 'subjectName',
            key: 'subjectName',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Thao tác',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    {record.status === 'Đang yêu cầu' && (
                        <Button
                            type="primary"
                            icon={<CheckOutlined />}
                            onClick={() => handleApprove(record.key)}
                        >
                            Phê duyệt
                        </Button>
                    )}
                </Space>
            ),
        },
    ];

    return (
        <>
            <Row justify="space-between" style={{ marginBottom: '16px' }}>
                <Col>
                    <Button icon={<ArrowLeftOutlined />} onClick={onBack}>
                        Trở lại
                    </Button>
                </Col>
            </Row>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false} // Tắt phân trang nếu danh sách học viên dài
            />
        </>
    );
};

export default ClassRequest;
