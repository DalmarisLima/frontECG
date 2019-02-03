import React from 'react';
import { Card, Skeleton} from 'antd';
import Graphic from '../components/graphic';
import Tab from '../components/table';
import { Container } from 'react-bootstrap';

const tabList = [{
    key: 'tab1',  
    tab: 'Conteúdos',
}, {
    key: 'tab2',
    tab: 'Evolução de Aprendizagem',
}];
const contentList = {
    tab1:  <Tab/>,
    tab2: <Container><Graphic/></Container> 
};

export default class Reports extends React.Component {
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
                    style={{ width: '100%', marginTop: "70px"}}
                    title="Relatório"
                    tabList={tabList}
                    activeTabKey={this.state.key}
                    onTabChange={(key) => { this.onTabChange(key, 'key'); }}>
                    {contentList[this.state.key]}
                </Card>
            </div>
        )
    }
}