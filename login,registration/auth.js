// Show/Hide Password
document.querySelectorAll(".toggle-pass").forEach(icon => {
    icon.addEventListener("click", () => {
        let input = icon.previousElementSibling;

        if (input.type === "password") {
            input.type = "text";
            icon.textContent = "🙈";
        } else {
            input.type = "password";
            icon.textContent = "👁";
        }
    });
});

// Login submit example
document.getElementById("loginForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "../Index.html"; // redirect to home
});


document.getElementById("logoutLink")?.addEventListener("click", function () {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();   // Refresh the page
});


// Register submit example
document.getElementById("registerForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Account created (Demo)");
    window.location.href = "login.html"; // redirect to login page
});

