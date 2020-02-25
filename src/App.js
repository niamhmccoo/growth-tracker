import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Growth Tracker 🏋️‍♀️</h1>
      <section>
      <label for="feeling">How are you feeling?</label>
        <input type="range" id="feeling" name="feeling"
         min="0" max="10" />
      </section>
      <section>
      <label for="brainHurt">How much does your brain hurt right now?</label>
        <input type="range" id="brainHurt" name="brainHurt"
         min="0" max="10" />
      </section>
      <section>
        <h2>What did you do today?</h2>
        <ul>
        <li>
        <input type="checkbox" name="achievement1" />
        <label for="achievement1">Was totally bitchin at Javascript</label>
        </li>
        <li>
          <input type="checkbox" name="achievement2" />
          <label for="achievement2">Built a super cool amazing thing</label>
        </li>
        <li>
          <input type="checkbox" name="achievement3" />
          <label for="achievement3">Fixed the world's most evil bug</label>
        </li>
        <li>
          <input type="checkbox" name="achievement4" />
          <label for="achievement4">Hacked into the system's mainframe</label>
        </li>
        </ul>
      </section>
        <section>
          <input type="text" name="newOption" id="newOption"/>
          <button type="button"><label for="newOption">Add a new achievement</label></button>
        </section>
      </header>
    </div>
  );
}

export default App;
