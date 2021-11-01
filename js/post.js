
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => {
     
        let postLayout = document.getElementById('post-layout')
      
        let contents = "";
        data.forEach(e => {
            contents += `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-end">
                        <h5 class="mx-2 text-danger">${e.id}</h5>
                        </div>

                        <h5 class="post-title mb-4">${e.title}</h5>
                        <p class="post-body">${e.body}</p>
                    </div>
                    <div class="text-center py-2">
                        <button type="submit" id="click" onclick="page(${e.id})" class="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
            `
            postLayout.innerHTML =  contents

        });
    })
}

getPosts();


function page(id) {
    localStorage.setItem("postid", id);
    
    postId = localStorage.getItem("postid");
    console.log(postId);

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then((e) => {
        let postLayout = document.getElementById('post-layout')
        let contents = "";
            contents = `
            <div class="p-5">
                <div class="card bg-secondary" onclick="page()">
                    <div class="card-body">
                        <div class="d-flex justify-content-end">
                        <h5 class="mx-2 text-white">${e.id}</h5>
                        </div>

                        <h5 class="post-title mb-4 text-white">${e.title}</h5>
                        <p class="post-body text-white">${e.body}</p>
                    </div>
                    <div class="text-center py-2">
                        <a href="index.html"><button type="submit" class="btn btn-primary text-white text-center"> > All Posts</button></a>
                    </div>
                </div>
            </div>
            `
            postLayout.innerHTML =  contents
           

        });
    
}

