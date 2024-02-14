import React, { Component } from 'react'

class Message extends Component {
    constructor() {
      super()
    
      this.state = {
         message : "welcome visitor"
      }
    }
    changeMessage(){
        this.setState({
            message: " Thank you For subscribing "
        })
    }
  render() {
    return (
      <div><center><h1>{this.state.message}</h1>
      <button onClick={()=>this.changeMessage()}>Subscribe</button>
      </center>
      </div>
    )
  }
}

export default Message
