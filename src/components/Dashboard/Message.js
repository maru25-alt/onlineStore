import React from 'react'
import classnames from 'classnames'
import moment from 'moment'

export default function Message({send, message}) {
   
    return (
        <div>
             <div className="message clearfix">
               <p className={classnames('message-text', {'send-message' :send, "receive-message":!send }) }>{message.message} &nbsp;
               <span>{new Date(message.createdAt?.toDate()).toUTCString()} </span>
               </p> 
        </div>
        </div>
    )
}
