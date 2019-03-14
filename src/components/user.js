import React from 'react';
import { Avatar, Progress } from 'antd';


const UserList = [
    <Avatar src="https://img.icons8.com/dusk/64/000000/babys-room.png" />,
    <Avatar src="https://img.icons8.com/dusk/64/000000/doctor-female.png"/>,
    <Avatar src="https://img.icons8.com/dusk/64/000000/medical-doctor.png"/>];


export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: UserList[0],

        };
    }

    changeUser = () => {
        const index = UserList.indexOf(this.state.user);
        this.setState({
            user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],

        });
    }
    render() {
        return (
            <div>
                <Avatar style={{ verticalAlign: 'middle' }} size='large' onClick={this.changeUser}>
                    {this.state.user}
                </Avatar> Dr. Usuário
            </div>

        );
    }
}
