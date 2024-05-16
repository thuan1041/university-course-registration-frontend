import React, { useEffect, useState } from "react";
import '../auth/auth.loginPage.scss'
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Button, Form, Input, Layout } from 'antd';
import { STATE } from "../../redux/types/type.app";
import { useSelector } from "react-redux";
import { Row, Col, Card } from 'antd';
import { DatePicker } from 'antd';
import './timeTable.scss';

const { Content } = Layout;

const TimeTable = () => {

    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date);
        // Xử lý logic khi người dùng chọn một ngày
    };

    const data2 = [{
        t2: [
            {
                "weekDay": 2,
                "start": 1,
                "end": 3,
                "_id": "111"
            },
            {
                "weekDay": 2,
                "start": 4,
                "end": 6,
                "_id": "222"
            }
        ],
        t3: [{
                "weekDay": 3,
                "start": 1,
                "end": 3,
                "_id": "111"
            },
            {
                "weekDay": 3,
                "start": 4,
                "end": 6,
                "_id": "222"
        }]
    }]
    const data = [{
        "weekDay": 2,
        "start": 1,
        "end": 3,
        "_id": "111"
    },
    {
        "weekDay": 2,
        "start": 4,
        "end": 6,
        "_id": "222"
    },
    {
        "weekDay": 3,
        "start": 1,
        "end": 3,
        "_id": "111"
    },
    {
        "weekDay": 3,
        "start": 4,
        "end": 6,
        "_id": "222"
    
    }]
    const getDayOfWeek = (day) => {
        const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        return daysOfWeek[day];
      };
    
    const handleDisplayTimeTable = () => {

    }

    const Item = ({data}) => {
        return (
            <Card>
                <Col >
                    <Row>{`Thứ${data.weekDay}`}</Row>
                    <Row>{`Tiết${data.start}`}</Row>
                    <Row>{`đến tiết${data.end}`}</Row>
                </Col>
            </Card>
        )
    }
    
    return (
        <>
        <Content style={{backgroundColor:'#ffffff', color:"#EB7B21", border: '2px solid #E1EBF6', borderRadius:6, marginTop:10, padding: '0 220px'}}>
            <div>
                <h1>Chọn ngày:</h1>
                <DatePicker onChange={handleDateChange} />
                {selectedDate && <p>Bạn đã chọn ngày: {selectedDate.toString()}</p>}
            </div>

            {/* tôi muốn viết lịch học sinh viên. tôi sẽ chia màn hình thành 7 cột bằng nhau và css cho nếu là thứ 2 thì đối tượng sẽ hiển thị ở cột đầu tiên nếu thứ 3 thì cột thứ 2, .... */}
            {/* <Row gutter={[16, 16]} justify="center">
            {[...Array(7).keys()].map((day) => (
                <Col span={3} key={day}>
                {/* Hiển thị tên ngày */}
                {/* {getDayOfWeek(day)} */}
                {/* </Col> */}
            {/* ))} */} 
            <Row span={24}>
                <Col span={3}>
                    <Row><Item data={data[0]}></Item></Row>
                    <Row>lịch 1</Row>
                    <Row>lịch 2</Row>
                    <Row>lịch 3</Row>
                    <Row>lịch 4</Row>
                    <Row>lịch 5</Row>
                </Col>
                <Col span={3}>
                    <Row>Thứ 3</Row>
                    <Row>lịch 1</Row>
                    <Row>lịch 2</Row>
                    <Row>lịch 3</Row>
                    <Row>lịch 4</Row>
                    <Row>lịch 5</Row>
                </Col>
                <Col span={3}>
                    <Row>Thứ 4</Row>
                    <Row>lịch 1</Row>
                    <Row>lịch 2</Row>
                    <Row>lịch 3</Row>
                    <Row>lịch 4</Row>
                    <Row>lịch 5</Row>
                </Col>
                <Col span={3}>
                    <Row>Thứ 5</Row>
                    <Row>lịch 1</Row>
                    <Row>lịch 2</Row>
                    <Row>lịch 3</Row>
                    <Row>lịch 4</Row>
                    <Row>lịch 5</Row>
                </Col>
                <Col span={3}>
                    <Row>Thứ 6</Row>
                    <Row>lịch 1</Row>
                    <Row>lịch 2</Row>
                    <Row>lịch 3</Row>
                    <Row>lịch 4</Row>
                    <Row>lịch 5</Row>
                </Col>
                <Col span={3}>Thứ 7</Col>
                <Col span={3}>Chủ Nhật</Col>
            </Row>
        </Content>

        </>
    )
}

export default TimeTable;