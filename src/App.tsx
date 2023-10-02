import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Pelele
        </a>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </header>
      {/* <body  className="@apply bg-[#a4c1fa] min-h-screen flex flex-col items-center justify-center text-[calc(10px_+_2vmin)] text-[white]"> */}
        <div className="App-body">
          <ProjectsPage />
        </div>
    </div>
  );
}

export default App;
