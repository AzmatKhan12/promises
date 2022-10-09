const posts = [
    { title: 'post one', body: 'this is first post' },
    { title: 'post two', body: 'this is second post' }
]

function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`

        })
        document.body.innerHTML = output

    }, 1000);
}

function creatPost(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(x);
            const error = false;
            if (!error) {
                resolve()
            }
            else {
                reject('Error : Something went weong')
            }

        }, 2000);

    });
}

creatPost({ title: 'post three', body: 'this is post three' }).then(getPost)
    .catch(error => console.log(error));
