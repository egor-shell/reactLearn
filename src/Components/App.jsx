import React from 'react'

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

export default class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            text: 'Some text from state',
            timeout: null,
            messages: [],
            interval: null
        };
    }

    componentDidUpdate(){
        if(this.state.messages.length % 2 === 1){
            setTimeout(()=> {
                this.setState({
                    messages: [
                        ...this.state.messages,
                        {
                            message: 'I do not answer you. I am bot',
                            author: 'Bot'
                        }
                    ]
                })
            },
            2000
            )
        }
    }
    componentWillUnmount(){
        clearTimeout(this.state.timeout);
        this.setState({timeout: null});
    }

    send = objMsg => {
        this.setState({messages: [...this.state.messages, objMsg]});
    }
    render() {
        console.log('render');
        return(
                <main>
                    <BrowserRouter>
                        {/* <nav>
                            <Link to='/chat/1'>Чат 1</Link>
                            <Link to='/chat/2'>Чат 2</Link>
                            <Link to='/chat/3'>Чат 3</Link>
                            <Link to='/chat/4'>Чат 4</Link>
                        </nav> */}
                        <Chats />
                        {/* <Switch>
                            <Route exact path='/' component={Messages} />
                            <Route exact path='/chat/:chatId' render={obj => <Messages chatId={obj.match.params.chatId} />} />
                        </Switch> */}
                    </BrowserRouter>
                </main>
        )
    }
}