// use for contact to file db
const fs = require('fs') // file system build in nodejs

const readAllTask = () => {
    const buffer = fs.readFileSync("task.json") // syns, run this line then run lines below
    // move buffer to string
    const taskString = buffer.toString()
    // move json to array
    const taskArray = JSON.parse(taskString)
    return taskArray
}

const readDetailTask = (id) => {
    let taskList = readAllTask()
    const task = taskList.find(task => task.id === id)
    return task
}

const createTask = (title, description) => {
    const newTask = {
        id: Math.random().toString(),
        title,
        description
    }
    let taskList = readAllTask()
    // taskList.push(newTask)
    taskList = [...taskList, newTask]
    // save in task.json
    fs.writeFileSync("task.json", JSON.stringify(taskList))
    return taskList
}

const updateTask = (id, title, description) => {
    let taskList = readAllTask()
    const index = taskList.findIndex(task => task.id === id)
    if(index !== -1) {
        taskList[index] = {id, title, description}
        fs.writeFileSync("task.json", JSON.stringify(taskList))
        return true
    } else {
        console.log('not found');
        return false
    }
}

const deleteTask = (id) => {
    let taskList = readAllTask()
    let newTaskList = taskList.filter(task => task.id !== id)
    fs.writeFileSync("task.json", JSON.stringify(newTaskList))
    console.log('delete success');
}

module.exports = {
    readAllTask, 
    createTask,
    readDetailTask,
    updateTask,
    deleteTask
}