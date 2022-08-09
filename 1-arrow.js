const task = {
    task:[{
            text:'Gerocry shopping',
            completed:true
        },
        {
            text:'clean yard',
            completed:false
        },
        {
            text:'file',
            completed:false
        }],
        getToDo(){
            const taskToDo = this.task.filter((task)=>{
                return task.completed==false
            })
            return taskToDo
        }
}
console.log(task.getToDo());