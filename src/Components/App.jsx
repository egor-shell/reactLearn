import React from 'react'

import Header from './Header.jsx';
import Router from './Router'

import { Box, Grid } from '@material-ui/core'

import '../styles/App.css'

export default class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log('render');

        return(
            <main>
                <Header name={'Профиль'} />
                <div className='main-container'>
                    <Box minHeight='100%' boxSizing='border-box' alignItems='stretch' display='flex'>
                        <Router />
                    </Box>
                </div>
            </main>
        )
    }
}