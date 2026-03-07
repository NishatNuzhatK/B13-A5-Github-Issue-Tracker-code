console.log('main connected');
const cardContainer = document.getElementById("card-container");
const badgeContainer = document.getElementById("badge-container");

// 3
// const loadArray = (arr,container) =>{
//   // const newArray = arr.map((el) => );
//   // newArray[0].className = "badge badge-soft badge-secondary";
//   // newArray[1].className = "badge badge-soft badge-warning";

//   let count = 0;
//   arr.forEach((el)=>{
//     count++;
//     const div = document.createElement('div');
//   div.textContent = el;
//   if(count === 1){
//     div.className = "badge badge-soft badge-secondary"
//   }

//   if(count === 2){
//     div.className = "badge badge-soft badge-warning";
//   }

//   // container.appendChild(div)
  

//   });
  
  
    
// };

// 1
async function loadIssue(){
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    console.log(data);
    displayIssue(data.data);

}


// 2
function displayIssue(issues){
    // cardContainer.innerHTML = "";

    issues.forEach((issue) => {
        const div = document.createElement('div');
        div.className = `card bg-base-100 shadow-sm rounded-xl border-t-4 ${issue.status == "open" ? "border-t-green-500" :"border-t-purple-500" }`;
        div.innerHTML = `
        <div class="card-body space-y-3">
    <div class="flex flex-row justify-between">
      <img src="./assets/Open-Status.png" alt="">
      <p class="text-right text-xl">${issue.priority}</p>
    </div>
    <h2 class="card-title text-2xl">${issue.title}</h2>
    <p class="line-clamp-2 text-[#64748B]">${issue.description}</p>
    
    <div class="flex flex-row gap-4" id = "badge-container">
      <div class="badge badge-soft badge-secondary">Secondary</div>
      <div class="badge badge-soft badge-warning">Warning</div>
    </div>
    <hr>
    <p class="text-[#64748B]">#1 by ${issue.author}</p>
    <p class="text-[#64748B]">${issue.createdAt.split("T")[0]}</p>
  </div>
        
        `;
        
        cardContainer.appendChild(div);
    });


}


 loadIssue();