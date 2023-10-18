import React, {component} from 'react';

import { useState } from 'react';
import "../content/styles/Info.css";

const Function = () => {
    const [btnState, setBtnState]=useState(false);
  return (
    <div className='button'>
       <button onClick={()=>setBtnState(!btnState)}>click here for Function component</button>
   {
    btnState?<h1>This is Function component</h1>:null
   }
  
    </div>
  );
}

export default Function