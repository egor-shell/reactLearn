  
import React from 'react';
import PropTypes from 'prop-types';

import Message from '../Components/Message';
import SendMessage from './SendMessage.jsx'

import '../styles/MessageList.css'

export default class MessageList extends React.Component {
    constructor(props){
        super(props)

        this.state ={
            messages: [],
        }
    }
    static propTypes = {
        messages: PropTypes.array
    };

    static defaultProps = {
        messages: []
    };

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

    send = objMsg => {
        this.setState({
            messages: [...this.state.messages, objMsg]
        })
    }

    render() {
        const messages = this.state.messages.map(({message, author}, id) => <><Message message={message} author={author} key={`message_${id}`}/><br/></>) 

        return <div className={'message-list'}>
                <div className='messages'>
                    {messages}
                </div>
                <div className={'textfield'}>
                    <SendMessage send={this.send} />
                </div>
        </div>;
    }
}