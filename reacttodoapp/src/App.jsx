import { useState } from "react";
import './App.css';

function App() {
  const [ toDo, setToDo ] = useState(''); 
  const [ toDos, setToDos ] = useState([]); 

  const onChange = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if(toDo === '') {
      return;
    }
    setToDos((currentArray) => [ toDo , ...currentArray]); 
    setToDo(''); 
  }

  return (
    <div>
      <h1>My To Dos</h1>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          onChange={onChange}
          value={toDo}
          placeholder="Type Your To Do 💻"/>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default App