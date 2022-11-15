import React, { useState } from 'react'
import "./List.css";


function List({subject, setSubject} ) {


    const completeToDo = (id) => {
        setSubject((subject) =>
          subject.map((item) =>
            item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
          )
        );
      };

      const deleteToDo = (id) => {
        setSubject ((subject) => subject.filter((item) => item.id !== id));
      };


    const [all, setAll] = useState("");

    const showActive = (e) => {
        setAll("1");
    }
    

    const showAll = () => {
        setAll("0");
    }

    const showCompleted = () => {
        setAll("2");
    }


  return (
    <section className='main'>
      
        <input className='toggle-all' type="checkbox"></input>
        <label htmlFor='toggle-all'>Mark all as complete</label>

        <ul className='todo-list'>
            {all === "1" ? subject.map((item)=> item)
            .filter((item)=> item.isCompleted === false).map((item)=> (
                <li className='view' key={item.id}>
                    <div className='view'>
                        <input 
                        name="checkbox"
                        className='toggle'
                        value={item.isCompleted}
                        type="checkbox"
                        onChange={() => completeToDo(item.id)}
                        id={item.id}
                        />
                        <label htmlFor={item.id}
                        className={`${item.isCompleted && "checked-item"}`}>
                        
                        {item.form.text}
                        </label>

                        <button
                        className='destroy'
                        onClick={() => {deleteToDo(item.id)}}
                        >
                        </button>
                    </div>
                </li>
            ))
        : all === "2"
        ? subject.map((item)=> item).filter((item) => item.isCompleted === true)
        .map((item) => (
            <li className='view' key={item.id}>
                <div className='view'>
                <input 
                        name="checkbox"
                        className='toggle'
                        value={item.isCompleted}
                        type="checkbox"
                        onChange={() => completeToDo(item.id)}
                        id={item.id}
                        />
                        <label htmlFor={item.id}
                        className={`${item.isCompleted && "checked-item"}`}>
                        
                        {item.form.text}
                        </label>

                        <button
                        className='destroy'
                        onClick={() => {deleteToDo(item.id)}}
                        />
                </div>
            </li>
        ))
        : subject.map((item) => (
            <li className="view" key={item.id}>
                <div className="view">
                  <input
                    name="checkbox"
                    className="toggle"
                    type="checkbox"
                    value={item.isCompleted}
                    onChange={() => completeToDo(item.id)}
                    id={item.id}
                  />
                  <label
                    htmlFor={item.id}
                    className={`${item.isCompleted && "checked-item"}`}
                  >
                    {item.form.text}
                  </label>
                  <button
                    className="destroy"
                    onClick={() => {
                      deleteToDo(item.id);
                    }}
                  ></button>
                </div>
              </li>
            ))}
            
        </ul>

        <footer className='footer'>
            <span className='todo-count'>
                <strong>
                    {
                        subject.map((item) => item.isCompleted)
                        .filter((value) => value === false ).length
                    } {""}
                </strong>
                items left
            </span>
            <ul className="filters">
                <li onClick={() => {
                    showAll();
                }}>
                    <a href="#/" className="selected"> All </a>
                    
                </li>

                <li onClick={(e) => {
                    showActive(e);
                }}>
                     <a href="#/"> Active </a>
                </li>

                <li onClick={() => {
                    showCompleted();
                }}
                >
                     <a href="#/"> Completed </a>
                </li>
            </ul>

           
        </footer>

    </section>
  );
}
export default List;
