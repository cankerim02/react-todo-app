
import {useState, useEffect} from 'react';
import "../../../App.css";


const initialValue = {text : ""};

function Form( {subject, setSubject}) {

const [form, setForm] = useState (initialValue)

const onChangeHandler = (e) => {
    
    setForm({...form, [e.target.name]: e.target.value});
   
};

const onSubmit =  (e) => {
    
    e.preventDefault();

    if (form.text === ""){
        return false;
    }

    setSubject(
        [
        ...subject, { id: Math.random(), form: form, isCompleted: false}
        
        ]);
};

    useEffect(() => {
        setForm(initialValue);
    }, [subject])


  return (
    <div>
     
    <form onSubmit={onSubmit}> 

        <input 
        className="new-todo"
        placeholder='What needs to be done?'
        name={"text"}
        value= {form.text}
        autoFocus
        onChange={onChangeHandler}
        />

    </form>

    </div>
    
  );
}

export default Form;
