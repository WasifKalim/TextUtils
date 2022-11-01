import React, {useState} from 'react'

// Hooks is generally used to use features of class use introducing a class
// evets, state and set state

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked", + text);
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleLoClick = () => {
    // console.log("Uppercase was clicked", + text);
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }

  const handleClearClick = (event) => {
    // console.log("On Alter");
    let newText= "";
    setText(newText);
    props.showAlert("Cleared text!", "success");
  }

  const handleCopy = (event) => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  }

  const handleExtraSpace = (event) => {
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

  // use google
  const [text, setText] = useState('');
  // text = "new text" -- Wrong way to change the text
  // setText("Wasif khan"); -- Correct way to change the state
  return (
    <>
    <div className='container' style= {{color: props.mode==='dark'? 'white ':'#071548'}}> {/* first curly brace for javaScript and Second one is for Obect in JavaScript */}
      <h1 >{props.heading}</h1>
      <div className="mb-3">
          {/* <label form="myBox" className="form-label"></label> */}
          <textarea className="form-control" value = {text} onChange={handleOnChange} style= {{backgroundColor: 'dark'? 'grey':'white', color: props.mode==='dark'? 'white ':'#071548'}} id="myBox" rows="6"></textarea>
      </div>
      <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
      <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
      <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>
      <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
      <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Handle Space</button>
    </div>
    <div className="container my-3" onChange={handleOnChange} style= {{color: props.mode==='dark'? 'white ':'#071548'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text: "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
} 