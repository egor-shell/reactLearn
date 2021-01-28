  
import React from 'react';
import PropTypes from 'prop-types';

import Message from '../Components/Message';

export default class MessageList extends React.Component {
    static propTypes = {
        messages: PropTypes.array
    };

    static defaultProps = {
        messages: []
    };

    render() {

        return <div className='messages__view-outer'>
                {this.props.messages.map(({message, author}, id) => <React.Fragment key={'message_' + id}><Message message={message} author={author} /><br/></React.Fragment>) }
            </div>
    }
}