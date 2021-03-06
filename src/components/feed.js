import React from 'react';
import { Avatar, Icon, Comment, Timeline, Tooltip, Divider, Col, Row, Card, Typography, Popover } from 'antd';
import moment from 'moment';
import cora from "./cora.svg";
import Paragraph from 'antd/lib/typography/Paragraph';

const { Title } = Typography;


const content = (
    <div>
        <Title level={4}>
            <p> No FEED é possível acessar as últimas notícias de </p>
            <p>todos os usuários do ECG Tutor.</p>
            <p>Agora que já viu as últimas novidades,</p>
            <p>seria interessante acessar o RANKING. Clica lá!</p>
        </Title>

    </div>
);



export default class Feed extends React.Component {
    state = {
        reverse: false,
    }
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
            <div>

                <Card
                    type="inner"
                    title={<Title level={4}>Feed</Title>}
                >
                    <Row>
                        <Col span={12}>

                            <Timeline pending="Carregando..." reverse={this.state.reverse}>

                                <Row>
                                    <Col span={16}>
                                        <Timeline.Item>
                                            <Comment
                                                actions={actions}
                                                author={<a>Dr. Pedro</a>}
                                                avatar={(
                                                    <Avatar
                                                        src="https://img.icons8.com/dusk/64/000000/babys-room.png"
                                                        alt="Dr. Pedro"
                                                    />
                                                )}
                                                content={(
                                                    <p> Assitiu o vídeo sobre ...</p>
                                                )}
                                                datetime={(
                                                    <Tooltip title={moment().format('DD-MM-YYYY HH:mm')}>
                                                        <span>{moment().fromNow()}</span>
                                                    </Tooltip>
                                                )}
                                            />
                                            <Divider type="horizontal" ></Divider>
                                        </Timeline.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={16}>
                                        <Timeline.Item>
                                            <Comment
                                                actions={actions}
                                                author={<a>Drª Maria</a>}
                                                avatar={(
                                                    <Avatar
                                                        src="https://img.icons8.com/dusk/64/000000/doctor-female.png"
                                                        alt="Drª Maria"
                                                    />
                                                )}
                                                content={(
                                                    <p>Consquistou seu primeiro troféu...</p>
                                                )}
                                                datetime={(
                                                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                                        <span>{moment().fromNow()}</span>
                                                    </Tooltip>
                                                )}
                                            />
                                            <Divider type="horizontal" ></Divider>
                                        </Timeline.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <Timeline.Item>
                                            <Comment
                                                actions={actions}
                                                author={<a>Dr. João</a>}
                                                avatar={(
                                                    <Avatar
                                                        src="https://img.icons8.com/dusk/64/000000/medical-doctor.png"
                                                        alt="Dr Joao"
                                                    />
                                                )}
                                                content={(
                                                    <p>Repondeu o execício do assunto...</p>
                                                )}
                                                datetime={(
                                                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                                        <span>{moment().fromNow()}</span>
                                                    </Tooltip>
                                                )}
                                            />
                                            <Divider type="horizontal" ></Divider>
                                        </Timeline.Item>
                                    </Col>
                                </Row>
                            </Timeline>
                        </Col>
                        <Col span={2}>
                            <Popover content={content} placement="right"

                                trigger="hover">
                                <img
                                    src={cora}
                                    className="Cora"
                                    alt="cora"
                                    style={{ marginLeft: "250px" }}
                                />
                            </Popover>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}