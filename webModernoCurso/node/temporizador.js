const schedule = require('node-schedule')

const tarefa = schedule.scheduleJob('*/5 * 22 * * 2' , function () {
    console.log('Executando tarefa', new Date().getSeconds())
})