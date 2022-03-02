function generateRandomColor(){
  let maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal; 
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);   
  return `#${randColor.toUpperCase()}`
}


const _initTime = Date.now()



function getElapsedTime(){
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e){ 
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  //creating div
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class","displayedsquare"+" "+e.target.classList[1]);
  section.item(0).appendChild(newDiv);
  //adding log
  let newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode("["+getElapsedTime() + "] Created a new "+e.target.classList[1]+" square."));
  let ul = document.querySelector("ul");
  ul.appendChild(newLi);
  
    console.log(newDiv.classList);

}

const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares){
  actionsquare.addEventListener('click', clickOnSquare)
}


let section = document.getElementsByClassName("displayedsquare-wrapper");

const background = document.body
document.addEventListener('keypress', logkey)

function logkey(e) {
  console.log(e.code);
 switch (e.code) {
   case "Space": 
    background.style.backgroundColor = generateRandomColor()
    console.log(e.code);
    break;
    case "KeyL": 
    document.querySelector("ul").replaceChildren();
    break;
    case "KeyS": 
    document.querySelector(".displayedsquare-wrapper").replaceChildren();
 }

}