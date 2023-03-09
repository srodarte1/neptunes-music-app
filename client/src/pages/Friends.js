import React, { useState, useEffect } from 'react';

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('/friendships')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch friends: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setFriends(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Friends</h2>
      {friends.map(friend => (
        <div key={friend.id}>
          <img src={friend.avatar_url} alt={friend.name} />
          <span>{friend.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Friends;
