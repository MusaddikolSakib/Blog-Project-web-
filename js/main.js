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


