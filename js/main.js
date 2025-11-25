/*console.log("JavaScript is working!");
alert("Welcome to The Daily Spark!");


document.querySelectorAll('.blog-card button').forEach(button => {
  button.addEventListener('click', () => {
    alert("Feature coming soon! This will open the full post.");
  });
});*/

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const posts = document.querySelectorAll(".blog-card");

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const value = searchInput.value.toLowerCase();

            posts.forEach(post => {
                const title = post.querySelector("h2").textContent.toLowerCase();

                if (title.includes(value)) {
                    post.style.display = "block";   // show
                } else {
                    post.style.display = "none";    // hide
                }
            });
        });
    }
});


const menuToggle = document.getElementById("menuToggle");
const navList = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", () => {
    navList.classList.toggle("show");
});


// Check login state and update menu
const isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn === "true") {
    document.getElementById("addPostLink").style.display = "block";
    document.getElementById("contactLink").style.display = "block";

    document.querySelector('a[href="login,registration/login.html"]').style.display = "none";
    document.querySelector('a[href="login,registration/register.html"]').style.display = "none";

    document.getElementById("logoutLink").style.display = "block";
}


