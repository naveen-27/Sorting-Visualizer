export var Ssort = {

    // i, small are set to "0" as initial values
    // j is "1" because the inner loop starts with "i + 1" in selection Ssort

    elements: [],  // The array containing the grid elements(numbers)
    j: 1,  // Inner nested to i loop imitation variable
    i: 0,  // Outer loop imitation variable
    small: 0,  // To keep track of the smallest element for each inner iteration

    sortstarted: false,

    guide: document.querySelector(".guide-text p"),


    // Sorting function
    Sort: function() {
        if (Ssort.i < Ssort.len) {

            if (Ssort.j < Ssort.len) {
                Ssort.sortstarted = true;

                //  If current element is smaller then change the small to current
                if (parseInt(Ssort.elements[Ssort.j].textContent) < parseInt(Ssort.elements[Ssort.small].textContent)) {
                    Ssort.small = Ssort.j;
                    Ssort.removeColor("small");
                    Ssort.elements[Ssort.small].classList.add("small");

                    Ssort.guide.textContent = `The element at index ${Ssort.small} is the smallest till now.`;
                }
                else {
                    Ssort.guide.textContent = "Previous element was lagrer than or equal to ths smallest. So pointer moves to next element.";
                }

                Ssort.j++;

                // Swap happens only when j reaches the end of array
                if (Ssort.j === Ssort.len) {  // 
                    Ssort.swap();
                    Ssort.elements[Ssort.i].classList.add("sorted");
                    Ssort.i++;

                    // To set up for next iteration of i => incrementing i & setting j to "i + 1"
                    Ssort.small = Ssort.i
                    Ssort.removeColor("small");
                    Ssort.elements[Ssort.small].classList.add("small");
                    Ssort.j = Ssort.i + 1;

                    Ssort.removeColor("highlighted");
                    if (Ssort.j < Ssort.len - 1)Ssort.elements[Ssort.j].classList.add("highlighted");

                    Ssort.guide.textContent = "The pointer has reached end. So swap smallest element to correct position.";

                    return // After swap the next if need not be checked
                }
            }   
        }

        if (Ssort.j < Ssort.len) {
            Ssort.removeColor("highlighted");
            Ssort.elements[Ssort.j].classList.add("highlighted");
        }

        // Sorted array being added green background
        if (Ssort.i === Ssort.len - 1) { 
            Ssort.elements[Ssort.i].classList.add("sorted");
            Ssort.sortstarted = false;

            Ssort.guide.textContent = "Done Sorting!";
        }
    },


    // Swap utility function
    swap: function() {

        // visually swapping elements
        let pos1 = Ssort.elements[Ssort.small].position += 100 * (Ssort.i - Ssort.small);
        Ssort.elements[Ssort.small].style.transform = `translate(${pos1}%, 0)`;

        let pos2 = Ssort.elements[Ssort.i].position += 100 * (Ssort.small - Ssort.i);
        Ssort.elements[Ssort.i].style.transform = `translate(${pos2}%, 0)`;

        // Swaping the elements array 
        var temp = Ssort.elements[Ssort.i];
        Ssort.elements[Ssort.i] = Ssort.elements[Ssort.small];
        Ssort.elements[Ssort.small] = temp;
    },


    // To remove the background color of all elements
    removeColor: function(styleClass) {
        for (var i = 0; i < Ssort.len; i++) Ssort.elements[i].classList.remove(styleClass);
    },


    // Description to be added in right
    addDescription: function() {

        let descBox = document.querySelector(".box");

        descBox.querySelector("h2").innerHTML = '<a href="https://en.wikipedia.org/wiki/Selection_sort" target="_blank">SELECTION SORT</a>';
        descBox.querySelector("#time").innerHTML = "Time Complexity : O(n<sup>2</sup>)";
        descBox.querySelector("#space").textContent = "Space Complexity : O(1)";

        descBox.querySelector("p").textContent = 'It has a quadratic time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort is noted for its simplicity and has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.';
    },


    //  The startUp to be performed when array size changes
    init: function() {  
        Ssort.elements = [];
        Ssort.i = 0;
        Ssort.j = 1;
        Ssort.small = 0;
        Ssort.started = false;

        //  position attribute to every element to keep track of their position
        document.querySelectorAll(".element").forEach((item) => {
            item.position = 0;
            Ssort.elements.push(item);
        });

        Ssort.elements[0].classList.add("small");
        Ssort.elements[1].classList.add("highlighted");

        Ssort.guide.textContent = "Start the sort!";
        Ssort.len = Ssort.elements.length;
    }
}