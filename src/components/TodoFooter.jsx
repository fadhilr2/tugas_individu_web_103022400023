function TodoFooter({
  filter,
  onFilterChange,
  activeCount,
  completedCount,
  onClearCompleted,
}) {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 py-2 mb-3 border-top border-bottom small text-muted">
      <span>
        <strong>{activeCount}</strong> tugas tersisa
      </span>

      <div className="btn-group btn-group-sm" role="group" aria-label="Filter tugas">
        <button
          type="button"
          className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-secondary'}`}
          onClick={() => onFilterChange('all')}
        >
          Semua
        </button>
        <button
          type="button"
          className={`btn ${filter === 'active' ? 'btn-primary' : 'btn-outline-secondary'}`}
          onClick={() => onFilterChange('active')}
        >
          Aktif
        </button>
        <button
          type="button"
          className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-outline-secondary'}`}
          onClick={() => onFilterChange('completed')}
        >
          Selesai
        </button>
      </div>

      {completedCount > 0 && (
        <button
          type="button"
          className="btn btn-link btn-sm text-danger text-decoration-none p-0"
          onClick={onClearCompleted}
        >
          Hapus Selesai
        </button>
      )}
    </div>
  )
}

export default TodoFooter
