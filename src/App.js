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
    if (t && d) {

      settodos([...todos, { title: t, desc: d }]);
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
        if (e.desc !== todo.desc) {
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
  let editit=(ele)=>{
    document.getElementById('inputtitle').value = ele.title;
    document.getElementById('inputdesc').value = ele.desc;
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
      


      

        <Routes>
          <Route path='/' element={
          <>
            <Header title="Todos List" searchbar={false} />
            <Addtodos addtodonow={addtodonow} />
            <Todos todos={todos} onDelete={onDelete} editit={editit}/>
            <Footer/>
          </>
          }>
          </Route>
          <Route path='/about' element={
            <>
            <Header title="Todos List" searchbar={false} />
            <About/>
            <Footer/>
            </>
          }>
          </Route>
        
        
        
        </Routes>

      

      
    </Router>



  );
}

export default App;
