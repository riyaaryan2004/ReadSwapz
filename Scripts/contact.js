document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const statusMessage = document.getElementById("form-status");

    // Check if all fields are filled out
    if (!name || !email || !message) {
        statusMessage.textContent = "Please fill out all fields.";
        statusMessage.style.color = "red";
        statusMessage.style.fontWeight = "bold"; // Make text bold
        statusMessage.style.opacity = "0.8"; // Slightly darken the text
        return;
    }

    // Simple email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        statusMessage.textContent = "Please enter a valid email address.";
        statusMessage.style.color = "red";
        statusMessage.style.fontWeight = "bold"; // Make text bold
        statusMessage.style.opacity = "0.8"; // Slightly darken the text
        return;
    }

    // Display success message after form submission
    statusMessage.textContent = "Thank you for reaching out. We will get back to you soon!";
    statusMessage.style.color = "#000000";
    statusMessage.style.fontWeight = "bold"; // Make text bold
    statusMessage.style.opacity = "0.9"; // Slightly darken the text
    
    // Reset form (optional)
    document.getElementById("contact-form").reset();
});
