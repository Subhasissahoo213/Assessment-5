import React from 'react';
import UseStateDemo from './components/UseStateDemo'; // Import your component
import './App.css'; // Optional global styles

function App() {
  return (
    <div className="App">
      {/* You can add a Header or Navigation here if you like */}
      <header style={{ textAlign: 'center', padding: '20px' }}>
        <h1>React Hooks Learning</h1>
      </header>

      <main>
        {/* Rendering the Counter Component */}
        <UseStateDemo />
      </main>
    </div>
  );
}

export default App;