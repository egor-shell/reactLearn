import React from 'react'
import PropTypes from 'prop-types';

import { Button, TextField } from '@material-ui/core'


export default class SendMessage extends React.Component {
    state = {
        message: ''
    };

    static propTypes = {
        send: PropTypes.func.isRequired
    }

    send = () => {
        this.props.send({message: this.state.message, author: 'Me'})
        this.setState({message: ''})
    }
    handleKeyPress = event => {
        if(event.key === 'Enter'){
            this.send()
        }
    }

    hangleChange = event => this.setState({message: event.target.value})

    render() {
        return <div className='messages__textfield'>
            <TextField
                value={this.state.message} 
                onChange={this.hangleChange} 
                name={'message'}
                fullWidth={true}
                multiline={true}
                onKeyPress={this.handleKeyPress}
                className={'textfield'}
            />
            <Button variant="outlined" onClick={this.send}>Send</Button>
            </div>
            
    }
}