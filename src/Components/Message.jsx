import React from 'react'
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    };

    render() {
        return <div>
            <div>{this.props.message}</div>
            <div>{this.props.author}</div>
        </div>;
    }
}