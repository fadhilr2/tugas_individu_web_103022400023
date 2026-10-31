function TodoItem({ todo, onToggleTodo, onDeleteTodo }) {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center rounded-3 border ${
        todo.completed ? 'bg-light text-muted' : ''
      }`}
    >
      <div className="form-check d-flex align-items-center gap-2 m-0 flex-grow-1">
        <input
          id={`todo-${todo.id}`}
          type="checkbox"
          className="form-check-input mt-0"
          style={{ cursor: 'pointer' }}
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={`form-check-label mb-0 ms-1 flex-grow-1 ${
            todo.completed ? 'text-decoration-line-through text-secondary' : 'text-dark'
          }`}
          style={{ cursor: 'pointer', userSelect: 'none' }}
        >
          {todo.text}
        </label>
      </div>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm border-0 rounded-circle px-2 py-1 ms-2"
        onClick={() => onDeleteTodo(todo.id)}
        title="Hapus tugas"
      >
        ✕
      </button>
    </li>
  )
}

export default TodoItem
