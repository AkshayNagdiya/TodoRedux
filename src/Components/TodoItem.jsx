import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../Slice/TodoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex items-center justify-between p-2 border-b">
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="p-1 bg-red-500 text-white rounded"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
