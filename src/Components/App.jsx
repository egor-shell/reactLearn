import React from 'react'

import Header from './Header.jsx';
import Router from './Router'
import Message from './Message.jsx';
import MessageList from './MessageList';
import SendMessage from './SendMessage';
import ChatList from './ChatList'
import Messages from './Pages/Messages'

import { MuiThemeProvider } from '@material-ui/core';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom'

import '../styles/App.css'

export default class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log('render');

        return(
            <main>
                <Header name={'Чат'} />
                <BrowserRouter>
                    <ChatList chats={['Чат 1', 'Чат 2', 'Чат 3', 'Чат 4', 'Чат 5']} />
                    <Router />
                </BrowserRouter>
            </main>
        )
    }
}