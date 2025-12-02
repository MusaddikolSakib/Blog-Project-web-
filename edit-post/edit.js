const urlParams = new URLSearchParams(window.location.search);
const postId = Number(urlParams.get("id"));

let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
let post = posts.find(p => p.id === postId);

document.getElementById("editTitle").value = post.title;
document.getElementById("editImage").value = post.image;
document.getElementById("editContent").value = post.content;

document.getElementById("editForm").addEventListener("submit", function(e){
    e.preventDefault();

    post.title = document.getElementById("editTitle").value;
    post.image = document.getElementById("editImage").value;
    post.content = document.getElementById("editContent").value;

    localStorage.setItem("blogPosts", JSON.stringify(posts));

    alert("Post updated !");
    window.location.href = "../Index.html";
});