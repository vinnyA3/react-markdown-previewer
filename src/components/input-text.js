import React, { Component } from "react";

export default class InputText extends Component{
  constructor(props){
      super(props);
      this.state = {
        markdown: ''
      }
  }

  render(){
    return(
      <div className="box">
      <h1>Input</h1>
        <textarea
        value = {this.state.input}
        className="input-text"
        onChange = { (event) => this.onInputChange(event.target.value) }
        >

        </textarea>
      </div>
    );
  }


  onInputChange(markdown){
    this.setState({ markdown });
    this.props.onMarkdownChange(markdown);
  }
}
