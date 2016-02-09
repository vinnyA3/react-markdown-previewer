import React from "react";

const OutputText = (props) => {
    return(
        <div className = "box">
            <h1>Output</h1>
            <div className="output-text">
              {props.markdownText}
            </div>
        </div>
    );
}

export default OutputText;
