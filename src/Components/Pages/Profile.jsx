import React from 'react'

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
    }
    getRandom(length) {
        return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
        
    }
    
    render() {
        return <div>
            <div className='photo-profile'></div>
            <span>User {this.getRandom(6)}</span>
        </div>
    }
}