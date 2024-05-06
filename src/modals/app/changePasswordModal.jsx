import React, { useState } from 'react';
import { Modal, Input, Button, message } from 'antd';
import axios from '../../utils/axios';
import { useSelector } from 'react-redux';

const ChangePasswordModal = ({ visible, onCancel, onConfirm }) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleConfirm = () => {
        // Kiểm tra xác nhận mật khẩu mới
        if (newPassword !== confirmPassword) {
            message.error('Mật khẩu mới không khớp. Vui lòng kiểm tra lại.');
            return;
        }
        
        // Gọi hàm xác nhận và đóng modal
        onConfirm(oldPassword, newPassword);
    };

    return (
        <Modal
            title="Đổi mật khẩu"
            visible={visible}
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel}>
                    Hủy
                </Button>,
                <Button key="confirm" type="primary" onClick={handleConfirm}>
                    Hoàn thành
                </Button>,
            ]}
        >
            <Input style={{ marginBottom: '1rem' }}
                type="password"
                placeholder="Mật khẩu cũ"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
            />
            <Input style={{ marginBottom: '1rem' }}
                type="password"
                placeholder="Mật khẩu mới"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <Input style={{ marginBottom: '1rem' }}
                type="password"
                placeholder="Xác nhận mật khẩu mới"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
        </Modal>
    );
};

export default ChangePasswordModal;