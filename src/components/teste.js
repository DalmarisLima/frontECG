import React from 'react';
import { List, Avatar, Icon, Comment, Tooltip } from 'antd';
import moment from 'moment';

const listData = []; {
    listData.push({

        title: 'Dr. Pedro',
        avatar: 'https://img.icons8.com/office/40/000000/doctor-male.png',
        content: 'Resolveu um caso clínico!',
 }, {

            title: 'Dr. Larissa',
            avatar: "https://img.icons8.com/office/40/000000/doctor-female.png",
            
            content: 'Conquistou uma medalha de ouro!',
        }, {
            title: 'Dr. Carlos',
            avatar: "https://img.icons8.com/office/40/000000/babys-room.png", 
            content: 'Completou mais um nível',
        });
}

export default class InfiniteListExample extends React.Component {
    state = {
        likes: 0,
        dislikes: 0,
        action: null,
    }

    like = () => {
        this.setState({
            likes: 1,
            dislikes: 0,
            action: 'liked',
        });
    }

    dislike = () => {
        this.setState({
            likes: 0,
            dislikes: 1,
            action: 'disliked',
        });
    }

    render() {
        const { likes, dislikes, action } = this.state;

        const actions = [
            <span>
                <Tooltip title="Gostei">
                    <Icon
                        type="like"
                        theme={action === 'liked' ? 'filled' : 'outlined'}
                        onClick={this.like}
                    />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto' }}>
                    {likes}
                </span>
            </span>,
            <span>
                <Tooltip title="Não Gostei">
                    <Icon
                        type="dislike"
                        theme={action === 'disliked' ? 'filled' : 'outlined'}
                        onClick={this.dislike}
                    />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto' }}>
                    {dislikes}
                </span>
            </span>,
        ];
        return (
            <List
                itemLayout="vertical"
                size="large"
                dataSource={listData}
                renderItem={item => (
                    <List.Item actions={actions}>
                        
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        );
    }
}
