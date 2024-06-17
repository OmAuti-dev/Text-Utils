import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper case was clicked " +text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success")
    }
    
    const handleLoClick = ()=>{
        // console.log("Upper case was clicked " +text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success")
    }
    const handleExtraSpaces = ()=>{
      // console.log("Upper case was clicked " +text);
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces are removed!","success")
      
  }
    const handleClearText = ()=>{
        // console.log("Upper case was clicked " +text);
        let newText = ''
        setText(newText);
        props.showAlert("Text has been cleared!","success")
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
          style={{backgroundColor:props.mode==='light'?'white':'grey',
          color: props.mode==='dark'?'white':'#2b2c2d'}}
          rows="8"
        ></textarea>
      </div>
      <div className="mb-4">
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Inverse Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      
    </div>
    <div className="container">
        <h2>Your Text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </div>
    
  );
}
