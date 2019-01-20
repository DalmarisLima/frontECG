import React from 'react';
import { Card } from 'antd';
import Calendar from './calendar';
import { type } from 'os';

const tablis = [{
    key: 'tab1',
    tab: 'Feed Notícias',
}, {
    key: 'tab2',
    tab: 'Próximos Eventos'
}];

const contentList = {
    tab1: <p>Alguma coisa</p>,
    tab2: <Calendar />
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
                    style={{ width: '100%' }}
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