  
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

        return <>
            <div className='messages'>
                {this.props.messages.map(({message, author}, id) => <React.Fragment key={'message_' + id}><Message message={message} author={author} /><br/></React.Fragment>) }
            </div>
        </>
    }
}