import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, ListItemText} from '@material-ui/core'
import { Link } from 'react-router-dom'

export default class ChatList extends React.Component{
    static propTypes = {
        chats: PropTypes.array
    }
    
    render() {
        return <div className={'chatList'}>
            <List component='nav' aria-label='main mailbox folders'>
                {this.props.chats.map((number, id) => 
                    <Link to={'/chat/' + id} key={id}>
                        <ListItem button>
                            <ListItemText primary={number}/>
                        </ListItem>
                    </Link>
                )}
            </List>
        </div>
    }
}