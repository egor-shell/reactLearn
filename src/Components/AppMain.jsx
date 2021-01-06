import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList';
import SendMessage from './SendMessage';
import ChatList from './ChatList'
import Messages from './Pages/Messages'

import { MuiThemeProvider } from '@material-ui/core';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

import '../styles/App.css'
import Chats from './Chats.jsx';

export default class AppMain extends React.Component {
    static PropTypes = {
        chatId: PropTypes.number
    }

    static defaultProps = {
        chatId: -1,
    }

    render() {
        return (
            <div className='App'>
                <Header chatId={this.props.chatId} />
            </div>
        )
    }
}