function Header({ totalTasks, completedTasks }) {
  return (
    <header className="text-center mb-4">
      <h1 className="h3 fw-bold text-dark mb-1">To-Do List App</h1>
      <p className="text-muted small mb-3">Kelola tugas harian Anda dengan mudah</p>
      <div className="d-flex justify-content-center gap-2">
        <span className="badge bg-secondary-subtle text-secondary border px-3 py-2 rounded-pill">
          Total: <strong className="text-dark">{totalTasks}</strong> tugas
        </span>
        <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 rounded-pill">
          Selesai: <strong>{completedTasks}</strong>
        </span>
      </div>
    </header>
  )
}

export default Header
