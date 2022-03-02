
function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
  
}

(function() {
    document.title = "Modifying the dom"
    console.log(document.title);

    let tags = document.body.getElementsByTagName("*");
    for (let i = 0; i < tags.length; i++) {
        console.log(tags[i]);
    }
 document.body.style.backgroundColor = generateRandomColor()

})();

