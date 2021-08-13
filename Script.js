/* .js files add interaction to your website */

var factList = [
  "Coral Reefs provide a habitat for different types of sea life that contribute to the main source of protein,income, and protection for over half a billion people",/*1*/
  "Coral reefs are called the medicine cabinet of the ocean since corals cannot migrate away from predators, they have developed many chemical defenses. These chemical defenses provide scientists with resources to make medicine to treat serious conditions such as arthritis, heart diseases, cancer, and other viruses.",/*2*/
  " Indigenous cultures specifically sea peoples find Coral Reefs to be very sacred ecosystem. An example being the Pemutaeran community in Bali that has a Coral Reef Goddess called Dewi. "];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

