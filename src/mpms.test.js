const minimalProjectManagementSystem = require("./mpms");
const Project = require("./project");
const Employee = require("./employee");
const Task = require("./task");

let mpms = new minimalProjectManagementSystem();

test('Create employee without supervisor', () => {
    expect(mpms.newEmployee("ABC", "123", null)).toBeInstanceOf(Employee);
})

test('Create employee with supervisor', () => {
    let user1 = mpms.newEmployee("A", "B", null);
    expect(mpms.newEmployee("ABC", "123", user1)).toBeInstanceOf(Employee);
})

test('Supervisor string', () => {
    expect(mpms.newEmployee("ABC", "123", "null")).toBeUndefined();
})

test('Adding project to user', () => {
    let user1 = mpms.newEmployee("A", "B", null);
    let newProject1 = new Project("Project 1", 5, 15);
    expect(user1.assignProject(newProject1)).toEqual([{
        "endDate": 20,
        "name": "Project 1",
        "slackTime": 15,
        "startDate": 5,
        "tasks": []
    }]);
})

test('Delete project from user', () => {
    let user1 = mpms.newEmployee("A", "B", null);
    let newProject1 = new Project("Project 1", 5, 15);
    expect(user1.deleteProject(newProject1)).toStrictEqual([]);
})

test('Testing display tasks for project', () => {
    let user1 = mpms.newEmployee("A", "B", null);
    let newProject1 = new Project("Project 1", 5, 15);
    let newTask1 = new Task("Task 1", "This task is awesome", 1);
    newProject1.assignTask(newTask1);
    user1.assignProject(newProject1);
    expect(mpms.displayTasksForProject(newProject1)).toEqual([{
        "description": "This task is awesome",
        "duration": 1,
        "name": "Task 1",
    }]);
})

// Testing few mixed functions
test('Total days need for list of projects', () => {
    let testUser = mpms.newEmployee("ABC", "123", null);
    let newEmp1 = mpms.newEmployee("Turhan", "Huseynov", testUser);
    let newProject1 = new Project("Project 1", 5, 10);
    let newProject2 = new Project("Project 2", 10, 15);
    let newTask1 = new Task("Task 1", "This task is awesome", 5);
    let newTask2 = new Task("Task 2", "This task is also awesome", 15);
    let newTask3 = new Task("Task 3", "This task is super awesome", 10);
    let newTask4 = new Task("Task 4", "This task is insane", 20);
    newProject1.assignTask(newTask1);
    newProject1.assignTask(newTask2);
    newProject2.assignTask(newTask3);
    newProject2.assignTask(newTask4);
    newEmp1.assignProject(newProject1);
    newEmp1.assignProject(newProject2);
    mpms.updateDuration(newTask4, 0);
    expect(mpms.totalDaysNeeded([newProject1, newProject2])).toBe(55);
})