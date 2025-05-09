// filepath: d:\CodeSync\frontend\src\pages\student\StudentGoal.js
"use client"

import React from "react"
import GoalTracker from "../../components/Student/goal-tracker"
import "../../css/student-goal.css";
import Header from "../../components/header"
import Footer from "../../components/footer"
export default function StudentGoal() {
  return (
    <div>
      <Header />
      <GoalTracker />
      <Footer />
    </div>
    
  )
}