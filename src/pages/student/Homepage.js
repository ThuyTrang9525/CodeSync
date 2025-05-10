import { Component } from "react"
import { Link } from "react-router-dom"
import { Home, Target, Edit, Menu, Settings, HelpCircle, LogOut } from "lucide-react"
import "../../assets/css/homepage-student.css"
import Navbar from "../../components/Student/nav-bar"; 
import Header from "../../components/header"
import Footer from "../../components/footer"
class Homepage extends Component {
    render() {
        const courses = [
            { title: "IT English", teacher: "Doan Minh Hoang" },
            { title: "TOECT", teacher: "Doan Minh Hoang" },
            { title: "Communication", teacher: "Doan Minh Hoang" },
        ]
        return (
            <div>
                <Header />
                <Navbar />
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
                <Footer />
            </div>
        )
    }
}

export default Homepage

