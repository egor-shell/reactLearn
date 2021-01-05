import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, ListItemText} from '@material-ui/core'

export default class ChatList extends React.Component{
    static propTypes = {
        chats: PropTypes.array
    }
    
    render() {
        return <div className={'chatList'}>
            <List component='nav' aria-label='main mailbox folders'>
                {this.props.chats.map((number, id) => 
                    <ListItem button>
                     <ListItemText primary={number} />
                    </ListItem>
                )}
            </List>
        </div>
    }
}