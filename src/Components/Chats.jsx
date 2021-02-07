import React from 'react'

import {BrowserRouter} from 'react-router-dom'
import { Grid } from '@material-ui/core'

import ChatList from './ChatList'
import Router from './Router'

export default class Chats extends React.Component{

    render() {
        return (
        <BrowserRouter>
            <Grid container>
                <Grid container direction='column' item xs={4}>
                    <ChatList chats={['Чат 1', 'Чат 2', 'Чат 3', 'Чат 4', 'Чат 5']} />
                </Grid>
                <Grid item xs={8}>
                    <Router />
                </Grid>
            </Grid>
        </BrowserRouter>
        )
    }
}