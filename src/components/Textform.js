import React,{useState} from 'react'
// So state variables can be changed by its corresponding function only. Changing it as a constant varibale is not allowed.
export default function Textform(props) {

    const [text, setText] = useState('');
    const hanldeUpClick= () =>{
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Successfully converted to Upper case","success")
    }
    //This event object is got when something is changed in the textarea.
    // event.target gives you the element that triggered the event.
    // So the value becomes the previous + the value entered in  the field.
    const handleOnChange = (event) =>{
        // console.log("Change it")
        setText(event.target.value)
        
    }

    const handleLowClick=()=>{
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Successfully converted to lower case","success")
    }
    const handleClearText=()=>{
        setText('')
        props.showAlert("Cleared text successfully.","success")
    }
    const handleCopyText=()=>{
        
        navigator.clipboard.writeText(text)
        props.showAlert("Text copied to Clipboard","success")
    }
    return (
    <>
        <div className='container' style={{color:(props.mode==='dark'|| props.mode==='green')?'white':'black'}}>
            <h2 className='mt-2'>{props.heading}</h2>
            <div className="mb-3">
                <label htmlFor="mytextBox" className="form-label">Enter your text here</label>
                {/* This onChange function will run if changed anything in the text box. This the event (that is text is being changed) */}
                {/* At the course of the event the value becomes the before text + the changed text. And it is then changed with setText in the function. */}
                <textarea className="form-control" onChange={handleOnChange} value={text} id="mytextbox" rows="8" style={{backgroundColor:(props.mode==='dark'||props.mode==='green')?'#253431':'white',color:(props.mode==='dark' || props.mode==='green')?'white':'black'}}></textarea>
            </div>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='green'? 'success':'info'} mx-3 my-1`} onClick={hanldeUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='green'? 'success':'info'} mx-3 my-1`} onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='green'? 'success':'info'} mx-3 my-1`} onClick={handleClearText}>Clear Text</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='green'? 'success':'info'} mx-3 my-1`} onClick={handleCopyText}>Copy Text</button>
        </div>
        <div className='container' style={{color:(props.mode==='dark'||props.mode==='green')?'white':'black'}}>
            <h1>Here's your text summary</h1>
            <h4>{text.length} characters and {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</h4>
            <p>Time required to read this text for an average person is {text.split(" ").filter((element)=>{return element.length!==0}).length*0.0032} mins</p>
        </div>

    </>
  )
}
