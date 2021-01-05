import React from 'react'
import PropTypes from 'prop-types'

import MessageList from '../MessageList'

export default class Messages extends React.Component {
    static propTypes = {
        send: PropTypes.func.isRequired,
        chatId: PropTypes.number,
        messages: PropTypes.array
    }
    static defualtProps = {
        chatId: -1
    }

    render() {
        return <>
                <MessageList />
            </>
    }
}