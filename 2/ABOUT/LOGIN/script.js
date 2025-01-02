// Elements for toggling and form handling
const formTitle = document.getElementById("form-title");
const submitBtn = document.getElementById("submit-btn");
const emailGroup = document.getElementById("email-group");
const confirmPasswordGroup = document.getElementById("confirm-password-group");
const toggleForm = document.getElementById("toggle-form");

let isLogin = true; // State tracking for Login or Signup

// Toggle between Login and Signup views
toggleForm.addEventListener("click", () => {
    if (isLogin) {
        // Switch to Signup
        formTitle.textContent = "Sign Up";
        emailGroup.style.display = "block";
        confirmPasswordGroup.style.display = "block";
        submitBtn.textContent = "Sign Up";
        toggleForm.textContent = "Login";
        isLogin = false;
    } else {
        // Switch to Login
        formTitle.textContent = "Login";
        emailGroup.style.display = "none";
        confirmPasswordGroup.style.display = "none";
        submitBtn.textContent = "Login";
        toggleForm.textContent = "Sign Up";
        isLogin = true;
    }
});

// Handle form submission
submitBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (isLogin) {
        // Login Validation
        const storedUser = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        if (username === storedUser && password === storedPassword) {
            alert("Login successful!");
            // Redirect to another page
            window.location.href = "./MAIN/index.html";
        } else {
            alert("Invalid username or password!");
        }
    } else {
        // Signup Validation
        if (username && email && password && confirmPassword) {
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
            } else {
                // Save credentials in local storage
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                alert("Signup successful! You can now log in.");
                // Switch back to login
                toggleForm.click();
            }
        } else {
            alert("Please fill in all fields!");
        }
    }
});
