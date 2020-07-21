import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Link to='/login'>Login</Link>

      <div className='App'>
        <Route exact path='/login' component={Login} />
      </div>
    </Router>
  );
}

export default App;
