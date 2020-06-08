// the typing effect in the heading
function typeHeading() {

    heading.textContent = headings[textIndex].slice(0, charIndex);
    charIndex++;

    if (charIndex === headings[textIndex].length + 1) {  // change the text typed => (alternating)
        charIndex = 0;
        textIndex++;
        textIndex %= headings.length;
        setTimeout(typeHeading, 4000);
    }
    else {
        setTimeout(typeHeading, 150);
    }
}



// MAIN FUNCTION
var heading = document.querySelector(".heading span");

var scriptLoaded = false;


// Heading display ultility variables
var headings = ["sort", "visualize"];
var textIndex = 1;
var charIndex = 1;

setTimeout(typeHeading, 5000);