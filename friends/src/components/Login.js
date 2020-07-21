import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
  const initialState = {
    username: 'tim',
    password: 'tim',
  };

  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState(initialState);

  const onChange = (e) => {
    setCredentials({ [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      axios.post('http://localhost:5000/api/login', credentials).then((res) => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/protected');
      });
    }, [1000]);
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          onChange={onChange}
          value={credentials.username}
          className='input'
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={onChange}
          value={credentials.password}
          className='input'
        />
        <button className='button'>
          {isLoading ? (
            <span>
              <img src='https://thumbs.gfycat.com/AgileChubbyGelada-size_restricted.gif'></img>
            </span>
          ) : (
            <span>Button</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
