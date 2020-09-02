import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Message from './Message'
import {isEmpty} from 'lodash'
import { db, timestamp} from 'store/firebase/config';
import { LoginString } from 'store/firebase/LoginString';

export class Chat extends Component {
    constructor() {
        super();
        this.state = {
            message : "",
            messages: []
        };
        this.userId = localStorage.getItem(LoginString.ID);
        this.docId =  localStorage.getItem(LoginString.FirebaseDocumentId);
        this.adminId = localStorage.getItem(LoginString.AdminDocID);

      }
   
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    

    handleSubmit = (e) => {
        e.preventDefault();
        if(!isEmpty(this.state.message) ){
           const createAt = timestamp()
           db.collection('user').doc(this.docId).collection('messages').add({
              message: this.state.message,
              createdAt: createAt,
              senderID: this.userId
           }).then(() => {
                db.collection('user').doc(this.adminId).collection('messages').add({
                    message: this.state.message,
                    createdAt: createAt,
                    senderID: this.userId
                })
                this.setState({
                    message: ""
                })
                console.log('message send')


           }).catch(err => {
               console.log(err)
           })
        } 
    }
    
    componentDidMount(){
        db.collection('user')
        .doc(this.docId)
        .collection('messages')
        .orderBy('createdAt', 'asc')
        .onSnapshot(snap => {
            let messages = [];
            snap.forEach(doc => {
                messages.push({...doc.data(), id: doc.id})
            })
            this.setState({
                messages
            })
        })
        
    }

    render() {
        const {messages} = this.state
        console.log(messages)
        return (
            <div className="chat card">
                <div className="chat-header row">
                  <Avatar className="avatar">R</Avatar>
                  <div className="chat-header-text">
                      <p>Rudo Mapfumba <span>Last Seen....</span></p>
                  </div>
              </div>
              <div className="chat-message-container">
                  {messages && messages.map(e => {
                      return (
                        <Message key={e.id} message={e}  send={e.senderID === this.userId? true : false}/>
                      )
                  })}
                 
               </div>
               <div className="chat-footer">
                   <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <input id="message" value={this.state.message} onChange={this.handleChange} type="text" className="form-control input-sm" placeholder="Type your message here..." />
                        <span className="input-group-btn">
                            <button className="btn btn-info btn-sm" id="btn-chat">Send</button>
                        </span>
                    </div>
                  </form>
                </div>
            </div>
        )
    }
}

export default Chat
