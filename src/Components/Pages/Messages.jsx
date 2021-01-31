import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Container, Grid } from '@material-ui/core'

import MessageList from '../MessageList'
import SendMessage from '../SendMessage'
import ChatList from '../ChatList'

import { sender } from '../../store/Actions/message'

import '../../styles/Messages.scss'

class Messages extends React.Component {
    state = {
        messages: [],
        chats: {
            0: {
                name: 'Чат 1',
                messages: []
            },
            1: {
                name: 'Чат 2',
                messages: []
            },
            2: {
                name: 'Чат 3',
                messages: []
            },
            3: {
                name: 'Чат 4',
                messages: []
            },
            4: {
                name: 'Чат 5',
                messages: []
            }
        }
    }
    static propTypes = {
        chatId: PropTypes.number
    }
    static defaultProps = {
        chatId: 0
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.messages.length < this.state.messages.length && 
        this.state.messages[this.state.messages.length - 1].author === 'Me'){
            console.log('componentDidUpdate')
            setTimeout(()=> {
                const newBotMesId = this.state.messages.length
                this.setState({ messages: [...this.state.messages, {message: 'I do not answer you. I am bot', author: 'Bot', id: newBotMesId}]})
                const chats = {...this.state.chats};
                chats[this.props.chatId].messages.push(newBotMesId);
                this.setState({chats: {...chats}});
            },
            2000
            )
        }
    }

    componentWillUnmount(){
        clearTimeout(this.state.timeout);
        this.setState({timeout: null});
    }

    send = objMsg => {
        this.props.sender(objMsg)
        const newMesId = this.state.messages.length;
        this.setState({messages: [...this.state.messages, {...objMsg, id: newMesId}]});
        const chats = {...this.state.chats};
        chats[this.props.chatId].messages.push(newMesId);
        this.setState({chats: {...chats}});
    }

    render() {
        return (
            <div className='messages__container'>
                <div className='chatlist__container'>
                        <ChatList chats={['Чат 1', 'Чат 2', 'Чат 3', 'Чат 4', 'Чат 5']} />
                </div>
                <div className='messages__main'>
                    <div className='chat'>
                        <h3 className='messages__header-name'>{this.state.chats[this.props.chatId].name}</h3>
                    <div className='messagelist__container'>
                        <div className='messages__view'>
                            <MessageList />
                            {/* <MessageList messages={this.state.messages.filter((item, id) => this.state.chats[this.props.chatId].messages.includes(id))}/> */}
                        </div>
                    </div>
                    <div className='textfield'>
                        <SendMessage classname='messages__send-message' send={this.send}/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
//  Start work
const mapDispatchToProps = {
    sender
}

export default connect(null, mapDispatchToProps)(Messages)