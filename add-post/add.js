

document.getElementById("publishBtn")?.addEventListener("click", function (e) {
    e.preventDefault();

    let title = document.getElementById("postTitle").value.trim();
    let image = document.getElementById("postImage").value.trim();
    let description = document.getElementById("postDescription").value.trim();
    let content = document.getElementById("postContent").value.trim();

    if (!title || !description) {
        alert("Title and Description are required!");
        return;
    }

    // Create post object
    let newPost = {
        id: Date.now(),
        title,
        image,
        description,
        content
    };

    // Get existing posts
    let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];

    // Add new post
    posts.push(newPost);

    // Save updated posts
    localStorage.setItem("blogPosts", JSON.stringify(posts));

    alert("Post Published Successfully!");

    window.location.href = "../Index.html";
});

