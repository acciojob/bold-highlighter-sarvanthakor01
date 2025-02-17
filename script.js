function highlight() {
    // Select all <strong> elements
    let boldWords = document.querySelectorAll('strong');

    // Loop through each and change the color to green
    boldWords.forEach(word => {
        word.style.color = "rgb(0, 128, 0)";
    });
}

function return_normal() {
    // Select all <strong> elements
    let boldWords = document.querySelectorAll('strong');

    // Loop through each and change the color back to black
    boldWords.forEach(word => {
        word.style.color = "rgb(0, 0, 0)";
    });
}
