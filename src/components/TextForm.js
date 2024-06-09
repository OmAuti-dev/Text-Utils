import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper case was clicked " +text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!")
    }
    const handleLoClick = ()=>{
        // console.log("Upper case was clicked " +text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!")
    }
    const handleClearText = ()=>{
        // console.log("Upper case was clicked " +text);
        let newText = ''
        setText(newText);
        props.showAlert("Text has been cleared!")
    }
    const handleReverseClick = () => {
      let newText = text.split("").reverse().join("");
      setText(newText);
      props.showAlert("Converted to reversed string!","success")
  };
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

  const [text, setText] = useState("");
//   text = 'new text'; //wrong way to change the state
//   setText("new text"); //correct way to change the state
  return (
    <div style={{color:props.mode==='dark'?'white':'black'}}>
    <div className="container mt-4" >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='light'?'white':'grey'}}
          rows="8"
        ></textarea>
      </div>
      <div className="mb-4">
      <button className="btn btn-primary mx-1 " onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleReverseClick}>Inverse Text</button>
      </div>
      
    </div>
    <div className="container">
        <h2>Your Text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in textbox to preview it here"}</p>
    </div>
    </div>
    
  );
}
