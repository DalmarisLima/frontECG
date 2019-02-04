import React from 'react';
import { Steps, Progress, Timeline } from 'antd';

const Step = Steps.Step;


export default class Tree extends React.Component {
    render() {
        return (

            <div>
                <Progress type="circle" percent={100} />
                <Progress type="circle" percent={20} />
                <Progress type="circle" percent={0} />

            </div>


        );
    }

}