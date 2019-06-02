const Employee = require("./employee");

module.exports = class minimalProjectManagementSystem {
    constructor() {
        this.employeeList = [];
    }

    newEmployee(firstName, lastName, supervisor) {
        try {
            if (supervisor instanceof Employee || supervisor == null) {
                let newEmp = new Employee(firstName, lastName, supervisor);
                this.employeeList.push(newEmp);
                return newEmp;
            } else {
                throw "Supervisor should be in type of Employee or null!";
            }
        } catch (error) {
            console.log(error)
        }
    }

    displayEmployees() {
        // console.log(JSON.stringify(this.employeeList, 0, 2))

        return this.employeeList;
    }

    deleteProject(projectToBeDeleted) {
        try {
            this.employeeList.map(employee => employee.deleteProject(projectToBeDeleted));
        } catch (error) {
            console.log("No such project to delete!");
        }
    }

    deleteTask(taskToBeDeleted) {
        this.employeeList.map(employee => employee.projects.map(project => project.deleteTask(taskToBeDeleted)));
    }

    updateDuration(taskToBeChanged, newDuration) {
        this.employeeList.map(employee => employee.projects.map(project => project.updateDuration(taskToBeChanged, newDuration)));
    }

    displayTasksForProject(project) {
        //Tasks of each employee with selected project
        let filteredTasks = this.employeeList.map(employee => employee.projects.filter(p => p == project));

        try {
            if (filteredTasks.filter(e => e.length > 0).length > 0) {
                let projects = filteredTasks.filter(e => e.length > 0)[0][0].tasks;
                // console.log(JSON.stringify(projects, 0, 2));
                return projects;
            } else {
                throw "No such project to display";
            }
        } catch (error) {
            console.log(error)
        }
    }

    totalDaysNeeded(projectList) {
        var totalDays = projectList.map(project => project.endDate - project.startDate)
            .reduce((total, num) => total + num);

        // console.log(totalDays);

        return totalDays;
    }
}