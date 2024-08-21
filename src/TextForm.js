import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("upCase called");
        // let newText = text.toUpperCase();
        setText(text.toUpperCase());
        props.showAlert("success", "Converted to Uppercase!");
    }
    
    const handleLoClick = (event) => {
        // console.log("onChange called");
        setText(text.toLowerCase());
        props.showAlert("success", "Converted to Lowercase!");
    }

    const handleEmptyText = ()=> {
        setText("");
        props.showAlert("success", "Text Cleared!");
    }

    const copyText = () => {
        // let text = document.getElementById('myBox');
        navigator.clipboard.writeText(text);
        props.showAlert("success", "Text Copied!");
    }

    const handleSpaces = () => {
        let newText = text.split(/\s+/g)
        setText(newText.join(' '));
        props.showAlert("success", "Extra Spaces removed!");

    }

    const handleOnChange = (event) => {
        // console.log("onChange called");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here...");
    // let words = text.split(" ").length;

    // if(text===""){
    //     words=0;
    // }
    // if(text.endsWith(" ")){
    //     words = text.split(" ").length-1;
    // }
    // text = "asfdasf";  wrong way to change the state
    // setText("updated text"); correct way to change the state
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="form-group">
        <textarea className="form-control my-2" id="myBox" onChange={handleOnChange} rows="8" value={text} style={{backgroundColor: props.mode==='dark'?'#3f3e3e':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2"  onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2"  onClick={handleEmptyText}>Empty TextArea</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2"  onClick={copyText}>Copy to Clipboard</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2"  onClick={handleSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} Characters</p>
        <p>reading time: {0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} minutes</p>
        <h3>Text Preview:</h3>
        <p>{text.length>0?text:"Enter text to preview"}</p>
    </div>
    </>
  )
}
