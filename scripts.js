// Task 01: Counter Increment
let counter = 0;
document.getElementById("incrementButton").addEventListener("click", function() {
    counter++;
    document.getElementById("counter").textContent = counter;
});

// Task 02: Key Press Info
document.addEventListener("keydown", function(event) {
    document.getElementById("keyCode").textContent = event.keyCode;
    document.getElementById("keyValue").textContent = event.key;
});

// Task 03: Form Validation
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = "";

    if (username.length < 5) {
        errorMessage += "Username must be at least 5 characters long.<br>";
    }
    if (password.length < 8) {
        errorMessage += "Password must be at least 8 characters long.<br>";
    }

    if (errorMessage) {
        document.getElementById("errorMessage").innerHTML = errorMessage;
    } else {
        alert("Form submitted successfully!");
        // Normally form submission would happen here
    }
});
