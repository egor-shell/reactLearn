import React from 'react'
import PropTypes from 'prop-types'

export default class Header extends React.Component{
    static proptypes = {
        name: PropTypes.string.isRequired
    }

    render() {
        return (
            <header className='header'>
                <h1>
                    {this.props.name}
                </h1>
            </header>
        )
    }
}