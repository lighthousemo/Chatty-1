import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
      console.log("Rendering <MessageList/>")

      console.log(this.props.messages);
    return (
      <div id="message-list">
      {this.props.messages.map((message) => {
         return <Message
          key={message.id}
          username={message.username}
          content={message.content} />
        })
      }
      </div>
    )
  }
}
export default MessageList;



