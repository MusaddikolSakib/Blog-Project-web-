const postForm = document.getElementById('postForm');

if (postForm) {
  postForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const image = document.getElementById('image').value;
    const content = document.getElementById('content').value;

    console.log("Post Submitted:");
    console.log("Title:", title);
    console.log("Image:", image);
    console.log("Content:", content);

    alert("Post submitted successfully! (Temporary test)");
  });
}
