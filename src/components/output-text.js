import React from "react";

const OutputText = (props) => {
    return(
        <div className = "box">
            <div className="output-text">
              {props.markdownText}
            </div>
        </div>
    );
}

export default OutputText;
