import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Messages from './Pages/Messages'

export default class Router extends React.Component{

    render(){
        return (
            <Switch>
                <Route exact path='/' component={ Messages } />
                <Route path='/chat/:chatId' render={obj => <Messages chatId={Number(obj.match.params.chatId)}/>} />
                {/* <Route path="/chat/:chatId" render={obj => <Messages chatId={obj.match.params.chatId}/>}/> */}
            </Switch>
        )
    }
}