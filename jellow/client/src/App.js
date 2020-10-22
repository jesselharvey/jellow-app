import React from 'react'
import {BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Login } from './features/login/Login'
// import './App.css';

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/login">
        <Login />
       </Route>
     </Switch>
   </Router>
  )
}

export default App;
