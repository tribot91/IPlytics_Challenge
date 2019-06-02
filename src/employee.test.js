const minimalProjectManagementSystem = require("./mpms");
const Employee = require("./employee");
const Project = require("./project");

let mpms = new minimalProjectManagementSystem();
let user1 = mpms.newEmployee("A", "B", null);
let project1 = new Project("Project 1", 5, 15);
let project2 = new Project("Project 2", 15, 25);
let project3 = new Project("Project 3", 35, 45);

test('User can not have more than 2 projects', () => {
    user1.assignProject(project1);
    user1.assignProject(project2);
    user1.assignProject(project3)
    expect(user1.projects.length).toBe(2);
})