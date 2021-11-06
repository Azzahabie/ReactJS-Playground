import React, { useEffect } from "react";
import {
  Homepage
} from "./components";
import {
  GlobalStyle,
  GlobalCenteredDiv,
  GlobalMainContainer,
} from "./globalStyles";

function App() {
  
  useEffect(() => {    
    document.body.style.margin = 0
    document.body.style.padding = 0
   });

  return (
    <Homepage>
      
    </Homepage>
  );
}

export default App;
