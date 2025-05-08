"use client"

import { useState, useEffect } from "react"
import Header from '../../components/Teacher/Header';
import Navigation from '../../components/Teacher/Navigation';
// Sample student data
const generateStudents = (classId) => {
  return Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: "Nguyễn Văn A",
    email: "vinhtrananh@gmail.com",
    progress: i % 2 === 0 ? (i === 0 ? 0 : 100) : i === 3 ? 50 : i * 10,
  }))
}

export default function StudentTable({ classId }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [students, setStudents] = useState([])

  useEffect(() => {
    // Generate students data when component mounts or classId changes
    setStudents(generateStudents(classId))
  }, [classId])

  // Format class ID for display
  const formattedClassId = classId ? classId.toUpperCase().replace(/-/g, " ") : "PNV26B"

  return (
    <div className="bg-white">
      <Header />
      <Navigation />
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
        <div className="d-flex gap-3">
          <button
            className="px-3 py-2 fw-medium border-0 border-bottom bg-transparent"
            style={{ color: "#009688", borderColor: "#009688" }}
          >
            {formattedClassId}
          </button>
        </div>
        <div className="d-flex align-items-center gap-2">
          <div className="position-relative">
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="bi bi-search"></i>
              </span>
              <input type="text" className="form-control" placeholder="Search..." style={{ width: "180px" }} />
            </div>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              id="selectDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select
            </button>
            <ul className="dropdown-menu" aria-labelledby="selectDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  All
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Selected
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              id="missingDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Missing
            </button>
            <ul className="dropdown-menu" aria-labelledby="missingDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  Show All
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Show Missing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="table-responsive border rounded">
        <table className="table table-hover mb-0">
          <thead className="table-light">
            <tr>
              <th className="text-center" style={{ width: "60px" }}>
                STT
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Progress Week 1</th>
              <th className="text-center" style={{ width: "100px" }}></th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="text-center">{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <div className="progress flex-grow-1">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${student.progress}%`, backgroundColor: "#009688" }}
                        aria-valuenow={student.progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span className="text-nowrap small">{student.progress}%</span>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-center gap-2">
                    <button className="btn btn-sm btn-outline-secondary btn-icon">
                      <i className="bi bi-eye"></i>
                    </button>
                    <button className="btn btn-sm btn-outline-secondary btn-icon">
                      <i className="bi bi-chat-square-text"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex align-items-center justify-content-between mt-3">
        <div className="d-flex align-items-center gap-1">
          <button className="btn btn-primary btn-sm px-3">1</button>
          <button className="btn btn-outline-secondary btn-sm px-3">2</button>
          <button className="btn btn-outline-secondary btn-sm">Next</button>
        </div>
      </div>
    </div>
  )
}
