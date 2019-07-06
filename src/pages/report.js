import React from 'react';
import { Card } from 'antd';
import Graphic from '../components/graphic';
import Tab from '../components/tableReport';

const tabList = [{
    key: 'tab1',  
    tab: 'Evolução de Aprendizagem',
}, {
    key: 'tab2',
    tab: 'Conteúdos',
}];
const contentList = {
    tab1:  <div><Graphic/></div>,
    tab2: <Tab/> 
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