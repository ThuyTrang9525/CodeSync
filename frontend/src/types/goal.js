export const GoalStatus = {
  NotStarted: "not_started",
  InProgress: "in_progress",
  Completed: "completed",
};

export class Goal {
  constructor(id, title, subject, semester, deadline, status, priority, details, category) {
    this.id = id;
    this.title = title;
    this.subject = subject;
    this.semester = semester;
    this.deadline = deadline;
    this.status = status;
    this.priority = priority;
    this.details = details;
    this.category = category;
  }
}