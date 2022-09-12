import { toDo } from "./modal/todo.js";
import { Completed } from "./modal/completed.js";
// import { validateCheck } from "./validate/validate.js";

let jobs = new toDo();
let jobsCompleted = new Completed();

// Thêm việc
document.getElementById("addItem").onclick = () => {
    let inputTag = document.getElementById("newTask");
    

    var valid = true;
    valid = validateCheck(jobs.arrJob)
    && validateCheck(jobsCompleted.arrComp);
    console.log(valid)
    

    if (valid == false) {
        return;
    }
    
    jobs.addThings(inputTag.value);

    jobs.setStorage();

    jobs.renderJobs('todo', jobs.arrJob);

}

// Xóa tất cả các việc chưa hoàn thành
document.querySelector("#one").onclick = () => {
    jobs.arrJob.splice(0, jobs.arrJob.length);
    jobs.setStorage();
    jobs.renderJobs("todo");
}

// Sắp xếp việc từ a đến z
document.querySelector('#two').onclick = () => {
    // jobs.arrJob.sort();
    // jobsCompleted.arrComp.sort(); 
    let aToZJob = _.orderBy(jobs.arrJob, [], ['asc']);    
    jobs.arrJob = aToZJob;
    let aToZJobCompleted = _.orderBy(jobsCompleted.arrComp, [], ['asc']);    
    jobsCompleted.arrComp = aToZJobCompleted;
    jobs.setStorage();
    jobsCompleted.setStorage();
    jobs.renderJobs("todo");
    jobsCompleted.renderJobs("completed");
}

// Sắp xếp việc từ z đến a
document.querySelector('#three').onclick = () => {
    // jobs.arrJob.sort();
    // jobs.arrJob.reverse();
    // jobsCompleted.arrComp.sort(); 
    // jobsCompleted.arrComp.reverse(); 
    let aToZJob = _.orderBy(jobs.arrJob, [], ['desc']);    
    jobs.arrJob = aToZJob;
    let aToZJobCompleted = _.orderBy(jobsCompleted.arrComp, [], ['desc']);    
    jobsCompleted.arrComp = aToZJobCompleted;
    jobs.setStorage();
    jobsCompleted.setStorage();
    jobs.renderJobs("todo");
    jobsCompleted.renderJobs("completed");
}


// Xóa việc
window.deleteJob = (item) => {
    jobs.deleteItem(item);
    jobs.setStorage();
    jobs.renderJobs('todo');
}

// Chuyển việc chưa hoàn thành thành hoàn thành
window.completeJob = (job) => {
    let completedJob =  jobs.getItem(job);
    jobsCompleted.addThings(completedJob);
    jobs.deleteItem(job);
    jobs.setStorage();
    jobsCompleted.setStorage();
    jobs.renderJobs('todo');
    jobsCompleted.renderJobs('completed');
}

// Xóa việc đã hoàn thành
window.deleteCompletedJob = (item) => {
    jobsCompleted.deleteItem(item);
    jobsCompleted.setStorage();
    jobsCompleted.renderJobs('completed');
}


window.onload = () => {
    jobs.getStorage();
    jobs.renderJobs('todo');
    jobsCompleted.getStorage();
    jobsCompleted.renderJobs('completed');
}


let validateCheck = (arr) => {
    let input = document.getElementById("newTask")
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === input.value) {
            document.querySelector("#validate").innerHTML = 'This job has already!!'
            return false;
        }
        document.querySelector("#validate").innerHTML = ''
        return true;
    }
}