document.addEventListener('DOMContentLoaded', () => {
    const postsSection = document.getElementById('posts-section');
    const postForm = document.getElementById('post-form');
    const postIdInput = document.getElementById('post-id');
    const titleInput = document.getElementById('title');
    const dateInput = document.getElementById('date');
    const excerptInput = document.getElementById('excerpt');

    let posts = [];

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const postId = postIdInput.value;
        const title = titleInput.value;
        const date = dateInput.value;
        const excerpt = excerptInput.value;

        if (postId) {
            const post = posts.find(post => post.id === postId);
            post.title = title;
            post.date = date;
            post.excerpt = excerpt;
        } else {
            const id = `post-${Date.now()}`;
            posts.push({ id, title, date, excerpt });
        }

        postIdInput.value = '';
        postForm.reset();
        renderPosts();
    });

    function renderPosts() {
        postsSection.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.classList.add('blog-post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p class="date">${post.date}</p>
                <p class="excerpt">${post.excerpt}</p>
                <button class="edit" onclick="editPost('${post.id}')">Edit</button>
                <button class="delete" onclick="deletePost('${post.id}')">Delete</button>
            `;
            postsSection.appendChild(postElement);
        });
    }

    window.editPost = (id) => {
        const post = posts.find(post => post.id === id);
        postIdInput.value = post.id;
        titleInput.value = post.title;
        dateInput.value = post.date;
        excerptInput.value = post.excerpt;
    };

    window.deletePost = (id) => {
        posts = posts.filter(post => post.id !== id);
        renderPosts();
    };
});
