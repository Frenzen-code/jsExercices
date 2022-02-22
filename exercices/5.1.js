const readlineSync = require("readline-sync");

let myTvShow = {
    name : "name",
    year : 18,
    cast : []
};



function askTvSerie(){ 


    myTvShow.name = readlineSync.question('What is your favorite tv show ?');
    myTvShow.year = readlineSync.question('What was the production year ?');
    let nameCast
    while((nameCast=readlineSync.question("Enter the cast members and press X to stop")) != "x" )
        myTvShow.cast.push(nameCast);

}

askTvSerie()
console.log(myTvShow)