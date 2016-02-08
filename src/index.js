import React, { Component } from "react";
import ReactDom from "react-dom";
//require markdown package
import Marked from "marked";
//sass
require("../sass/styles.scss");
//components
import InputText from "./components/input-text";
import OutputText from "./components/output-text";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      //markdown: Marked('I am using __Markdown__')
      markdown: ''
    }
  }

  inputChange(markdown){
      this.setState({ markdown });
  }

  render(){
    return(
      <div className="component-container">
        <InputText onMarkdownChange={(markdown) => this.inputChange(markdown)} />
        <OutputText markdownText={this.state.markdown} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));
