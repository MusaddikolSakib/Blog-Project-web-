window.toggleMenu = function(postId) {
    const menu = document.getElementById(`menu-${postId}`);
    if (menu) menu.classList.toggle("show");
}

// Close menu when clicking outside
document.addEventListener("click", function(event) {
    const menus = document.querySelectorAll(".dots-dropdown");
    menus.forEach(menu => {
        if (!menu.contains(event.target) && !event.target.classList.contains("dots")) {
            menu.classList.remove("show");
        }
    });
});



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

    // ------------------ Load Blog Posts with Edit/Delete ------------------
    function displayPosts() {
        const savedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
        blogCardsContainer.innerHTML = "";

        savedPosts.forEach(post => {
            blogCardsContainer.innerHTML += `
                <article class="blog-card">
                    <div class="dots-menu">
                        <span class="dots" onclick="toggleMenu(${post.id})">⋮</span>
                        <div id="menu-${post.id}" class="dots-dropdown">
                            <p onclick="editPost(${post.id})">Edit</p>
                            <p onclick="deletePost(${post.id})">Delete</p>
                        </div>
                    </div>
                    <img src="${post.image || 'image/default.jpg'}" alt="Post Image">
                    <h2>${post.title}</h2>
                    <p>${post.description || post.content.substring(0, 100) + '...'}</p>
                    <button onclick="alert('Full post coming soon!')">Read More</button>
                </article>
            `;
        });
    }

    displayPosts();

    // ------------------ Toggle 3-dot menu ------------------
    window.toggleMenu = function(postId) {
        const menu = document.getElementById(`menu-${postId}`);
        if (menu) menu.classList.toggle("show");
    }

    // ------------------ Delete Post ------------------
    window.deletePost = function(postId) {
        if (confirm("Are you sure you want to delete this post?")) {
            let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
            posts = posts.filter(p => p.id !== postId);
            localStorage.setItem("blogPosts", JSON.stringify(posts));
            displayPosts();
        }
    }

    // ------------------ Edit Post ------------------
    window.editPost = function(postId) {
        window.location.href = `edit-post/edit-post.html?id=${postId}`;
        //alert("Edit post feature coming soon!");
        // You can later implement a form to edit the post
    }

});
