/*
1)Select the last child of the <ol> tag and put it at the begining of the list

2)Move the <h2> of the third section in the second one and vice-versa

3)Delete the last section from the DOM, we don't need it anyways
*/

//1
const ol = document.querySelector('ol');
ol.insertBefore(ol.lastElementChild,ol.firstElementChild);
//2
const section = document.getElementsByTagName("section");
const section2h2 = section.item(1).getElementsByTagName("h2");
const section3h2 = section.item(2).getElementsByTagName("h2");

section.item(2).insertBefore(section2h2.item(0),section.item(2).firstChild);
section.item(1).insertBefore(section3h2.item(1),section.item(1).firstChild);// /!\ item(1) because there are now 2 h2's in the second section (cfr ligne 20)

//3
section.item(2).remove();