// Variables
let postsContainer = document.getElementById("posts");

// Function: Add a new blog post
function addPost() {
  // Variables
  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;

  // Operation: Check if title or content is empty
  if (title === "" || content === "") {
    alert("Fadlan buuxi ciwaanka iyo qoraalka maqaalka!");
    return;
  }

  // Operation: Create HTML structure
  let postHTML = `
        <div class="post">
            <h3>${title}</h3>
            <p>${content}</p>
        </div>
    `;

  // Operation: Add the post to the DOM
  postsContainer.innerHTML += postHTML;

  // Clear inputs
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}
