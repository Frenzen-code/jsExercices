/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour12: 'true'};
    let date= new Date();
    let hour= date.getHours();
    let minute= date.getMinutes();
    let pmAm = "PM"; if(hour < 12)  { pmAm = "AM"}
    document.getElementById("target").innerHTML = date.toLocaleDateString("en-US", options)+" " + (hour -12) + ":" + minute + " " + pmAm; 


    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();
