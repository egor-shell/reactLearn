import React from 'react'
import { MuiThemeProvider } from '@material-ui/core';

import '../styles/App.css';

import MessageList from './MessageList.jsx';
import Header from './Header.jsx';
import ChatList from './ChatList.jsx';

export default class Layout extends React.Component{
    
    render () {        
        return (
            <MuiThemeProvider>
                    <main className={'main'}>
                        <Header name={'Чат'} />
                        <div className={'container_chat'}>
                            <ChatList chats={['Чат 1', 'Чат 2', 'Чат3']} />
                            <MessageList />
                        </div>   
                    </main>
            </MuiThemeProvider>
        )
    }
}