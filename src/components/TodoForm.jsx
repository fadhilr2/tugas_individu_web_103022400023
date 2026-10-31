import { useState } from 'react'

function TodoForm({ onAddTodo }) {
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (inputText.trim() === '') {
      return
    }

    setIsLoading(true)
    setStatus(null)
    setErrorMessage('')

    try {
      if (inputText.trim().toLowerCase() === 'error') {
        throw new Error('Gagal terhubung ke server.')
      }

      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: inputText.trim(),
          completed: false,
          userId: 1,
        }),
      })

      if (!response.ok) {
        throw new Error(`Server merespons status ${response.status}`)
      }

      const data = await response.json()

      onAddTodo(data.title || inputText.trim())
      setStatus('success')
      setInputText('')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message || 'Terjadi kesalahan saat mengirim tugas.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mb-3">
      {status === 'success' && (
        <div
          className="alert alert-success alert-dismissible fade show d-flex align-items-center justify-content-between py-2 px-3 small mb-2"
          role="alert"
        >
          <div>
            <strong>Berhasil!</strong> Tugas berhasil ditambahkan
          </div>
          <button
            type="button"
            className="btn-close"
            onClick={() => setStatus(null)}
            aria-label="Close"
          ></button>
        </div>
      )}

      {status === 'error' && (
        <div
          className="alert alert-danger alert-dismissible fade show d-flex align-items-center justify-content-between py-2 px-3 small mb-2"
          role="alert"
        >
          <div>
            <strong>Gagal!</strong> {errorMessage}
          </div>
          <button
            type="button"
            className="btn-close"
            onClick={() => setStatus(null)}
            aria-label="Close"
          ></button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Tulis tugas baru di sini..."
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value)
              if (status) setStatus(null)
            }}
            disabled={isLoading}
          />
          <button
            type="submit"
            className="btn btn-primary px-4 fw-semibold d-flex align-items-center gap-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span>Mengirim...</span>
              </>
            ) : (
              <span>Tambah</span>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default TodoForm
