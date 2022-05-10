import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=(e) =>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
    }

    const handleCopyClick = () =>{
      var text = document.getElementById('myBox')
      text.select();
      navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () =>{
    
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
}

    const handleChange = (e) =>{
        setText(e.target.value)
    }
    const [text,setText] = useState("")
  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'#042743':'white'}}>
    <h1>{props.Heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor: props.mode==='light'?'white':'grey',
color: props.mode==='light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
</div>
<div className='buttons'>
<button className='btn btn-primary mx-1 my-2' onClick={handleUpClick}>Convert To Uppercase</button>
<button className='btn btn-primary mx-1 my-2' onClick={handleLowClick}>Convert To Lowercase</button>
<button className='btn btn-primary mx-1 my-2' onClick={handleClearClick}>Clear Text</button>
<button className='btn btn-primary mx-1 my-2' onClick={handleCopyClick}>Copy Text</button>
<button className='btn btn-primary mx-1 my-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>
</div>
<div className='container my-3' style={{color: props.mode==='light'?'#042743':'white'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} Words and {text.length} Characters</p>
    <p>{0.08*text.split(" ").length} Minutes Read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter Something in the textbox above to preview here"}</p>
</div>
    </>
  )
}
