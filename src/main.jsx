import { BrowserRouter as Router } from 'react-router-dom';
import './styles/app.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from './components/TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <TodoApp />
    </Router>
  </React.StrictMode>,
);
