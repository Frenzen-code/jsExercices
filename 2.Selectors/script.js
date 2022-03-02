

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

(function() {
    let tags = document.body.getElementsByClassName("important");
    for (let i = 0; i < tags.length; i++) {
        tags.item(i).setAttribute("title", "This is an important item")
    }

    let tags2 = document.body.getElementsByTagName("img")
    for (let i = 0; i < tags2.length; i++) {
         console.log(tags2.item(i).getAttribute("class"));
        if (tags2.item(i).getAttribute("class")!= "important") {
            tags2.item(i).style.display = "none"
        } 
    } 

  
   let tags3 = document.getElementsByTagName("p")
    for (let i = 0; i <tags3.length; i++) {
        console.log(tags3.item(i).textContent);
        if(tags3.item(i).getAttribute("class") == null) {
            
            tags3.item(i).style.color = generateRandomColor();
            
        } else {
            console.log(tags3.item(i).getAttribute("class"));
        }
    } 


   
})();
