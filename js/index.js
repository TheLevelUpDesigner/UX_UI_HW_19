document.addEventListener("DOMContentLoaded", function () {
    // Get the scroll button element
    const scrollButton = document.getElementById("scrollButton");

    // Get the target section element
    const section2 = document.getElementById("section2");

    // Add a click event listener to the scroll button
    scrollButton.addEventListener("click", function () {
        // Scroll to the top of the target section smoothly
        section2.scrollIntoView({ behavior: "smooth" });
    });
});
