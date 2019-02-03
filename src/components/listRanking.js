import React from 'react';
import { List, Avatar } from 'antd';

const data = [
    {
        title: 'Usuário 1',
    },
    {
        title: 'Eu',
    },
    {
        title: 'Usuário 3',
    },
];

export default class ListRanking extends React.Component{
    render(){
        return(
            <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://img.icons8.com/color/48/000000/9-circle.png"/>}
          title={item.title}
          description='A ideia é colocar as conquistas aqui e os números posto sem ordem'
        />
      </List.Item>
    )}
  /> 
        )
    }
}