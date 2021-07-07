import React from 'react';
import Form from './form';
import Item from './item';

function List ({setTodoinput, setTodos, todoinput, todos}){
    return(
       <div className = "list">
           <ul>{
           todos.map((todo) => (<Item task = {todo.task}/>))
           }
           </ul>
       </div>
    );
}

export default List;
