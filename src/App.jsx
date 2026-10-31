import { useState } from 'react'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Belajar konsep dasar Component & Props di React', completed: true },
    { id: 2, text: 'Membuat To-Do List dengan 5 komponen terpisah', completed: false },
    { id: 3, text: 'Mengerjakan tugas web praktikum modul 7', completed: false },
  ])

  const [filter, setFilter] = useState('all')

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const handleDeleteTodo = (id) => {
    const remainingTodos = todos.filter((todo) => todo.id !== id)
    setTodos(remainingTodos)
  }

  const handleClearCompleted = () => {
    const activeTodos = todos.filter((todo) => !todo.completed)
    setTodos(activeTodos)
  }

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.filter((todo) => todo.completed).length

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-9 col-lg-7">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <Header totalTasks={todos.length} completedTasks={completedCount} />
              <TodoForm onAddTodo={handleAddTodo} />
              <TodoFooter
                filter={filter}
                onFilterChange={setFilter}
                activeCount={activeCount}
                completedCount={completedCount}
                onClearCompleted={handleClearCompleted}
              />
              <TodoList
                todos={filteredTodos}
                onToggleTodo={handleToggleTodo}
                onDeleteTodo={handleDeleteTodo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
