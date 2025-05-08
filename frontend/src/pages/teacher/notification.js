"use client"

import { useState } from "react"
import Header from '../../components/Teacher/Header';
import Navigation from '../../components/Teacher/Navigation';
// Sample notifications data
const notifications = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    class: "PNV26B",
    content: "I don't understand",
    time: "29/9/2023",
  },
  {
    id: 2,
    name: "Nguyễn Văn A",
    class: "PNV26B",
    content: "I don't understand",
    time: "29/9/2023",
  },
  {
    id: 3,
    name: "Nguyễn Văn A",
    class: "PNV26B",
    content: "I got it",
    time: "29/9/2023",
  },
  {
    id: 4,
    name: "Nguyễn Văn A",
    class: "PNV26B",
    content: "I got it",
    time: "29/9/2023",
  },
  {
    id: 5,
    name: "Nguyễn Văn A",
    class: "PNV26B",
    content: "I don't understand",
    time: "29/9/2023",
  },
  {
    id: 6,
    name: "Nguyễn Văn A",
    class: "PNV26B",
    content: "I got it",
    time: "29/9/2023",
  },
  {
    id: 7,
    name: "Nguyễn Văn A",
    class: "PNV26B",
    content: "I got it",
    time: "29/9/2023",
  },
  {
    id: 8,
    name: "Nguyễn Văn A",
    class: "PNV26B",
    content: "I don't understand",
    time: "29/9/2023",
  },
  {
    id: 9,
    name: "Nguyễn Văn A",
    class: "PNV26B",
    content: "I don't understand",
    time: "29/9/2023",
  },
]

export default function NotificationsTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const [date, setDate] = useState("2024/02/27")
  const [selectedClass, setSelectedClass] = useState("All")

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value)
  }

  return (
    <div className="bg-white">
      <Header />
      <Navigation />
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
        <h2 className="fs-4 fw-semibold mb-0">Recent announcements</h2>
        <div className="d-flex align-items-center gap-2">
          <select className="form-select" value={date} onChange={handleDateChange} style={{ width: "180px" }}>
            <option value="2024/02/27">2024/02/27</option>
            <option value="2024/02/26">2024/02/26</option>
            <option value="2024/02/25">2024/02/25</option>
          </select>

          <select className="form-select" value={selectedClass} onChange={handleClassChange} style={{ width: "120px" }}>
            <option value="All">All</option>
            <option value="PNV26B">PNV26B</option>
            <option value="PNV25A">PNV25A</option>
          </select>
        </div>
      </div>

      <div className="table-responsive border rounded">
        <table className="table table-hover mb-0">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Content</th>
              <th>Time</th>
              <th className="text-center" style={{ width: "100px" }}></th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification) => (
              <tr key={notification.id}>
                <td>{notification.name}</td>
                <td>
                  <span className="text-danger fw-medium">{notification.class}</span>
                </td>
                <td>{notification.content}</td>
                <td>{notification.time}</td>
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
