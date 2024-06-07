import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpclick = () => {
        console.log("Uppercase is run")
        setText(text.toUpperCase())
        props.showAlert(" Convert text is Uppercase","success")
        
        if(text===""){
            props.showAlert(" Enter the text ","danger")
          }
    }

    const handleLOclick = () =>{
        console.log("Lowercasre is run")
        setText(text.toLowerCase())
        props.showAlert(" Convert text is Lowercase ","success")
          
        if(text===""){
            props.showAlert(" Enter the text ","danger")
          }

    }
    
    const titleCase = () => {
        console.log("Title text is run")
        setText(text.charAt(0).toUpperCase() + text.substr(1).toLowerCase())
        props.showAlert(" Convert text is TitleCase ","success")


        if(text===""){
            props.showAlert(" Enter the text ","danger")
          }

    }

    const copyText = () => {
        let copy = document.getElementById("myBox");
        copy.select()
        navigator.clipboard.writeText(copy.value)
        props.showAlert(" Copi to clipbord ","success")
          
        if(text===""){
            props.showAlert(" Enter the text ","danger")
          }

    }

    const extraSpace = () => {
        let rSpace = text.split(/[ ]+/)
        setText(rSpace.join(" "))
        props.showAlert(" Remove Extra space ","success")
          
        if(text===""){
            props.showAlert(" Enter the text ","danger")
          }

    }

    const clearText = () => {
        console.log("Clear text is run")
        let clear = "";
        setText(clear)
        props.showAlert(" Clear Text area","success")
          
        if(text===""){
            props.showAlert(" Enter the text ","danger")
          }

    }


    
    

    const handleOnchange = (event) =>{
        // console.log("handle On change")
        setText(event.target.value)
        }  
    
    const [text , setText] = useState("")

    return (
        <>
            <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.hadinng}</h1>
                <textarea className="form-control"  value={text} placeholder={"Enter the text here"} onChange={handleOnchange} id="myBox" rows="10"></textarea>
                <button type="button" disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleUpclick}>Alphabetical Text</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleLOclick}>Lowercase Text</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={titleCase}>Title Text</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={copyText}>Copy Text</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={extraSpace}>Remove Extra Space</button>
                <button type="button" disabled={text.length===0} className="btn btn-danger my-3 mx-1" onClick={clearText}>Clear Text</button>
            </div>
            <div className="container" style={{color:props.mode==='ligth'?'black':'white'}}>
                <h3>Your text Summary</h3>              
                <li><b>{0.0067 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </b>Minutes Read</li>
                <li><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> word </li>
                <li><b>{text.split('.').length - 1}</b> Sentence</li>
                <li><b>{text.length}</b> character</li>

               <h3 className="my-3">Preview</h3>
                <p>{text.length>0?text:"Nothing to Preview!!!"}</p>
            </div>

        </>
    )
}
