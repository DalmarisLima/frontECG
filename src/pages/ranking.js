import React from 'react';
import { Card, Popover, Row, Col } from 'antd';
import ListRanking from '../components/listRanking';
import Table from '../components/tableRanking';
import Paragraph from 'antd/lib/typography/Paragraph';
import cora from './cora.svg';

const text = <span>Ranking</span>;
const content = (
    <Paragraph strong={true}>
         <img src={cora} className="Cora" alt="cora" />
        <p> Seus acertos serão convertidos em pontos e</p>
        <p> acumulados progressivamente.</p> 
        <p>Se for de sua vontade participar,</p>
        <p>você poderá visualizar sua posição no ranking</p> 
        <p>com todos os alunos participantes do ECG tutor.</p>
        <p>Vamos acessar o material de estudos agora?</p>
    </Paragraph>

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
                    <Popover placement="top" content={content} title="Ranking">
                        <Card
                            style={{ width: '100%', marginTop: "70px" }}
                            title="Ranking"
                            tabList={tabList}
                            activeTabKey={this.state.key}
                            onTabChange={(key) => { this.onTabChange(key, 'key'); }}>
                            {contentList[this.state.key]}
                        
                        </Card>
                        </Popover>

                    </Col>
                </Row>
            </div>
        )
    }
}