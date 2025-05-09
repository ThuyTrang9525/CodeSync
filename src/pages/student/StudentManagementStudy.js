import StudyPlanManagement from "../../components/Student/study-plan-management"
import "../../css/student-management-study.css";
import Header from "../../components/header"
import Footer from "../../components/footer"
export default function StudentManagementStudy() {
  return (
    <main className="container mx-auto p-4">
       <Header />
       <StudyPlanManagement />
        <Footer />
    </main>
  )
}
