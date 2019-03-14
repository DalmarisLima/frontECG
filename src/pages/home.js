import React from 'react';
import { Card, Col, Row } from 'antd';
import Calendar from '../components/calendar';
import Teste from '../components/feed';
import Evolution from '../components/evolution';

const tablis = [{
    key: 'tab1',
    tab: 'Cora'
},{
    key: 'tab2',
    tab: 'Feed Notícias',

}];

const contentList = {
    tab1: <Evolution/>,
    tab2: <div>
         <Row>
      <Col span={6}><Teste/></Col>
      <Col span={6} offset={4}>Agenda <Calendar/></Col>
    </Row>
    </div>,
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
                    title='Início'
                    tabList={tablis}
                    activeTabKey={this.state.key}
                    onTabChange={(key) => { this.onTabChange(key, 'key'); }}>
                    {contentList[this.state.key]}
                </Card>
            </div>
        );
    }
}