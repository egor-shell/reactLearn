import React from 'react'

import Message from './Message.jsx'

const App = (props) => {
    const click = event => {console.log('Hello World!')};

    return <main onClick={click}><Message text="Some text1"/></main>;
}

export default App