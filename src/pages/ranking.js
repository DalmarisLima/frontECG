import React from 'react';
import { Card, Popover, Row, Col, Icon } from 'antd';
import ListRanking from '../components/listRanking';
import Table from '../components/tableRanking';
import Paragraph from 'antd/lib/typography/Paragraph';
import cora from './cora.svg';

const content = (
    <div>
        <p>Seus acertos serão convertidos em pontos e acumulados progressivamente.</p>
        <p> Se for de sua vontade participar, você poderá visualizar sua posição no </p>
        <p> ranking em relação aos outros participantes do ECG tutor.</p>
        <p>Agora que você já sabe como funciona o Ranking, vamos ver as conquistas? Clique em Conquistas! </p>
    </div>
);

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

                <Row>
                    <Col span={24}>

                        <Card
                            style={{ width: '100%', marginTop: "70px" }}
                            title="Ranking"
                            tabList={tabList}
                            activeTabKey={this.state.key}
                            onTabChange={(key) => { this.onTabChange(key, 'key'); }}>
                            <Col span={12}>
                                {contentList[this.state.key]}
                            </Col>
                            
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}