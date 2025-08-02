import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Todoslist(props) {
  const [todos, setTodos] = useState(props.todos || []);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');

  // Add Todo
  const handleAdd = () => {
    if (newTitle.trim() === '' || newDesc.trim() === '') return;
    const newTodo = {
      sno: todos.length + 1,
      title: newTitle,
      decc: newDesc
    };
    setTodos([...todos, newTodo]);
    setNewTitle('');
    setNewDesc('');
  };

  // Delete Todo
  const handleDelete = (sno) => {
    const updatedTodos = todos.filter(todo => todo.sno !== sno);
    setTodos(updatedTodos);
  };

  return (
    <div className="container my-4">
      <h3 className="mb-3">📝 My Todos List</h3>

      {/* Add New Todo */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Enter description"
          rows="2"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          ➕ Add Todo
        </button>
      </div>

      {/* List Display */}
      {todos.length === 0 ? (
        <div className="alert alert-info">No todos to display</div>
      ) : (
        todos.map((todo) => (
          <div key={todo.sno} className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{todo.title}</h5>
              <p className="card-text">{todo.decc}</p>
              <button className="btn btn-sm btn-danger" onClick={() => handleDelete(todo.sno)}>
                🗑️ Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
