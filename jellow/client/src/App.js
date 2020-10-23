import React from 'react'
import {BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Login } from './features/login/Login'
import { Dashboard } from './features/dashboard/Dashboard'
import { Board } from './features/components/Board'
import './App.css';

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/login">
        <Login />
       </Route>
       {/* <Route path='/dashboard'>
         <Dashboard />
       </Route> */}
       <Route path="/board">
         <Board />
       </Route>
     </Switch>
   </Router>
  )
}

export default App;
