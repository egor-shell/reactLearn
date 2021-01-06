  
import React from 'react';
import PropTypes from 'prop-types';

import Message from '../Components/Message';
import SendMessage from './SendMessage.jsx'

import '../styles/MessageList.css'

export default class MessageList extends React.Component {
    static propTypes = {
        messages: PropTypes.array
    };

    static defaultProps = {
        messages: []
    };

    render() {
        console.log(this.props.messages)

        return <>
            <div className='messages'>
            { this.props.messages.map(({message, author}, id) => <><Message message={message} author={author} key={message.id}/><br/></>) }
            </div>
        </>
    }
}