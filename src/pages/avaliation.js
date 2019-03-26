import React from 'react';
import { Card, Col, Row } from 'antd';
import Avaliation from '../components/aval';

const tablis = [{
    key: 'tab1',
    tab: 'Avaliação'
},];

const contentList = {
    tab1: <Row>
        <Col span={24}>
            <Avaliation />
        </Col>
    </Row>,
};

export default class Home extends React.Component {
    state = {
        key: 'tab1',
    }

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key })
    }

    render() {
        return (
            <div>
                <Card
                    style={{ width: '100%', marginTop: "70px" }}
                    tabList={tablis}
                    activeTabKey={this.state.key}
                    onTabChange={(key) => { this.onTabChange(key, 'key'); }}>
                    {contentList[this.state.key]}
                </Card>
            </div>
        );
    }
}