const _initTime = Date.now()

function getElapsedTime(){
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

 

function clickOnSquare(e){
    const exisList=document.querySelector("ul");
    const exisDiv=document.querySelector(".displayedsquare-wrapper")
  console.log(e.target.classList[1])
  console.log(getElapsedTime())

  let newDiv = document.createElement("div"); 
  newDiv.className = "displayedsquare "+e.target.classList[1];  
  exisDiv.appendChild(newDiv);

  let newListItem = document.createElement("li"); 
  newListItem.textContent=getElapsedTime()+": Created a new "+e.target.classList[1]+" square.";
  exisList.appendChild(newListItem);
  
  const displayedsquares = document.querySelectorAll('.displayedsquare')
for(let displaysquare of displayedsquares){
  displaysquare.addEventListener('click', clickOnDisplayed)
}

}

const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares){
  actionsquare.addEventListener('click', clickOnSquare)
}



function clickOnDisplayed(e){
    alert(e.target.classList[1]);
}

document.body.addEventListener("keypress",(Event) => {
    console.log(Event);
    const exisList=document.querySelector("ul");
    const exisDiv=document.querySelector(".displayedsquare-wrapper")
    if (Event.key==" "){
        const color= random_rgba();
    document.body.style.backgroundColor=color;
    
    

  let newListItem = document.createElement("li"); 
  newListItem.textContent=getElapsedTime()+": Spacebar has changed the bodycolor to: "+color;
  exisList.appendChild(newListItem);
}else if(Event.key=="i"){
exisList.innerHTML="";
}else if(Event.key=="s"){
exisDiv.innerHTML="";
}


});

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',1 )';
    /*+ r().toFixed(1) + */
}

