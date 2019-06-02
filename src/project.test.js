const Project = require("./project");
const Task = require("./task");


let newProject1 = new Project("Project 1", 5, 15);
let newTask1 = new Task("Task 1", "This task is awesome", 1);

test('Adding task to project', () => {
    expect(newProject1.assignTask(newTask1)).toEqual([{
        "description": "This task is awesome",
        "duration": 1,
        "name": "Task 1",
    }]);
})

test('Updating task duration', () => {
    expect(newProject1.updateDuration(newTask1, 20)).toEqual([{
        "description": "This task is awesome",
        "duration": 20,
        "name": "Task 1",
    }]);
})

test('Delete task from project', () => {
    expect(newProject1.deleteTask(newTask1)).toStrictEqual([]);
})