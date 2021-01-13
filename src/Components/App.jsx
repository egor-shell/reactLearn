import React from 'react'

import Header from './Header.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList';
import SendMessage from './SendMessage';
import ChatList from './ChatList'

import { MuiThemeProvider } from '@material-ui/core';

import '../styles/App.css'

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
    };
    render() {
        console.log('render');
        return(
            <main>
                <Header name={'Чат'} />
                <div className='container_chat'>
                {/* <BrowserRouter>
                            <div className={'container_chat'}>
                                <ChatList chats={['Чат 1', 'Чат 2', 'Чат3']} />
                                <Messages />
                            </div>
                            <Switch>
                                <Route path='/' component={Messages}/>
                            </Switch>
                        </BrowserRouter> */}
                    <ChatList chats={['Чат 1', 'Чат 2', 'Чат3']} />
                    <div className={'main__view'}>
                        <MessageList messages={this.state.messages}/>
                        <div className='textfield'>
                            <SendMessage send={this.send}/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}