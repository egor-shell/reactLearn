import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Chats from './Chats'

import Messages from './Pages/Messages'
import Profile from './Pages/Profile'

export default class Router extends React.Component{

    render(){
        return (
            <Switch>
                <Route exact path='/' component={ Messages } />
                <Route path='/chat/:chatId' render={obj => <Messages chatId={Number(obj.match.params.chatId)}/>} />
                <Route exact path='/profile' component={ Profile } />
            </Switch>
        )
    }
}