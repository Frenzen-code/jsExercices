function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
  }
  
  let sectionNode,sectionText,sectionP;
  let hamiltons6 = ["Raphael","Jean-Marie","Matthew","Fabien","Spyros","Bastien","Jordan","Dimitri","Nicolas","Stephane","Tania","Abiel","Alois","Enrico","Jerry","Lionel","Luna","Nathalie","Philippe","Zhenya"];
  let articles_nodes = document.getElementsByTagName("article");
  for(i = 0; i <hamiltons6.length ; i++)
  {
    sectionNode = document.createElement("section");
    sectionP = document.createElement("p");
    sectionText = document.createTextNode(hamiltons6[i]);
    sectionNode.style.backgroundColor = generateRandomColor();
    if(sectionNode.style.backgroundColor == "dark")
    {
      sectionNode.style.color = "white";
    }
    if(sectionNode.style.backgroundColor == "white")
    {
      sectionNode.style.color = "black"
    }
    sectionNode.appendChild(sectionP);
    sectionP.appendChild(sectionText);
    articles_nodes.item(0).appendChild(sectionNode);
  }
  let articleWithoutFirstChild = document.querySelector("article *:not(:first-child)");
  let list = Array.from(articles_nodes.item(0).children);
  let title = list[0];
  list.shift();
  list.sort(function (a, b) {
      return Math.random() - 0.5;
    });

    window.onload = function(){
        list.sort(function (a, b) {
          return Math.random() - 0.5;
        });
        while (articles_nodes.item(0).children.length > 0) {
          articles_nodes.item(0).removeChild(articles_nodes.item(0).children[0]);
        }
        articles_nodes.item(0).appendChild(title);
        list.forEach(function(el) {
          articles_nodes.item(0).appendChild(el);
        });}