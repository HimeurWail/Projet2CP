import React,{useState} from 'react'

import QuizFr from './QuizFr';
import QuizAr from './QuizAr';

function Quiz() {
  const [langue, setLangue] = useState("");

  return (    
     <>
{ (langue==="français")? <QuizFr /> : <QuizAr /> }
     </>
   
  )
    
  
}

export default Quiz