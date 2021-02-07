  
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import Message from '../Components/Message';

const MessageList = ({chatMessages}) => {
    console.log(`MessageList mapStateToProps = ${chatMessages}`)
    return <div className='messages__view-outer'>
        {chatMessages.map(({message, author}, id) => <React.Fragment key={'message_' + id}><Message message={message} author={author} /><br/></React.Fragment>) }
    </div>
}

const mapStateToProps = state => {
    return {
        chatMessages: state.messages.messages
    }
}

// class MessageList extends React.Component {
//     static propTypes = {
//         messages: PropTypes.array
//     };

//     static defaultProps = {
//         messages: []
//     };

//     render() {
//         return <div className='messages__view-outer'>
//                 {chatMessages.map(({message, author}, id) => <React.Fragment key={'message_' + id}><Message message={message} author={author} /><br/></React.Fragment>) }
//             </div>
//     }
// }


export default connect(mapStateToProps, null)(MessageList)