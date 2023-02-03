import './App.css';
import { useState } from 'react';

function App(e) {
  // hanlde Textbox value
  const [ input, setInput ] = useState( '' ); // empty string

  // prepare todos handler
  const [ todos, setTodos ] = useState( [] ); // empty array

  // handle submit click
  function addTodo(e) {
    const inputValue = document.querySelector('#input')
    if (inputValue.value === '') {
      return;
    }
    const item = {
      id: Math.floor( Math.random() * 1000 ),
      value: input,
      status: false
    }

    setTodos(oldTodos => [ ...oldTodos, item ]);
    console.log(todos);
  }

  // handle delete todo 
  function deleteTodo(id) {
    const newTodoList = todos.filter( todo => todo.id !== id );
    setTodos(newTodoList);
  }

  // mark todo as done
  function doneTodo(id) {
    const todoIndex = todos.findIndex( todo => todo.id == id );

    // todos[todoIndex].status = true
    const tmpTodos = [ ...todos ];
    tmpTodos[todoIndex].status = true;
    setTodos(tmpTodos);
    console.log(todos)
  } 

  return (
    <div className="App">
      <div className='form'>
        <input onChange={ e => setInput( e.target.value ) } value={ input }type="text" placeholder='Add Todo' id='input'/>
        <button onClick={ () => addTodo() } className="submit-btn">Submit</button>
      </div>
       <hr />
       <ul>
          { todos.map(todo => {
            return (
              <li key={ todo.id } style={ { textDecoration: todo.status ? 'line-through' : '' } }>
                <div className='value'>
                  { todo.value }
                </div>
                <div className='buttons'>
                  <button onClick={ () => deleteTodo(todo.id) }>❌</button>
                  <button onClick={ () => doneTodo(todo.id) }>✅</button>
                </div>
              </li>
            )
          }
          )}
       </ul>
    </div>
  );
};

export default App
