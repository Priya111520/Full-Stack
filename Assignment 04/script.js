
document.getElementById("employeeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value.trim();
    let department = document.getElementById("department").value;
    let message = document.getElementById("message");

    if (name === "" || !/^[A-Za-z ]+$/.test(name)) {
        message.style.color = "red";
        message.textContent = "Enter a valid name.";
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.style.color = "red";
        message.textContent = "Enter a valid email.";
    }
    else if (password.length < 6) {
        message.style.color = "red";
        message.textContent = "Password must be at least 6 characters.";
    }
    else if (!/^[0-9]{10}$/.test(phone)) {
        message.style.color = "red";
        message.textContent = "Enter a valid 10-digit phone number.";
    }
    else if (department === "") {
        message.style.color = "red";
        message.textContent = "Please select a department.";
    }
    else {
        message.style.color = "green";
        message.textContent = "Employee registered successfully!";

        document.getElementById("employeeForm").reset();
    }
});
