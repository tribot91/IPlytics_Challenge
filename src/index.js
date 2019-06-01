const minimalProjectManagementSystem = require("./mpms");
const Project = require("./project");
const Task = require("./task");

let mpms = new minimalProjectManagementSystem();
let boss = mpms.newEmployee("ABC", "123", null);
let newEmp1 = mpms.newEmployee("Turhan", "Huseynov", boss);
let newProject1 = new Project("Project 1", 5, 15);
let newProject2 = new Project("Project 2", 15, 25);
// let newProject3 = new Project("Project 3", 25, 45);
let newTask1 = new Task("Task 1", "This task is awesome", 3);
let newTask2 = new Task("Task 2", "This task is also awesome", 4);
let newTask3 = new Task("Task 3", "This task is super awesome", 5);
let newTask4 = new Task("Task 4", "This task is insane", 10);
newProject1.assignTask(newTask1);
newProject1.assignTask(newTask2);
newProject2.assignTask(newTask3);
newProject2.assignTask(newTask4);
mpms.updateDuration(newTask2, 2);
newEmp1.assignProject(newProject1);
newEmp1.assignProject(newProject2);
// newEmp1.assignProject(newProject3);
mpms.deleteTask(newTask3);
mpms.displayTasksForProject(newProject1);
mpms.totalDaysNeeded([newProject1, newProject2])
mpms.displayEmployees();