import React from 'react';
import { Radio, Alert, Popconfirm } from 'antd';

const RadioGroup = Radio.Group;


export default class Pratice extends React.Component {
    state = {
        value: null,
    }
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio style={radioStyle} value={1}>A</Radio>
                <Radio style={radioStyle} value={2}>B</Radio>
                <Radio style={radioStyle} value={3}>C</Radio>
                <Radio style={radioStyle} value={4}>D</Radio>
                <Radio style={radioStyle} value={5}>E</Radio>
                {this.state.value === 1 ? <Alert message="Resposta Correta" type="success" showIcon /> : null}
                {this.state.value === 2 ? <Alert message="Resposta Incorreta," type="error" showIcon /> : null}
                {this.state.value === 3 ? <Alert message="Resposta Incorreta" type="error" showIcon /> : null}
                {this.state.value === 4 ? <Alert message="Resposta Incorreta" type="error" showIcon /> : null}
                {this.state.value === 5 ? <Alert message="Resposta Incorreta" type="error" showIcon /> : null}
            </RadioGroup>
        );

    }
}
