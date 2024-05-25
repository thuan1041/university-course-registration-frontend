import React, { useEffect, useState } from 'react';
import { Progress, Row, Col } from 'antd';

const StudyProgress = () => {
    const [hoverText, setHoverText] = useState('');
    const [showTotalInfo, setShowTotalInfo] = useState(true);

    const [getResultCourse, setResultCourse] = useState([]);
    const savedData = localStorage.getItem('userData');
    // Chuyển đổi chuỗi JSON thành đối tượng JavaScript
    const parsedData = JSON.parse(savedData);
    // Sử dụng dữ liệu đã lấy từ localStorage
    const studenId = parsedData?.payload?.studentId;


    const fetchResultCourse = async (studenId) => {
        const payload = {
            studentId: studenId
        }
        try {
            const rs = await axios.post(`student/getStudyResult`, payload);
            if (rs.errCode === 0) {
                setResultCourse(rs.data)
            }
        } catch (error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        fetchResultCourse(studenId)
    }, []);

    
    const handleCompleteHover = () => {
        setHoverText('1');
        setShowTotalInfo(false);
    };

    const handleTotalHover = () => {
        setHoverText('2');
        setShowTotalInfo(false)

    };

    const handleMouseLeave = () => {
        setHoverText('');
    };

    const handleRowEnter = () => {
        setShowTotalInfo(true);
    }

    if(getResultCourse.length != 0) {
        return <>
            <div>
                <p>Loading...</p>
            </div>
        </>
    } else  {
        let completedCredits = 120;
        let totalCredits = 156;
        const progressPercentage = ((completedCredits / totalCredits) * 100).toFixed(0);
        const size = 120 * 0.8;
            return (
                <Row justify="center" style={{ marginTop: '0px' }} onMouseLeave={handleRowEnter}>
                    <Col span={24} style={{ textAlign: 'center', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Progress
                            showInfo={false}
                            type="circle"
                            percent={totalCredits}
                            strokeWidth={10}
                            onMouseEnter={handleTotalHover}
                            onMouseLeave={handleMouseLeave}
                        />
                        <Progress
                            type="circle"
                            percent={progressPercentage}
                            size={size}
                            style={{ zIndex: 1, position: 'absolute' }}
                            strokeWidth={10}
                            onMouseEnter={handleCompleteHover}
                            onMouseLeave={handleMouseLeave}
                            showInfo={showTotalInfo}
                        />
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: "#533E29" }}>
                            {hoverText === '1' && <span>Đã học 130 tín chỉ</span>}
                            {hoverText === '2' && <span>Tổng 156 tín chỉ</span>}
                        </div>
                    </Col>
                    <div style={{ paddingTop: 20 }}>
                        <strong style={{ fontWeight: '700', fontSize: 13 }}>126/156</strong>
                    </div>
                </Row>
            );

    // return (
    //     <Row justify="center" style={{ marginTop: '0px' }} onMouseLeave={handleRowEnter}>
    //         <Col span={24} style={{ textAlign: 'center', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    //             <Progress
    //                 showInfo={false}
    //                 type="circle"
    //                 percent={totalCredits}
    //                 strokeWidth={10}
    //                 onMouseEnter={handleTotalHover}
    //                 onMouseLeave={handleMouseLeave}
    //             />
    //             <Progress
    //                 type="circle"
    //                 percent={progressPercentage}
    //                 size={size}
    //                 style={{ zIndex: 1, position: 'absolute' }}
    //                 strokeWidth={10}
    //                 onMouseEnter={handleCompleteHover}
    //                 onMouseLeave={handleMouseLeave}
    //                 showInfo={showTotalInfo}
    //             />
    //             <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: "#533E29" }}>
    //                 {hoverText === '1' && <span>Đã học 130 tín chỉ</span>}
    //                 {hoverText === '2' && <span>Tổng 156 tín chỉ</span>}
    //             </div>
    //         </Col>
    //         <div style={{ paddingTop: 20 }}>
    //             <strong style={{ fontWeight: '700', fontSize: 13 }}>126/156</strong>
    //         </div>
    //     </Row>
    // );
};

}; 

export default StudyProgress;
