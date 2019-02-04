import React from 'react';
import {Table} from 'antd';

const columns = [{
    title: 'Troféus',
    dataIndex: 'trofeus',
}, {
    title: 'Medalhas',
    dataIndex: 'medalhas',

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
                 <Table columns = {columns} dataSource ={data} size = "middle"/>
             </div>
         )
     }
 }