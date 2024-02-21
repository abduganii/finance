import React from 'react';
import { Card, Col, Row, Statistic } from 'antd';
const FinaceCard = ({totalIncome,totalExpense}) => (
  // <Row gutter={16} style={{ "margin":"20px","marginRight":"100px"}}>
  //   <Col span={11}>
  //     <Card title="Расход" bordered={true}>
  //     -{totalExpense}$
  //     </Card>
  //   </Col>
  //   <Col span={11}>
  //     <Card title="Доход" bordered={true}>
  //     +{totalIncome}$
  //     </Card>
  //   </Col>
  // </Row>
  <Row gutter={16} style={{ "margin":"20px","marginRight":"100px"}}>
    <Col span={12}>
      <Statistic title="Расход" value={`-${totalExpense }$`} />
    </Col>
    <Col span={12}>
      <Statistic title="Доход" value={`+${totalIncome}$`}  precision={2} />
    </Col>
  
  </Row>

);
export default FinaceCard;