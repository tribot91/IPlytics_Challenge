module.exports = class Employee {
    constructor(firstName, lastName, supervisor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.supervisor = supervisor;
        this.projects = [];
    }

    assignProject(project) {
        try {
            if (this.projects.length < 2) {
                this.projects.push(project);
                return this.projects;
            } else {
                throw "Can not work on more than 2 projects at a time!";
            }
        } catch (error) {
            console.log(error);
        }
    }

    deleteProject(projectToBeDeleted) {
        this.projects = this.projects.filter(project => project != projectToBeDeleted);
        return this.projects;
    }

    findProject(project) {
        return this.projects.filter(p => p == project);
    }
}