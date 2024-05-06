import React, { useRef, useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { Bar } from 'react-chartjs-2';

const StudentResultChart = () => {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        if (chartRef.current && chartData === null) {
            setChartData(generateChartData());
        }
    }, []);

    const generateChartData = () => {
        return {
            labels: ['Math', 'Physics', 'Chemistry', 'Biology', 'English'],
            datasets: [
                {
                    label: 'Scores',
                    backgroundColor: '#1890ff',
                    borderColor: '#1890ff',
                    borderWidth: 1,
                    hoverBackgroundColor: '#40a9ff',
                    hoverBorderColor: '#40a9ff',
                    data: [80, 75, 85, 90, 70],
                },
            ],
        };
    };

    return (
        <>
        {chartData ? (
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Bar
                        ref={chartRef}
                        data={chartData}
                        options={{
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            beginAtZero: true,
                                        },
                                    },
                                ],
                            },
                        }}
                    />
                </Col>
            </Row>
        ) : (
            <p style={{textAlign:'center'}}>Chưa có dữ liệu hiển thị</p>
        )}
        </>
    );
};

export default StudentResultChart;