import React, { useState } from 'react';

const TextForm = (props) => {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.alertFun("Converted to Uppercase!", "success");
    }
    const handleLoClick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.alertFun("Converted to Lowercase!", "success");
    }
    const handleClrClick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = ("");
        setText(newText);
        props.alertFun("Text has been Cleared", "success");
    }
    const handleCopyClick = () => {
        let copytext = document.getElementById("mybox");
        copytext.select();
        navigator.clipboard.writeText(copytext.value)
            .then(() => {
                // Optional: Display a success message
                console.log("Text copied to clipboard");
            })
            .catch(err => {
                // Optional: Handle errors
                console.error("Failed to copy text: ", err);
            });
        props.alertFun("Text Copied!", "success");
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3" >
                    <textarea className={'form-control '}  onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#10499d', color: props.mode==='light'?'black':'white'}} value={text} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClrClick} >Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick} >Copy Text</button>

            </div>
            <div className='mx-3 mt-3' style={{color: props.mode==='light'?'black':'white'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Character</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Please enter text for preview....'}</p>

            </div>

        </>
    );
}


export default TextForm;