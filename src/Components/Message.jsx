import React from 'react'
import PropTypes from 'prop-types';

import style from '../styles/Message.js'

export default class Message extends React.Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    }

    render() {
        return (
            <div style={{...style.message, alignSelf: this.props.author === 'Me' ? 'flex-end' : 'flex-start'}}>
                <div className='message'>{this.props.message}</div>
                <div className='author'>{this.props.author}</div>
            </div>
        )
    }
}