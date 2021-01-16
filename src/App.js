import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    console.log("sjf")
    const apiUrl = "/api";
    fetch(apiUrl,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((response) => response.json())
      .then((data) => setCurrentTime(data.name));
  }, []);

  return (
    <div className="App">
      <header className="App-header">

        ... no changes in this part ...

        <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;