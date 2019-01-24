import React from 'react';
import { Card, Skeleton} from 'antd';
import Ques from '../components/quetions';

const tabList = [{
    key: 'tab1',
    tab: 'Material de Texto',
}, {
    key: 'tab2',
    tab: 'Material de Vídeo',
}, {
    key: 'tab3',
    tab: 'Praticar',

}];
const contentList = {
    tab1:  <Skeleton/>,
    tab2:<iframe width="800" height="400" controls style={{ marginLeft: '250px' }} src="https://www.youtube.com/embed/vLdPL3xvq3M">
    </iframe>,
    tab3: <div><Ques/></div>,
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
                    title="Material de Estudos"
                    tabList={tabList}
                    activeTabKey={this.state.key}
                    onTabChange={(key) => { this.onTabChange(key, 'key'); }}>
                    {contentList[this.state.key]}
                </Card>
            </div>
        )
    }
}