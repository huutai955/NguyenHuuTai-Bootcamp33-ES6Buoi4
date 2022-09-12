export class toDo {
    arrJob = [];

    addThings = (job) => {
        this.arrJob.push(job);
    }

    deleteItem = (jobdelete) => {
        this.arrJob = this.arrJob.filter(job => job !== jobdelete);
    }

    getItem = (item) => {
        let jobCompleted = this.arrJob.find(job => {
            if (job == item) {
                return job;
            }
        })
        return jobCompleted;
    }

    setStorage = () => {
        localStorage.setItem("arrJob", JSON.stringify(this.arrJob));
    }

    getStorage = () => {
        if (localStorage.getItem("arrJob")) {
            this.arrJob = JSON.parse(localStorage.getItem("arrJob"));
        }
    }

    renderJobs = (selector) => {
        let html = this.arrJob.reduce((htmls, currentJob) => {
            return htmls +
                `
                <li>
                <h3>${currentJob}</h3>
                    <div class="button">
                        <button style="border: none;" onclick="deleteJob('${currentJob}')">
                                <i class="fa-solid fa-trash"></i>
                        </button>
                        <button style="border: none;" onclick="completeJob('${currentJob}')">
                                <i class="fa-regular fa-circle-check"></i>
                        </button>
                    </div>
                </li>
                `
        }, '');
        document.getElementById(selector).innerHTML = html;
    }





}