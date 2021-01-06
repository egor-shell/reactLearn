import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import { List, ListItem, ListItemText} from '@material-ui/core'

export default class ChatList extends React.Component{
    static propTypes = {
        chats: PropTypes.array
    }
    
    render() {
        return <div className={'chatList'}>
            {/* <List component='nav' aria-label='main mailbox folders'>
                {this.props.chats.map((number, id) => 
                        <ListItem button>
                        <ListItemText primary={number} />
                        </ListItem>
                )}
            </List> */}
            <nav>
                <Link to='/chat/1'>Чат 1</Link>
                <Link to='/chat/2'>Чат 2</Link>
                <Link to='/chat/3'>Чат 3</Link>
                <Link to='/chat/4'>Чат 4</Link>
            </nav>
        </div>
    }
}