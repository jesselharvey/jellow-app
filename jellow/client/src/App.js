import React from 'react'
import {BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Login } from './features/login/Login'
// import { Dashboard } from './features/dashboard/Dashboard'
import { Board } from './features/components/Board'
// import { Test } from './features/test/Test'
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
       {/* <Route path="/test">
         <Test />
       </Route> */}
     </Switch>
   </Router>
  )
}

export default App;
