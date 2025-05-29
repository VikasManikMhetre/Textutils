import { array } from "prop-types";
import { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked "+ text);
        let newText=text.toUpperCase();
        setText(newText);
    }

   const anything_handle =()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }


    const toSentenceCase = ()=>{
      let words=text.split(".");
      let sentance="";
      let temp;
      words.forEach(element => {
          let trimmed= element.trim();
          if (trimmed.length > 0) {
          temp=trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
          sentance=sentance.concat(temp +". ");
          }
      });
      setText(sentance.trim());
    }


    const toCapitalizedCase=()=>{
      let words=text.split(" ");
      let sentence="";
      
      words.forEach(element =>{
        let temp=element[0].toUpperCase()+ element.slice(1);
        sentence= sentence.concat(temp + " ");
      })
      setText(sentence.trim());
    }

    const toAlternatingCase=()=>{

      let lengthOfSentence=text.length;
      let sentence="";
      for(let i=0;i<lengthOfSentence;i++){
        if(i%2==0){
          let temp=text[i].toUpperCase();
          sentence=sentence.concat(temp);
        }
        else{

          let temp=text[i].toLowerCase();
          sentence=sentence.concat(temp);
        }
      }
      setText(sentence);
    }

    const toInverseCase=()=>{

      let lengthOfSentence=text.length;
      let sentence="";
      for(let i=0;i<lengthOfSentence;i++){
        if(i%2!=0){
          let temp=text[i].toUpperCase();
          sentence=sentence.concat(temp);
        }
        else{

          let temp=text[i].toLowerCase();
          sentence=sentence.concat(temp);
        }
      }
      setText(sentence);
    }
  
    const toTitleCase=()=>{
      let toMakeInputLowerCase=text.toLowerCase();
      let words=toMakeInputLowerCase.split(" ");
      let sentence="";
      words.forEach(element => {
        let word = element.trim();
        if (word.length === 0) return;
        if (articleCoordinatingConjunctionShortPreposition.includes(element)){
          let temp = element.toLowerCase();
          sentence = sentence.concat(temp + " ");
        }
        else {
          let temp=element[0].toUpperCase()+element.toLowerCase().slice(1);
          sentence= sentence.concat(temp + " "); 
        }
      });

      
      setText(sentence.trim());
      
    }

    let articleCoordinatingConjunctionShortPreposition=[
    'a','an','the','add','but','or','nor','for','so','yet','at','by','for',
    'in','of','on','to','up','with','as'
    ]

  const [btnForCopyText, setForCopyText] = useState("Copy Text");


  const toCopyText = () => {
    let toUnCopyText=""
    if (btnForCopyText=== "Copy Text"){
      navigator.clipboard.writeText(text)
      setForCopyText("Text Copied !");
    }
    else{
      navigator.clipboard.writeText(toUnCopyText)
      setForCopyText("Copy Text");
    }
  }

  const toRemoveExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const toClear=()=>{
      let clear=""
      setText(clear);
    }
    
    
   const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }


    const [text,setText]=useState("")

  return (

    <>

    <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-danger " onClick={handleUpClick}>Convert To Uppercase</button>
        
        <button className="btn btn-danger mx-2 my-2" onClick={anything_handle}>Convert To Lowercase</button>
        <button className="btn btn-danger mx-2 my-2" onClick={toSentenceCase}>Convert To Sentence Case</button>
        <button className="btn btn-danger mx-2 my-2" onClick={toCapitalizedCase}>Convert To Capitalized Case</button>
        <button className="btn btn-danger  my-2" onClick={toAlternatingCase}>Convert To Alternative Case</button>
        <button className="btn btn-danger mx-2 my-2" onClick={toInverseCase}>Convert To Inverse Case</button>
        <button className="btn btn-danger  my-2" onClick={toTitleCase}>Convert To Title Case</button>
        <button className="btn btn-danger  mx-2 my-2" onClick={toCopyText}>{btnForCopyText}</button>
        <button className="btn btn-danger  mx-2 my-2" onClick={toRemoveExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-danger mx-2 my-2" onClick={toClear}>Clear</button>
    </div>
    <div className="container my-3">
        <h3> Your text summary</h3>
        
        <h6>You Entered {text.split(" ").length} words and {text.length} characters.</h6>
        <p>Avarage time needed to read: {text.split(" ").length * 0.0042} Minute.</p>
    </div>
    <div className="container my-3">
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>

  )

}

