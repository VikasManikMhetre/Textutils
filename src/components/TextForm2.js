import React, { useState } from 'react'

export default function TextForm2(anythingProp) {

    const anything_handle =()=>{

        let newText=text2.toLowerCase();
        setText2(newText);
    }

    const anything2_OnChange=(event)=>{
        console.log("On Change");
        setText2(event.target.value);
    }

    const[text2,setText2]=useState("Enter your message here.")
  return (
    <>
        <div className="container">
            <h1>{anythingProp.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text2} onChange={anything2_OnChange} id="anything" rows="3"></textarea>
            </div>
            <button className="btn btn-info" onClick={anything_handle}>Convert To Lowercase</button>
        </div>

        <div className="container my-3">
        <h6>You Entered {text2.split(" ").length} words and {text2.length} charcaters</h6>
        <p>Avarage time needed to read: {text2.split(" ").length * 0.0042} Minutes</p>
        </div>
    </>

  )
}