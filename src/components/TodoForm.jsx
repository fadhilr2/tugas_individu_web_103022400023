import { useState } from 'react'

function TodoForm({ onAddTodo }) {
  const [inputText, setInputText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputText.trim() === '') {
      return
    }

    onAddTodo(inputText.trim())
    setInputText('')
  }

  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Tulis tugas baru di sini..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit" className="btn btn-primary px-4 fw-semibold">
          Tambah
        </button>
      </div>
    </form>
  )
}

export default TodoForm
