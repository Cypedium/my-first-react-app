import React, { Component } from "react";

export default class TextInput extends Component {
    state = 
    {
        userText: this.props.name //uses pros to reach name outside this file
    };

    changeText = event => 
    {
        const {name, value } = event.target;
        console.log(value);
        this.setState( { [name]: value } );            
    }

    render ()
    {
        return (
            <div>
                <h1>{this.state.userText}</h1>
                <input name="userText" value={this.state.userText} onChange={this.changeText} />
            </div>
        );
    }
}