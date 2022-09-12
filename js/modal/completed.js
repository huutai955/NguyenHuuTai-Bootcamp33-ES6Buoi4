export class Completed {
    arrComp = [];
    
    addThings = (job) => {
        this.arrComp.push(job);
    };

    deleteItem = (jobdelete) => {
        this.arrComp = this.arrComp.filter(job => job !== jobdelete);
    }

    setStorage = () => {
        localStorage.setItem("arrJobCompleted", JSON.stringify(this.arrComp));
    }

    getStorage = () => {
        if (localStorage.getItem("arrJobCompleted")) {
            this.arrComp = JSON.parse(localStorage.getItem("arrJobCompleted"));
        }
    }

    renderJobs = (selector) => {
        let html = this.arrComp.reduce((htmls, currentJob) => {
            return htmls +
                `
                <li>
                <h3>${currentJob}</h3>
                    <div class="button">
                        <button style="border: none;" onclick="deleteCompletedJob('${currentJob}')">
                                <i class="fa-solid fa-trash"></i>
                        </button>
                        <button style="border: none;  color: green;" onclick="completeJob('${currentJob}')">
                                <i class="fa-regular fa-circle-check"></i>
                        </button>
                    </div>
                </li>
                `
        }, '');
        document.getElementById(selector).innerHTML = html;
    }
 
}