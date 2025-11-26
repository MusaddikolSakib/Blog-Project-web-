document.addEventListener("DOMContentLoaded", function () {

    // ------------------ Search Functionality ------------------
    const searchInput = document.getElementById("searchInput");
    const blogCardsContainer = document.getElementById("postContainer");

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const value = searchInput.value.toLowerCase();
            const cards = blogCardsContainer.querySelectorAll(".blog-card");

            cards.forEach(card => {
                const title = card.querySelector("h2").textContent.toLowerCase();
                card.style.display = title.includes(value) ? "block" : "none";
            });
        });
    }

    // ------------------ Mobile Menu Toggle ------------------
    const menuToggle = document.getElementById("menuToggle");
    const navList = document.querySelector(".navbar ul");

    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("show");
    });

    // ------------------ Login State ------------------
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        document.getElementById("addPostLink").style.display = "block";
        document.getElementById("contactLink").style.display = "block";

        const loginLink = document.querySelector('a[href="login,registration/login.html"]');
        const registerLink = document.querySelector('a[href="login,registration/register.html"]');

        if (loginLink) loginLink.style.display = "none";
        if (registerLink) registerLink.style.display = "none";

        document.getElementById("logoutLink").style.display = "block";
    }

    // ------------------ Load Blog Posts ------------------
    const savedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    blogCardsContainer.innerHTML = "";

    savedPosts.forEach(post => {
        blogCardsContainer.innerHTML += `
            <article class="blog-card">
                <img src="${post.image || 'image/default.jpg'}" alt="Post Image">
                <h2>${post.title}</h2>
                <p>${post.description || post.content.substring(0, 100) + '...'}</p>
                <button onclick="alert('Full post coming soon!')">Read More</button>
            </article>
        `;
    });

});
