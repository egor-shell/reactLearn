import React from 'react'
import PropTypes from 'prop-types';

import style from '../styles/Message.js'

export default class Message extends React.Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    };

    render() {
        return <div className='message__item' style={{...style.message, alignSelf: this.props.author === 'Me' ? 'flex-end' : 'flex-start', justifySelf: 'flex-end'}}>
            <span className='message'>{this.props.message}</span>
            <span className='author message__item-author'>{this.props.author}</span>
        </div>;
    }
}