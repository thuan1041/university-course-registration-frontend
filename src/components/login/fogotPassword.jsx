import React, { useEffect, useState } from "react";
import './login.scss';
import { Tabs } from 'antd';
import GmailAuthencation from "../../pages/auth/auth.gmail";
import NewPassword from "../../pages/auth/auth.newPassword";

const FogotPassword = ({studentFogotPasswordData}) => {
    const [activeKey, setActiveKey] = useState('1'); // Trạng thái của tab activ
    
    const handleConfirmGmail = () => {
        setActiveKey('2'); // Chuyển sang tab "Mật khẩu mới" khi xác nhận gmail
    };

    function handleTransferTab(tabKey) {
        const item1 = [
            {
                key: '1',
                label: <p className="title-login title-login--l">(1) NHẬP MÃ XÁC MINH</p>,
                children: <GmailAuthencation  studentFogotPasswordData={studentFogotPasswordData} onConfirm={handleConfirmGmail} />,
            },
            {
                key: '2',
                label: <p className="title-login title-login--l">(2) MẬT KHẨU MỚI</p>,
                children: <NewPassword />,
            },
        ]
        const item2 = [
            {
                key: '2',
                label: <p className="title-login title-login--r">(1) NHẬP MÃ XÁC MINH</p>,
                children: <GmailAuthencation onConfirm={handleConfirmGmail} />,
            },
            {
                key: '1',
                label: <p className="title-login title-login--r">(2) MẬT KHẨU MỚI</p>,
                children: <NewPassword/>,
            },
        ]
        return (
            <Tabs
                defaultActiveKey={tabKey}
                items={
                    tabKey === '1' ? (
                        item1.map(tab => ({
                            ...tab,
                            disabled: tab.key === '2' && activeKey === '1'
                        }))
                    ) : tabKey === '2' ? (
                        item2.map(tab => ({
                            ...tab,
                            disabled: tab.key === '2' && activeKey === '2'
                        }))
                    ) : (null) 
                }
                className="login-body"
                centered
            />
        );
    } 

    useEffect(() => {
        handleTransferTab(activeKey);
    }, [activeKey]);

    return (
        <>
            {handleTransferTab(activeKey)}
        </>
    );
}

export default FogotPassword;
