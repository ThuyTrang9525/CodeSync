import { Component } from "react"
import { Link } from "react-router-dom"
import { Home, Target, Edit, Menu, Settings, HelpCircle, LogOut } from "lucide-react"
import "../../assets/css/homepage-student.css"

class Homepage extends Component {
    render() {
        const courses = [
            { title: "IT English", teacher: "Doan Minh Hoang" },
            { title: "TOECT", teacher: "Doan Minh Hoang" },
            { title: "Communication", teacher: "Doan Minh Hoang" },
        ]

        return (
            <div>
                <div className="navbar">
                    <div className="nav-item active">
                        <div className="nav-icon">
                            <Home size={24} />
                        </div>
                        Class
                    </div>
                    <div className="nav-item">
                        <Link to="/student-goal" className="nav-link">
                            <div className="nav-icon">
                                <Target size={24} />
                            </div>
                            Set Goal Sem
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/student-management" className="nav-link">
                            <div className="nav-icon">
                                <Edit size={24} />
                            </div>
                            Learning Journal
                        </Link>
                    </div>
                    <div className="nav-item">
                        <div className="nav-icon">
                            <Menu size={24} />
                        </div>
                        Time table
                    </div>
                    <div className="nav-item">
                        <div className="nav-icon">
                            <Settings size={24} />
                        </div>
                        Setting
                    </div>
                    <div className="nav-item">
                        <div className="nav-icon">
                            <HelpCircle size={24} />
                        </div>
                        Support
                    </div>
                </div>

                <h2 className="welcome-text">Welcome hoang.doan26</h2>

                <div className="course-grid">
                    {courses.map((course, index) => (
                        <div className="course-card" key={index}>
                            <div className="course-header">
                                <strong>{course.title}</strong>
                                <div className="card-actions">
                                    <span className="exit-icon">
                                        <LogOut size={18} />
                                    </span>
                                </div>
                            </div>
                            <p>
                                <em>{course.teacher}</em>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Homepage

