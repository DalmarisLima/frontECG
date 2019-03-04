import React from 'react';
import {Avatar , Button } from 'antd';

const UserList = ['Dr. Baby' , 'Dr. Teen' , 'Dr. Expert'];
const colorList = [ '#4682B4', '#228B22', '#DC143C'];


export default class User extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            user: UserList[0],
            color: colorList[0],
        };
    }
    
    changeUser = () => {
        const index = UserList.indexOf(this.state.user);
        this.setState({
            user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
            color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
        });
    }
    render(){
        return (
            <div>
                <Avatar style={{ backgroundColor: this.state.color, verticalAlign: 'middle', marginLeft: 16}} size='large'>
                {this.state.user}
                </Avatar>
            <Button size='small' type= 'primary' style = {{marginLeft: 16, verticalAlign: 'middle'}} onClick= {this.changeUser}>
             Mudar Avatar

                </Button>
            </div>

        );
    }
}
