const sectionOne = document.querySelector("#section-one")
const sectionTwo = document.querySelector("#section-two")
const sectionThree = document.querySelector("#section-three")
const sectionFour = document.querySelector("#section-four")
const sectionContainer = document.querySelector("#section-container")
var count = 1;

sectionContainer.addEventListener("click", function() { 
    count++;
    if(count === 1){
        sectionOne.style.display = "block"
    } else {sectionOne.style.display = "none"}
    if(count === 2){
        sectionTwo.style.display = "block"
    } else {sectionTwo.style.display = "none"}
    if(count === 3){
        sectionThree.style.display = "block"
    } else {sectionThree.style.display = "none"}
    if(count === 4){
        sectionfour.style.display = "block"
    } else {sectionfour.style.display = "none"}
    if(count = 5){
        count = 1;
    }
})