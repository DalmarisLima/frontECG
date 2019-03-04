import React from 'react';
import {Calendar, Badge} from 'antd';

function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'Essa atividade está atrasada' },
          { type: 'success', content: 'Atividade Completa' },
        ]; break;
      default:
    }
    return listData || [];
  }
  
  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {
          listData.map(item => (
            <li key={item.content}>
              <Badge status={item.type} text={item.content} />
            </li>
          ))
        }
      </ul>
    );
  }
  
  function getMonthData(value) {
    if (value.month() === 8) {
      return;
    }
  }
  
  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

  export default class calendar extends React.Component{
      render(){
          return(
                <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} fullscreen="false" />   
          );
      }
  }