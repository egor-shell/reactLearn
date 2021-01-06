import React from 'react'
import PropTypes from 'prop-types'

import MessageList from '../MessageList'
import SendMessage from '../SendMessage'

export default class Messages extends React.Component {
    state = {
        messages: [],
    }

    static proptypes = {
        chatId: PropTypes.number
    }

    static defaultProps = {
        chatId: -1
    }

    componentDidUpdate(){
        if(this.state.messages.length % 2 === 1){
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
        this.setState({messages: [...this.state.messages, objMsg]});
    }

    render() {
        return <>
            <h2>{this.props.chatId}</h2>
            <MessageList messages={this.state.messages}/>
            <SendMessage send={this.send}/>
        </>
    }
}