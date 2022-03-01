// selector and variables global
let body = document.body;
let ul = document.querySelector("ul");
let arrayNameOfFilms = new Array;
let found;
if (ul.hasChildNodes()) {
    let children = ul.childNodes;
    for (let i = 0; i < children.length; i++) {
         found = 0;  
        if(children[i].nodeType === 1) {

            let filmName = children[i].innerHTML;
            if(filmName.localeCompare("Fast and Furious") == 0) {

                if(i!=0) {
                    ul.insertBefore(children[i], ul.firstChild);
                }
                ul.firstChild.setAttribute("class", "important");
            }
            for(elem of arrayNameOfFilms) {
                if(filmName.localeCompare(elem) == 0){
                    found = 1;
                }
            }
            if(found == 0) {
                arrayNameOfFilms.push(filmName);
            } else {
                ul.removeChild(children[i])
            }
        } 
    }

}
let firstElement =arrayNameOfFilms.splice(4,1); 
//event
ul.addEventListener("click",alerted);
body.addEventListener("keyup", sort);


//functions
function alerted(e) {
    if (e.target.innerHTML.localeCompare("Fast and Furious") == 0) {
        alert("The most important franchise ever, the story of DOM(inic) Torreto's family. It's not about car, it's about family");
    }else {
        alert(e.target.innerHTML);
    }
}



function sort(e){
  console.log(arrayNameOfFilms);
  if(`${e.code}` == "KeyR")
  {
    let j =0;
    shuffle(arrayNameOfFilms);
    if (ul.hasChildNodes()) {
      let children = ul.childNodes;
      for (let i = 0; i < children.length; i++) {
        if(children[i].nodeType === 1 )
        {
          if(j == 0)
          { j++
            children[i].innerHTML = firstElement;
          }
          else
          {if (children[i].getAttribute("class") != "important")
          {children[i].innerHTML = arrayNameOfFilms[j-1];
            j++;
          }
            
          }
        }
      }
    }
  }
    if(`${e.code}`== "KeyD") {
    let nodeFF =  ul.firstChild.cloneNode();
    nodeFF.innerHTML = firstElement;
    ul.insertBefore(nodeFF, ul.firstChild);

  }
}
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}



let newDiv = document.createElement("div");
document.body.insertBefore(newDiv, document.body.children[1]);
