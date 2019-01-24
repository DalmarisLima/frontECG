import React from 'react';
import { Card, Skeleton} from 'antd';

const tabList = [{
    key: 'tab1',
    tab: 'Perfil',
}, {
    key: 'tab2',
    tab: 'Conquistas',
}, {
    key: 'tab3',
    tab: 'Ranking',

}];
const contentList = {
    tab1:  <Skeleton/>,
    tab2: <Skeleton/>,
    tab3:   <Skeleton/>,
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
                    style={{ width: '100%', marginTop: "70px"}}
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