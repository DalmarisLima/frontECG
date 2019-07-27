import React from 'react';
import { Card, Popover, Row, Col, Icon } from 'antd';
import ListRanking from '../components/listRanking';
import Table from '../components/tableRanking';
import Paragraph from 'antd/lib/typography/Paragraph';



const tabList = [{
    key: 'tab1',
    tab: 'Ranking',
}, {
    key: 'tab2',
    tab: 'Conquistas',
}];
const contentList = {
    tab1: <ListRanking />,
    tab2: <Table />,
};

export default class StudyMaterial extends React.Component {
    state = {
        key: 'tab1'
    }
    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
    }
    render() {
        return (
            <div>
                <Card
                    style={{ width: '100%', marginTop: "70px" }}
                    title="Ranking"
                    tabList={tabList}
                    activeTabKey={this.state.key}
                    onTabChange={(key) => { this.onTabChange(key, 'key'); }}>
                    {contentList[this.state.key]}

                </Card>
            </div>
        )
    }
}