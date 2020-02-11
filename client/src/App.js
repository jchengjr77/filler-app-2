import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  async function fetchData() {
    const res = await fetch("/users");
    res.json().then(res => setUsers(res));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
      <h1 className="mainHeader">Users</h1>
      <div className="user-div">
        {users.map(user => (
          <p key={user.id}>Hi, {user.username}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
