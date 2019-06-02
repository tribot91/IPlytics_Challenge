module.exports = class Project {
    constructor(name, startDate, slackTime) {
        this.name = name;
        this.startDate = startDate;
        this.slackTime = slackTime;
        this.endDate = startDate + slackTime;
        this.tasks = [];
    }

    assignTask(task) {
        this.tasks.push(task);
        this.endDate = this.endDate + task.duration;
        return this.tasks;
    }

    deleteTask(taskToBeDeleted) {
        this.tasks = this.tasks.filter(task => task != taskToBeDeleted)
        return this.tasks
    }

    updateDuration(taskToBeChanged, newDuration) {
        this.tasks.map(task => {
            if (taskToBeChanged == task) {
                this.endDate += newDuration - taskToBeChanged.duration;
                taskToBeChanged.duration = newDuration;
            }
        })
        return this.tasks;
    }
}