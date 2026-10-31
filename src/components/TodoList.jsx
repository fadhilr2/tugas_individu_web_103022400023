import TodoItem from './TodoItem'

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  if (todos.length === 0) {
    return (
      <div className="alert alert-light text-center text-muted border py-4 my-2 rounded-3">
        Belum ada tugas dalam kategori ini.
      </div>
    )
  }

  return (
    <ul className="list-group list-group-flush gap-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
