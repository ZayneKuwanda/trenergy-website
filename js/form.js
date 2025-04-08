const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default submission behavior

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (name && email && message) {
        alert('Thank you for your message!');
        form.reset(); // Clear the form after submission
    } else {
        alert('Please fill out all fields correctly.');
    }
});
