function sadCard(num) {
    localStorage.setItem("postId", num);
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((data) => {
            // console.log(data)
            let postLayout = document.getElementById('post-layout')
            let html = "";
            data.forEach(e => {
                html += `
        
                <div class=" col-lg-4 col-md-6 col-sm-12 mb-3">
                    <a href = "post.html" class="text-decoration-none text-black" onclick="sadCard(${e.id})">
                        <div class="card h-100" title="see post" id='${e.id}'>
                            <div class="card-body" id='${e.id}'>
                                <h6 class="post-body text-center text-primary">${e.id}</h6>
                                <h5 class="post-title mb-4">${e.title}</h5>
                                <p class="post-body">${e.body}</p>
                            </div>
                        </div>
                    </a>
                </div>
            
            `

                var dataPost = localStorage.setItem("data", JSON.stringify(data));
                postLayout.innerHTML = html
            })

        })
}



getPosts();