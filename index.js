const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked: false
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked: false
    },

    {
        name: "Cy Twombly",
        username: "cytwo3",
        location: "Rome, Italy",
        avatar: "images/avatar-twombly.jpg",
        post: "images/post-twombly.jpg",
        comment: "the wilder shores of love...!",
        likes: 777,
        liked: false
    },
]

const feedEl = document.getElementById("feed")

function render() {
  const html = posts.map((post, index) => `
    <article class="post">
      <div class="post-header">
        <div class="post-header-image">
          <img src="${post.avatar}">
        </div>
        <div class="post-header-text">
          <p class="account-name">${post.name}</p>
          <p class="location">${post.location}</p>
        </div>
      </div>

      <div class="post-image">
        <img src="${post.post}">
      </div>

      <div class="icon-bar">
        <img src="images/icon-heart.png" class="icon ${post.liked ? 'liked' : ''}" data-like="${index}">
        <img src="images/icon-comment.png" class="icon">
        <img src="images/icon-dm.png" class="icon">
      </div>

      <p class="likes">
        <span>${post.likes.toLocaleString()}</span> likes
      </p>

      <p class="comment">
        <span class="username">${post.username}</span> ${post.comment}
      </p>
    </article>
  `).join("")

  feedEl.innerHTML = html
}



document.addEventListener("click", function (e) {
  if (e.target.dataset.like) {
    const index = Number(e.target.dataset.like)

    posts[index].liked = !posts[index].liked
    posts[index].likes += posts[index].liked ? 1 : -1

    render()
  }
})

render()

