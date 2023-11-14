const loginFormContainer = document.getElementById("login-form-container");
const loginLink = document.getElementById("login-link");

loginLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    loginFormContainer.style.display = "block";
});

window.addEventListener("click", function(event) {
    if (event.target === loginFormContainer) {
        loginFormContainer.style.display = "none";
    }
});
