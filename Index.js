const sectionOne = document.querySelector("#section-one")
const sectionTwo = document.querySelector("#section-two")
const sectionThree = document.querySelector("#section-three")
const sectionFour = document.querySelector("#section-four")
const sectionContainer = document.querySelector("#section-container")
var count = 1;

sectionContainer.addEventListener("click", function() { 
    count++;
    if(count === 1){
        sectionOne.style.display = "flex"
    } else {sectionOne.style.display = "none"}
    if(count === 2){
        sectionTwo.style.display = "flex"
    } else {sectionTwo.style.display = "none"}
    if(count === 3){
        sectionThree.style.display = "flex"
    } else {sectionThree.style.display = "none"}
    if(count === 4){
        sectionFour.style.display = "flex"
    } else {sectionFour.style.display = "none"}
    if(count > 4){
        sectionOne.style.display = "flex"
        count = 1;
    }
})