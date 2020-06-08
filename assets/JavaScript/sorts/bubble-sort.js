export var Bsort = {

    elements: [],  // The array containing the grid elements(numbers)
    i: 0,  // Inner nested to i loop imitation variable
    j: 0,  // Outer loop imitation variable

    sortstarted: false,

    guide: document.querySelector(".guide-text p"),

    // Sorting function
    Sort: function() {

        if (Bsort.i  < Bsort.len && Bsort.j < Bsort.len - 1 - Bsort.i ) {
            Bsort.sortstarted = true;

            // swap elements if current is greater than next
            if (parseInt(Bsort.elements[Bsort.j].textContent) > parseInt(Bsort.elements[Bsort.j + 1].textContent)) {
                Bsort.swap();
                Bsort.j++;
                Bsort.guide.textContent = "The current element was greater than the previous element hence they swapped.";
            }
            else {
                Bsort.j++;
                Bsort.removeColor();
                Bsort.elements[Bsort.j].classList.add("highlighted");
                Bsort.guide.textContent = "The previous element was less than (or) equal to the current element. So the pointer has moved to next element.";
            }
    
            // Do when j becomes array end(unsorted)
            if (Bsort.j === Bsort.len - 1 - Bsort.i ) {
                Bsort.elements[Bsort.j].classList.add("sorted");
                Bsort.guide.textContent = `Done this pass. The element at index ${Bsort.j} is in its correct position.`;
                Bsort.j = 0;
                Bsort.i  += 1;
    
                // To avoid i === elements.length as it becomes undefined
                if (Bsort.i != Bsort.len) {
                    Bsort.elements[0].classList.add("highlighted");
                }
    
            }
    
            // Final sorted background => green
            if (Bsort.i === Bsort.len - 1) {
                Bsort.sortstarted = false;
                Bsort.removeColor();
                Bsort.elements[0].classList.add("sorted");
                Bsort.guide.textContent = "Done Sorting!";
            }
        }
    },


    // Swap utility function
    swap: function() {

        // Visually swap the elements
        Bsort.elements[Bsort.j].position += 100
        Bsort.elements[Bsort.j].style.transform = `translate(${Bsort.elements[Bsort.j].position}%, 0)`;

        Bsort.elements[Bsort.j + 1].position -= 100
        Bsort.elements[Bsort.j + 1].style.transform = `translate(${Bsort.elements[Bsort.j + 1].position}%, 0)`;

        // Swap the elements array
        var temp = Bsort.elements[Bsort.j];
        Bsort.elements[Bsort.j] = Bsort.elements[Bsort.j + 1];
        Bsort.elements[Bsort.j + 1] = temp;
    },


    // To remove the background color of all elements
    removeColor: function() {
        for (var i = 0; i < Bsort.len; i++) {
            Bsort.elements[i].classList.remove("highlighted");
        }
    },


    //  The description to be added to right box
    addDescription: function() {

        let descBox = document.querySelector(".box");

        descBox.querySelector("h2").innerHTML = '<a href="https://en.wikipedia.org/wiki/Bubble_sort" target="_blank">BUBBLE SORT</a>';
        descBox.querySelector("#time").innerHTML = "Time Complexity : O(n<sup>2</sup>)";
        descBox.querySelector("#space").textContent = "Space Complexity : O(1)";

        descBox.querySelector("p").textContent = 'Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.';

    },


    // Setting up initial conditions for sorting
    init: function() {
        Bsort.elements = [];
        Bsort.i  = 0;
        Bsort.j = 0;
        Bsort.sortstarted = false;
    
        //  position attribute to every element to keep track of their position
        document.querySelectorAll(".element").forEach((item) => {
            item.position = 0;
            Bsort.elements.push(item);
        });
    
        Bsort.elements[0].classList.add("highlighted");
        Bsort.guide.textContent = "Start the sort!";
    
        Bsort.len = Bsort.elements.length;
    }
}