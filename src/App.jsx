import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
import AddTodo from './Components/Addtodo';
import TodoList from './Components/TodoList';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl mb-4">Todo App</h1>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <AddTodo />
                <TodoList />
              </>
            } />
            <Route path="/watchlist" element={<div>Watchlist</div>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
