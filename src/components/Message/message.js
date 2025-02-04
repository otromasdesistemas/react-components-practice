import React, {Component} from 'react';

class Message extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: "Mensaje de Despedida"
        }
    }

    render() {
        return <p>{this.state.text}</p>
    }

}


export default Message;