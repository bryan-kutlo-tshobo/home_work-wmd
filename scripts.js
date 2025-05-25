// Wait for DOM to load before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Get the contact form element
    const form = document.getElementById('contactForm');
    if (form) {
        // Add submit event listener to the form
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission
            let isValid = true;

            // Get form fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            // Reset validation states
            [name, email, message].forEach(field => {
                field.classList.remove('is-invalid');
                field.nextElementSibling.style.display = 'none';
            });

            // Validate name field
            if (!name.value.trim()) {
                name.classList.add('is-invalid');
                name.nextElementSibling.style.display = 'block';
                isValid = false;
            }

            // Validate email field with regex pattern
            const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
            if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
                email.classList.add('is-invalid');
                email.nextElementSibling.style.display = 'block';
                isValid = false;
            }

            // Validate message field
            if (!message.value.trim()) {
                message.classList.add('is-invalid');
                message.nextElementSibling.style.display = 'block';
                isValid = false;
            }

            // If form is valid, show success message and reset form
            if (isValid) {
                alert('Form submitted successfully!');
                form.reset();
            }
        });
    }
});