import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <Link to='/login'>Login</Link>

      <div className='App'>
        <Switch>
          <PrivateRoute exact path='/friends' component={FriendsList} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
