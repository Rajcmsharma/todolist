import './App.css';
import Header from "./mycomponents/header";
import Todos from "./mycomponents/todos";
import Footer from "./mycomponents/footer";
import Addtodos from './mycomponents/addtodos';
import About from './mycomponents/about';
import { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Route,
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
    let i = (document.getElementById('importance').value);

    if (t && d) {

      settodos([...todos, { title: t, desc: d, imp: i }]);
      document.getElementById('inputtitle').value = "";
      document.getElementById('inputdesc').value = "";
      document.getElementById('importance').value = 1;
    }
    else {
      alert('field can`t be empty');
    }

  }

  // function to delete todos 
  function onDelete(todo) {
    settodos(
      todos.filter((e) => {
        if (e.title !== todo.title) {
          return true;
        }
        else {
          console.log(todo);
        }
      }
      )
    );

  }
  //function to edit todos
  let editit = (ele) => {
    document.getElementById('inputtitle').value = ele.title;
    document.getElementById('inputdesc').value = ele.desc;
    window.scrollTo(0, 0);
    onDelete(ele);
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

      <Header title="Day-Sync" searchbar={false} />



      <Routes>
        <Route path='/' element={
          <>

            <Addtodos addtodonow={addtodonow} />
            <Todos todos={todos} onDelete={onDelete} editit={editit} />

          </>
        }>
        </Route>
        <Route path='/about' element={
          <>

            <About />

          </>
        }>
        </Route>


      </Routes>


      <Footer />




    </Router>



  );
}

export default App;
