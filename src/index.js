import React, { Component } from "react";
import ReactDom from "react-dom";
//require markdown package
import Marked from "marked";
//sass
require("../sass/styles.scss");

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      markdown: Marked('I am using __Markdown__')
    }
  }
  render(){
    return(
      <div>
        {this.state.markdown}
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));
