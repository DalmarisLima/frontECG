import React from 'react';
import { List, Card, Row, Col, Typography } from 'antd';


const data = [
    {
        title: 'Nível 1',
    },
    {
        title: 'Nível 2',
    },
    {
        title: 'Nível 3',
    },
    {
        title: 'Nível 4',
    },

];


export default class Tabela extends React.Component {
    render() {
        return (
            <List
                grid={{
                    gutter: 24, xs: 1, sm: 1, md: 2, lg: 2, xl: 4, xxl: 1,
                }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card title={item.title} type="inner">
                            <img src="https://img.icons8.com/dusk/64/000000/trophy.png" />
                            <img src="https://img.icons8.com/dusk/64/000000/prize.png" />
                            <img src="https://img.icons8.com/dusk/64/000000/medal2.png" />
                        </Card>
                    </List.Item>
                )}
            />
        );
    }
}

