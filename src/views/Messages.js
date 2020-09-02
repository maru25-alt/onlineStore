import React, { Component } from 'react'
import Chat from 'components/Dashboard/Chat'
export class Messages extends Component {
    render() {
        return (
            <div className="content chat-container">
               <h1 > Message Supplier</h1>
               <div className="container">
                   <Chat />
                    </div>
            </div>
        )
    }
}

export default Messages
