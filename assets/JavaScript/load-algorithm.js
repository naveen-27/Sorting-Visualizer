import { randomArray } from './random-array.js';

import { Bsort } from './sorts/bubble-sort.js';
import { Isort } from './sorts/insertion-sort.js';
import { Ssort } from './sorts/selection-sort.js';

function init(sortObj) {  // Making the object for new array sorting ready by applying initial conditions
    currentAlgo = sortObj;
    randomArray();

    sortObj.init();
    sortObj.addDescription();

    //  The button and input are changed to react to selected algorithm
    buttonNext.onclick = sortObj.Sort;
    input.onclick = sortObj.init;
}


// Index of the sort in sorts array is passed is remove & add highlighting of selected algo in navbar
function navbarHighlightAlgo(index) {

    if (!currentAlgo.sortstarted) {
        sorts[previousAlgo].classList.remove("selected");
        sorts[index].classList.add("selected");

        previousAlgo = index;
    }
}


// Generate new array when input changes
function newArray() {
    if (currentAlgo.sortstarted) {
        alert("Cannot Change Array Size InBetween");
        return
    }

    randomArray();
}


// Identifying & initialising the object of selected algorithm
function addSortAlgorithm() {
    if (currentAlgo.sortstarted) { // To disable switching algorithms inbetween current sorting
        alert("Cannot Switch Algorithms InBetween");
        return;
    }

    //  Make the object of selected algorithm take control of sorting
    switch(this.getAttribute("id")) {

        case "bubble":
            init(Bsort);
            navbarHighlightAlgo(0);
            break;

        case "insertion":
            init(Isort);
            navbarHighlightAlgo(1);
            break;

        case "selection" :
            init(Ssort);
            navbarHighlightAlgo(2);
            break;
    }

    algoLoadedBefore = true;
}


//  MAIN FUNCTION
var buttonNext = document.querySelector("button");  // The next button on page
var input = document.querySelector("input");  //  The array size input
var algoLoadedBefore = false;  // To ensure that alert (on line 21 does not pop when page loads)
var currentAlgo = Bsort;  // The currently selected algorithm

var previousAlgo = 0;  // Holds index of previously selected algorithm in sorts array
var sorts = document.querySelectorAll(".sorts > li");


sorts.forEach((sort) => {

    // Loading Algorithm
    sort.addEventListener("click", addSortAlgorithm);

    // Hover (mouse enter)
    sort.addEventListener("mouseover", () => {
        sort.classList.add("hover");
    });

    // Hover (mouse out)
    sort.addEventListener("mouseout", () => {
        sort.classList.remove("hover");
    });

});


input.addEventListener("input", newArray);

// Fill the array when the page loads
randomArray();