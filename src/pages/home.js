import React from 'react';
import { Card } from 'antd';
import Calendar from '../components/calendar';
import Teste from '../components/teste';

const tablis = [{
    key: 'tab1',
    tab: 'Feed Notícias'
}, {
        key: 'tab2',
        tab: 'Conquistas',
}];

const contentList = {
    tab1: <Teste/>,
    tab2: <Calendar/>
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