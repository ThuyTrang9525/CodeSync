export default function Header() {
    return (
      <header className="d-flex align-items-center justify-content-between p-3 border-bottom">
        <a href="/" className="text-decoration-none">
          <span className="fs-4 fw-bold" style={{ color: "#009688" }}>
            TrackSmart
          </span>
        </a>
        <div className="flex-grow-1 mx-4" style={{ maxWidth: "400px" }}>
          <input type="text" className="form-control" placeholder="Search..." />
        </div>
        <div className="d-flex align-items-center gap-3">
          <div className="position-relative">
            <i className="bi bi-bell fs-5 text-secondary"></i>
            <span className="position-absolute bg-danger text-white rounded-circle notification-badge">1</span>
          </div>
          <button className="btn btn-primary" style={{ backgroundcolor: "#009688" }}>Log out</button>
        </div>
      </header>
    )
  }
  