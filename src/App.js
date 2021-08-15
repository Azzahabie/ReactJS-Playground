import React,{useState} from 'react';
import {Jumbotron,ClosingJumbo} from './components'
import GlobalStyle from './globalStyles';

function App() {

  function slowPromise(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(200)
      }, 5000);
    })
  }

  const [spinner,setSpinner] = useState(false)
  const [closingSpinner,setClosingSpinner] = useState(false)
  const triggerSpinner = (input) => {
    if(input == "start"){
      setSpinner(true)
    }
    if(input == "end"){
      setSpinner(false);
      setClosingSpinner(true)
      setTimeout(() => {
        setClosingSpinner(false)
      }, 2000);
    }
  }

  return (
        <>
        <div id="hi">
          <button onClick={()=>{triggerSpinner("start")}}>Open</button>
          <button onClick={()=>{triggerSpinner("end")}}>Close</button>
          <h2>lorem ipsum lomaio adad asdasdjka fsdkdfgd </h2>
        </div>
        {spinner ? <Jumbotron></Jumbotron> : null} 
        {closingSpinner ? <ClosingJumbo></ClosingJumbo> : null} 
        <GlobalStyle/>
      </>
  );
  
}

export default App
