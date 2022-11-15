
import React, { useState } from 'react'

import Form from "./Todo/Form/Form.js"
import List from "./Todo/List/List.js"
import "../App.css"

function ToDo() {

  const [subject, setSubject] = useState([]);
  return (
    <div className='todoapp'>
      <h1> todos</h1>
       
        <div>
            <Form subject={subject} setSubject={setSubject} /> 
        </div>
      
      
        <div>
        <List subject={subject} setSubject={setSubject}  />
        
        </div>
      
    </div>
  )
}

export default ToDo;
