// src/App.js
import React from 'react';
import News from './components/News';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <h1>News Application</h1>
      <News />
    </div>
  );
};

export default App;
