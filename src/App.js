import './App.css';
import Header from "./mycomponents/header";
import Todos from "./mycomponents/todos";
import Footer from "./mycomponents/footer";
import Addtodos from './mycomponents/addtodos';
import About from './mycomponents/about';
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {

  let initialtodo = [];
  if (localStorage.getItem('todos') !== null) {
    initialtodo = JSON.parse(localStorage.getItem('todos'));
  }
  // function to add todos 
  function addtodonow(e) {
    e.preventDefault();
    let t = (document.getElementById('inputtitle').value);
    let d = (document.getElementById('inputdesc').value);
    if (t && d) {

      settodos([...todos, { sno: todos.length, title: t, desc: d }]);
      document.getElementById('inputtitle').value = "";
      document.getElementById('inputdesc').value = "";

    }
    else {
      alert('field can`t be empty');
    }

  }

  // function to delete todos 
  function onDelete(todo) {
    settodos(
      todos.filter((e) => {
        if (e.sno !== todo.sno) {
          return true;
        }
        else {
          console.log(todo);
        }
      }
      )
    );

  }

  // declaring todos
  const [todos, settodos] = useState(initialtodo);
  // todos declaration ends
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
    , [todos]
  )


  return (
    <Router>
      


      <Header title="Todos List" searchbar={false} />

        <Routes>
          <Route path='/' element={
          <>
           
            <Addtodos addtodonow={addtodonow} />
            <Todos todos={todos} onDelete={onDelete} />
          </>
          }>
          </Route>
          <Route path='/about' element={
            <About/>
          }>
          </Route>
        
        
        
        </Routes>

      <Footer/>

      
    </Router>



  );
}

export default App;