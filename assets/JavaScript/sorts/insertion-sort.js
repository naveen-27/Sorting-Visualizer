export var Isort = {

    elements: [],  // The array containing the grid elements(numbers)

    // i & j start at 1 because initially the array with index 0 is considered sorted
    i: 1,
    j: 1,
    previous: 1,  /* The index of previous element after present call of sort function ends. 
                     This is kept track to remove background color of previous element */

    sortstarted: false,
    guide: document.querySelector(".guide-text p"),

    Sort: function() {
        if (Isort.i < Isort.len) {

            Isort.sortstarted = true;

            // If elements[j] is swapped backwards to 0th index
            if (Isort.j === 0 && Isort.i < Isort.len - 1) {
                Isort.previous = Isort.j;
                Isort.i++;
                Isort.j = Isort.i;
                
                Isort.elements[Isort.previous].classList.remove("highlighted");
                if (Isort.i < Isort.len) Isort.elements[Isort.i].classList.add("highlighted");
                
                return;
            }
    
            //  swap backwards elements[j] to correct position
            if (Isort.j > 0 && parseInt(Isort.elements[Isort.j].textContent) < parseInt(Isort.elements[Isort.j - 1].textContent)) {
                Isort.swap();
                Isort.j--;
                Isort.previous = Isort.j;

                Isort.guide.textContent = "Current element was lesser than the one to its right. So they swapped."
            }
            // If element[j] is at correct position after swaps, then outer loop var => "i" has to be incremented
            else {
                Isort.previous = Isort.j;
                Isort.i++;
                Isort.j = Isort.i;
                
                Isort.elements[Isort.previous].classList.remove("highlighted");
                Isort.guide.textContent = `The previous element could not move further back. So the pointer moves to index ${Isort.i} (To the first one that has not yet been checked).`;

                if (Isort.i < Isort.len) Isort.elements[Isort.i].classList.add("highlighted");
    
                // After sorting apply sorted class to every element
                else {
                    Isort.sortstarted = false;
                    Isort.elements.forEach((item) => {
                        item.classList.add("sorted");
                    });
                    Isort.guide.textContent = "Done Sorting!";
                }
            }
        }
    },


    // Swap utility function
    swap: function() {

        // Visually swap the elements
        Isort.elements[Isort.j].position -= 100
        Isort.elements[Isort.j].style.transform = `translate(${Isort.elements[Isort.j].position}%, 0)`;

        Isort.elements[Isort.j - 1].position += 100
        Isort.elements[Isort.j - 1].style.transform = `translate(${Isort.elements[Isort.j - 1].position}%, 0)`;
    
        // Swap the elements array
        var temp = Isort.elements[Isort.j];
        Isort.elements[Isort.j] = Isort.elements[Isort.j - 1];
        Isort.elements[Isort.j - 1] = temp;
    },


    // Description to be added in right
    addDescription: function() {

        let descBox = document.querySelector(".box");

        descBox.querySelector("h2").innerHTML = '<a href="https://en.wikipedia.org/wiki/Insertion_sort" target="_blank">INSERTION SORT</a>';
        descBox.querySelector("#time").innerHTML = "Time Complexity : O(n<sup>2</sup>)";
        descBox.querySelector("#space").textContent = "Space Complexity : O(1)";

        descBox.querySelector("p").textContent = 'Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. This iterates, consuming one input element each repetition, and growing a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.'
    },


    // Setting up initial conditions for sorting
    init: function() {
        Isort.elements = [];
        Isort.i = 1;
        Isort.j = 1;
        Isort.sortstarted = false;
        
        Isort.guide.textContent = "The first element is considered sorted and so we start from the second element. Start the sort!";
    
        document.querySelectorAll(".element").forEach((item) => {
            item.position = 0;
            Isort.elements.push(item);
        });
    
        Isort.len = Isort.elements.length;
    
        Isort.elements[1].classList.add("highlighted");
    }
}