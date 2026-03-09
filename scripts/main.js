console.log('main connected');
const cardContainer = document.getElementById("card-container");
const badgeContainer = document.getElementById("badge-container");
const issueCount = document.getElementById("issue-count");
const spinnerloading = document.getElementById("spinner-loading");
const allBtn = document.getElementById("all-btn");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const infoModal = document.getElementById("infoModal");
const modalTitle = document.getElementById("modal-title");
const modalStatus = document.getElementById("modal-status");
const modalAssignee = document.getElementById("modal-assignee");
const modalDate = document.getElementById("modal-date");
const modallabels = document.getElementById("modal-labels");
const modalDes = document.getElementById("modal-des");
const modalPriority = document.getElementById("modal-priority");
const modalStatusAgain = document.getElementById("modal-status-again");
const modalAssigneeAgain = document.getElementById("modal-assignee-again");

// 3
 const loadArray = (arr,container) =>{
 const newArray = arr.map((el) => `<div class="badge badge-soft badge-secondary">${el}</div>`);
 return (newArray.join(" "));
   
 };


//  4
function showingSpinner(){
  spinnerloading.classList.remove('hidden');
  cardContainer.innerHTML = "";

}

function hidingSpinner(){
  spinnerloading.classList.add('hidden');

}

// 1
async function loadIssue(){

  showingSpinner();
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    console.log(data);
    hidingSpinner();
    displayIssue(data.data);

}


// 2
function displayIssue(issues){
    cardContainer.innerHTML = "";
    let count = 0;

    issues.forEach((issue) => {
        const div = document.createElement('div');
        div.className = `card bg-base-100 shadow-sm rounded-xl border-t-4 cursor-pointer ${issue.status == "open" ? "border-t-green-500" :"border-t-purple-500" }`;
        div.onclick = () => issueModal(issue.id);
        div.innerHTML = `
        <div class="card-body space-y-3 ">
    <div class="flex flex-row justify-between">
    ${issue.status === "open"? '<img src="./assets/Open-Status.png" alt="">' : '<img src="./assets/Closed- Status .png" alt="">'}
      
      <p class="text-right text-xl">${issue.priority}</p>
    </div>
    <h2 class="card-title text-xl wrap-break-words whitespace-normal w-full">${issue.title}</h2>
    <p class="line-clamp-2 text-[#64748B]">${issue.description}</p>
    
    <div class="flex flex-wrap flex-col lg:flex-row gap-4" id = "badge-container"> ${loadArray(issue.labels)}</div>
    <hr>
    <p class="text-[#64748B]">#1 by ${issue.author}</p>
    <p class="text-[#64748B]">${issue.createdAt.split("T")[0]}</p>
  </div>
        
        `;
        count++;
        
        cardContainer.appendChild(div);
    });

    
  issueCount.innerText = count;

}


// 5
async function BtnDisplay(btn){

  const currentBtn = document.getElementById(btn);
  showingSpinner();

  allBtn.classList.remove('btn-primary');
  openBtn.classList.remove('btn-primary');
  closeBtn.classList.remove('btn-primary');

  allBtn.classList.add("btn-outline");
  openBtn.classList.add("btn-outline");
  closeBtn.classList.add("btn-outline");

  currentBtn.classList.remove('btn-outline');
  currentBtn.classList.add('btn-primary');


 const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
 const data = await res.json();
 hidingSpinner();

  cardContainer.innerHTML = "";

 
  let count = 0;
 
  data.data.forEach((element) => {
    if(btn === "open-btn" && element.status === 'open'){
      btnContentDisplay(element.id);
      count++;

    }

    if(btn === "close-btn" && element.status === 'closed'){
      btnContentDisplay(element.id);
      count++;

    }

    if(btn === 'all-btn'){
      loadIssue();
    }
    
  });

  issueCount.innerText = count;
  
  
 }


 //6

 async function btnContentDisplay(id){

 
  const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
  const data = await res.json();

  

       const div = document.createElement('div');
        div.className = `card bg-base-100 shadow-sm rounded-xl border-t-4 ${data.data.status == "open" ? "border-t-green-500" :"border-t-purple-500" }`;
        div.innerHTML = `
        <div class="card-body space-y-3 ">
    <div class="flex flex-row justify-between">
    ${data.data.status === "open"? '<img src="./assets/Open-Status.png" alt="">' : '<img src="./assets/Closed- Status .png" alt="">'}
      
      <p class="text-right text-xl">${data.data.priority}</p>
    </div>
    <h2 class="card-title text-xl">${data.data.title}</h2>
    <p class="line-clamp-2 text-[#64748B]">${data.data.description}</p>
    
    <div class="flex flex-wrap flex-col lg:flex-row gap-4" id = "badge-container"> ${loadArray(data.data.labels)}</div>
    <hr>
    <p class="text-[#64748B]">#1 by ${data.data.author}</p>
    <p class="text-[#64748B]">${data.data.createdAt.split("T")[0]}</p>
  </div>
        
        `;
        
        
        cardContainer.appendChild(div);



 };


  async function issueModal(id){

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
    const data = await res.json();

    modalTitle.textContent = data.data.title;
    modalStatus.textContent = data.data.status;
    modalStatusAgain.textContent = data.data.status;
    modalAssignee.textContent = data.data.assignee;
    modalAssigneeAgain.textContent = data.data.assignee;
    modallabels.innerHTML = loadArray(data.data.labels);
    modalDate.textContent = data.data.updatedAt.split("T")[0];
    modalDes.textContent = data.data.description;
    modalPriority.textContent = data.data.priority;
    
    
  infoModal.showModal();
 }






 loadIssue();