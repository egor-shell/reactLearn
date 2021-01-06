import React from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

import Messages from './Pages/Messages'
import ChatList from './ChatList'
import Header from './Header'

export default class Chats extends React.Component{

    render() {
        return (
            <BrowserRouter>
                <nav>
                    <Link to='/chat/1'>Чат 1</Link>
                    <Link to='/chat/2'>Чат 2</Link>
                    <Link to='/chat/3'>Чат 3</Link>
                    <Link to='/header'>Header</Link>
                </nav>
                <Switch>
                    <Route
                        exact
                        path='/chat/:chatId'
                        render={obj => <Messages chatId={obj.match.params.chatId} />}
                    />
                    <Route
                        exact
                        path='/header'
                        render={() => <Header name={'Props'} />}
                    />
                </Switch>
            </BrowserRouter>
        )
    }
}