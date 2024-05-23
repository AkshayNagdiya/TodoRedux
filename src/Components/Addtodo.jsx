import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Slice/TodoSlice';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo..."
        className="p-2 border rounded mr-2"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
