import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
  const initialFriend = {
    id: Date.now(),
    name: '',
    age: '',
    email: '',
  };

  const [friendsList, setFriendsList] = useState([]);
  const [newFriend, setNewFriend] = useState(initialFriend);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axiosWithAuth()
      .get('api/friends')
      .then((res) => {
        setFriendsList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange = (e) => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const addNewFriend = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post('api/friends', newFriend)
      .then((res) => {
        console.log(res);
        setFriendsList([...friendsList], res.data);
      });
    getData();
  };

  return (
    <div>
      <form onSubmit={addNewFriend}>
        <input
          className='input'
          type='text'
          name='name'
          placeholder='Name'
          onChange={onChange}
          value={newFriend.name}
        />
        <input
          className='input'
          type='number'
          name='age'
          placeholder='Age'
          onChange={onChange}
          value={newFriend.age}
        />
        <input
          className='input'
          type='email'
          name='email'
          placeholder='Email'
          onChange={onChange}
          value={newFriend.email}
        />
        <button>Add Friend</button>
      </form>

      {friendsList.map((friend) => (
        <div key={friend.id}>
          <h2>Name: {friend.name}</h2>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
