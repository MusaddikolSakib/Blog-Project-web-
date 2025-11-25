// Check login status on page load
const isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn === "true") {
    // Show protected links
    document.getElementById("addPostLink").style.display = "block";
    document.getElementById("contactLink").style.display = "block";

    // Hide Login & Register
    document.getElementById("loginLink").style.display = "none";
    document.getElementById("registerLink").style.display = "none";

    // Show Logout
    document.getElementById("logoutLink").style.display = "block";
} else {
    // Hide protected links
    document.getElementById("addPostLink").style.display = "none";
    document.getElementById("contactLink").style.display = "none";

    // Show Login & Register
    document.getElementById("loginLink").style.display = "block";
    document.getElementById("registerLink").style.display = "block";

    // Hide Logout
    document.getElementById("logoutLink").style.display = "none";
}

// Logout functionality
document.getElementById("logoutLink")?.addEventListener("click", function(){
    localStorage.removeItem("isLoggedIn");
    alert("You have been logged out!");
    window.location.reload();
});
