class Student {
    constructor(name) {
        this.name = name;
        this.schedule = []
    }

    setName(name) {
        this.name = name;
    }

    setSchedule(sched) {
        this.schedule.push(sched);
    }

    getInfo(){
        console.log("name : "+this.name)
        for (let i = 0; i < this.schedule.length; i++) {
            console.log("schedule "+(i+1)+" : "+this.schedule[i])
            
        }
    }

}
module.exports = Student;