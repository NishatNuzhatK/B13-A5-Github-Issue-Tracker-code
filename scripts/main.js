console.log('main connected');
const cardContainer = document.getElementById("card-container");
const badgeContainer = document.getElementById("badge-container");
const issueCount = document.getElementById("issue-count");
const spinnerloading = document.getElementById("spinner-loading");

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
        div.className = `card bg-base-100 shadow-sm rounded-xl border-t-4 ${issue.status == "open" ? "border-t-green-500" :"border-t-purple-500" }`;
        div.innerHTML = `
        <div class="card-body space-y-3 ">
    <div class="flex flex-row justify-between">
    ${issue.status === "open"? '<img src="./assets/Open-Status.png" alt="">' : '<img src="./assets/Closed- Status .png" alt="">'}
      
      <p class="text-right text-xl">${issue.priority}</p>
    </div>
    <h2 class="card-title text-2xl">${issue.title}</h2>
    <p class="line-clamp-2 text-[#64748B]">${issue.description}</p>
    
    <div class="flex flex-col md:flex-row gap-4" id = "badge-container"> ${loadArray(issue.labels)}</div>
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


 loadIssue();