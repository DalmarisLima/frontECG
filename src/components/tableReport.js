import React from 'react';
import {Table, Card, Typography} from 'antd';

const { Title } = Typography;
const columns = [{
    title: 'Assuntos',
    dataIndex: 'assuntos',
}, {
    title: 'Texto',
    dataIndex: 'texto',

}, {
    title: 'Vídeo',
    dataIndex: 'video',
},{
    title: 'Praticar',
    dataIndex: 'praticar',
}];

const data = [{
    key: '1',
    assuntos: 'Assunto 1',
    texto: 'Texto 1',
    video: 'Vídeo 1',
    praticar: 'Pratica 1',
},{
    key: '2',
    assuntos: 'Assunto 2',
    texto: 'Texto 2',
    video: 'Vídeo 2',
    praticar: 'Praticar 2',
}];
 export default class Tabela extends React.Component{
     render(){
         return(
             <div>

<Card
              type="inner"
              title={<Title level={4}>Conteúdos</Title>}>



                 <Table columns = {columns} dataSource ={data} size = "middle" pagination={false}/>
                 </Card>
             </div>
         )
     }
 }