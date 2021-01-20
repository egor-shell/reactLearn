import React from 'react'
import PropTypes from 'prop-types'

import MessageList from '../MessageList'
import SendMessage from '../SendMessage'

export default class Messages extends React.Component {
    state = {
        messages: [
            {message: 'message 0', author: 'Bot'},
            {message: 'message 1', author: 'Bot'},
            {message: 'message 2', author: 'Bot'},
            {message: 'message 3', author: 'Bot'},
            {message: 'message 4', author: 'Bot'},
            {message: 'message 5', author: 'Bot'},
            {message: 'message 6', author: 'Bot'},
            {message: 'message 7', author: 'Bot'},
            {message: 'message 8', author: 'Bot'},
            {message: 'message 9', author: 'Bot'}
        ],
        chats: {
            0: {
                name: 'Chat 1',
                messages: [0, 1]
            },
            1: {
                name: 'Chat 2',
                messages: [2, 3]
            },
            2: {
                name: 'Chat 3',
                messages: [4, 5]
            },
            3: {
                name: 'Chat 4',
                messages: [6, 7]
            },
            4: {
                name: 'Chat 5',
                messages: [8,9]
            }
        }
    }
    static propTypes = {
        chatId: PropTypes.number
    }
    static defaultProps = {
        chatId: 1
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.messages.length < this.state.messages.length && 
            this.state.messages[this.state.messages.length - 1].author === 'Me'){
                setTimeout(()=> {
                this.setState({
                    messages: [
                        ...this.state.messages,
                        {
                            message: 'I do not answer you. I am bot',
                            author: 'Bot'
                        }
                    ]
                })
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
        this.setState({messages: [...this.state.messages, {...objMsg, id: this.state.messages.length}]});
    }

    render() {
        return <>
            <h2>{this.state.chats[this.props.chatId].name}</h2>
            <MessageList messages={this.state.messages.filter((item, id) => this.state.chats[this.props.chatId].messages.includes(id))}/>
            <div className='textfield'>
                <SendMessage send={this.send}/>
            </div>
            </>
    }
}