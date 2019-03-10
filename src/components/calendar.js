import React from 'react';
import {Calendar} from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);

}

  export default class calendar extends React.Component{
      render(){
          return(
            <div style={{ width: 700 ,border: '1px solid #d9d9d9', borderRadius: 4 }}>
            <Calendar  onPanelChange={onPanelChange}  />
          </div>   
          );
      }
  }