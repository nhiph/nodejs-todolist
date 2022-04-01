const yargs = require('yargs') // es5 common js
const { createTask, readAllTask, readDetailTask, updateTask, deleteTask } = require('../model/task')
// create a command line
//  node app/index.js test => move to package.json for easy => npm run command-test
yargs.command({
    command: 'test',
    handler: () => {
        console.log('test')
    }
})

// CRUD
// incase pass param to fucntion => use builder
// 1. create
// node app/index.js create --title="xxx" --description="yyy"
yargs.command({
    command: 'create',
    builder: {
        title: {
            type: "string",
        },
        description: {
            type: "string",
        }
    },
    handler: (args) => {
        const { title, description } = args
        createTask(title, description)
    }
})
// 2. read
// node app/index.js read-all
yargs.command({
    command: 'read-all',
    handler: () => {
        const result = readAllTask()
        console.log('read-all', result);
    }
})
// node app/index.js read-detail --id="123"
yargs.command({
    command: 'read-detail',
    builder: {
        id: {
            type: "string"
        }
    },
    handler: (args) => {
        const { id } = args
        const task = readDetailTask(id)
        if(task) console.log('success', task)
        else console.log('not found')
    }
})
// 3. update
// node app/index.js update --id="123" --title="xxx" --description="yyy"
yargs.command({
    command: 'update',
    builder: {
        id: {
            type: "string"
        },
        title: {
            type: "string",
        },
        description: {
            type: "string",
        },
    },
    handler: (args) => {
        const { id, title, description } = args
        let task = updateTask(id, title, description)
        console.log('task', task);
    }
})
// 4. delete
// node app/index.js delete --id="123"
yargs.command({
    command: 'delete',
    builder: {
        id: {
            type: "string"
        }
    },
    handler: (args) => {
        const { id } = args
        deleteTask(id)
    }
})

yargs.parse(); // save created command