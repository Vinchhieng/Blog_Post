
const blogPosts = [
    {
        title: "Life as a University Student",
        content: "University life is full of challenges and opportunities. From assignments and group projects to meeting new people, every day brings something new to learn."
    },
    {
        title: "My Coding Journey",
        content: "I started learning web development with HTML, CSS, and JavaScript. It's exciting to see how a few lines of code can turn into a working website!"
    },
    {
        title: "Web Development Tips",
        content: "Always write clean and maintainable code. Use meaningful variable names and comment your code when necessary. The more you practice, the better you become."
    }
]

// Create a blog post
const createPost = (post) => {
    const container = document.getElementById("blog-container")

    const card = document.createElement("div")
    card.classList.add("blog-post")

    const header = document.createElement("div")
    header.classList.add("post-header")

    const title = document.createElement("h2")
    title.textContent = post.title

    const editTitleBtn = document.createElement("button")
    editTitleBtn.textContent = "Edit Title"
    editTitleBtn.addEventListener("click", () => {
        const newTitle = prompt("Enter new title:", title.textContent)
        if (newTitle && newTitle.trim()) {
            title.textContent = newTitle.trim()
        }
    })

    header.appendChild(title)
    header.appendChild(editTitleBtn)

    const content = document.createElement("p")
    content.textContent = post.content

    const actions = document.createElement("div")
    actions.classList.add("post-actions")

    const editContentBtn = document.createElement("button")
    editContentBtn.textContent = "Edit Content"
    editContentBtn.addEventListener("click", () => {
        const newContent = prompt("Enter new content:", content.textContent)
        if (newContent && newContent.trim()) {
            content.textContent = newContent.trim()
        }
    })

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete Post"
    deleteBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this post?")) {
            card.remove()
        }
    })

    actions.appendChild(editContentBtn)
    actions.appendChild(deleteBtn)

    card.appendChild(header)
    card.appendChild(content)
    card.appendChild(actions)

    container.appendChild(card)
}

// Add a new blog post
const addPost = () => {
    const title = prompt("Enter blog post title:")
    if (!title || !title.trim()) return

    const content = prompt("Enter blog post content:")
    if (!content || !content.trim()) return

    createPost({
        title: title.trim(),
        content: content.trim()
    })
}

// Display initial posts
window.onload = () => {
    blogPosts.forEach((post) => createPost(post))

    document.getElementById("add-post-btn")
        .addEventListener("click", addPost)
}
