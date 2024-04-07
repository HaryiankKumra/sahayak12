document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.pop-image').style.display = 'block';
        document.querySelector('.pop-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.pop-image span').onclick = () => {
    document.querySelector('.pop-image').style.display = 'none';
}
// Get the form and input element
const form = document.getElementById('myForm');
const textInput = document.getElementById('textInput');

// Add event listener to the form for submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  
  // Clear the text input value
  textInput.value = '';
});
