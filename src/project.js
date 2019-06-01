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
    }

    deleteTask(taskToBeDeleted) {
        this.tasks = this.tasks.filter(task => task != taskToBeDeleted)
    }

    updateDuration(taskToBeChanged, newDuration) {
        this.tasks.map(task => {
            if (taskToBeChanged == task) {
                this.endDate += newDuration - taskToBeChanged.duration;
                taskToBeChanged.duration = newDuration;
            }
        })
    }
}