// Menu Toggle

document.getElementById("menu-toggle").addEventListener('click', () => {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle('visible');
});

// Form Validation

document.getElementById('contact-form').addEventListener('submit',function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const response = document.getElementById('form-response');

    if (!name || !email || !message) {
        response.textContent = "Please fill in all fields.";
        response.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        response.textContent = "Please enter a valid email address.";
        response.style.color = "red";
        return;
    }

    response.textContent = "Thank you for your message," + name + "!";
    response.style.color = "green";

    // Optionally reset form

    this.reset();
});