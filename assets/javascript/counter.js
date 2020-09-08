console.log("Hi Cramer")

let incrementButton = document.querySelector("#increment");
console.log(incrementButton);
let decrementButton = document.querySelector("#decrement");
let counter = document.querySelector("#counter");


incrementButton.addEventListener("click", function () {
    // Any code you write in here, will run every time incrementButton
    // is clicked.
    // Run the console.log function to display some text in the console:
    console.log("+ button clicked");
    let newCounterValue = Number(counter.innerHTML) + 1;
    counter.innerHTML = newCounterValue;
    // If the counter is >= 10 then change the text color to red:
    if (newCounterValue >= 10) {         // WHAT IS THIS? Check out "IF Statements" in the Useful Resources section.
        counter.style.color = "red";
    }
    // Calculate the new value for our counter:
    counter.innerHTML = newCounterValue;
})

decrementButton.addEventListener("click", function () {
    console.log("- button clicked");
    // Calculate the new value for our counter (note the subtraction operator):
    let newCounterValue = Number(counter.innerHTML) - 1;
    // Update the counter in the HTML tree:
    counter.innerHTML = newCounterValue;
    // Only update the counter value on the screen if the counter is > 0:
    if (counter.innerHTML > 0) {
        counter.innerHTML = newCounterValue;
    }
    // If the counter drops below 10, change the text color to black:
    if (newCounterValue < 10) {
        counter.style.color = "black";
    }
    // Only update the counter value on the screen if the counter is > 0:
    if (counter.innerHTML > 0) {
        counter.innerHTML = newCounterValue;
    }
})

