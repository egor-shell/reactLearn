import React from 'react'
import PropTypes from 'prop-types';

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

    hangleChange = event => this.setState({message: event.target.value})

    render() {
        return <>
            {/* <textarea
                       value={this.state.message}
                       onChange={this.handleChange} 
                    //    fullWidth={true}
                       multiline={true} 
                       name={'message'}
                    />
            <button onClick={this.send}>Send</button> */}
            <input type="text" value={this.state.message} onChange={this.hangleChange} name={'message'}></input>
            <button onClick={this.send}>Send</button>
            </>
            
    }
}