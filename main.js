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
function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                let lastElemnt = posts.pop();
                resolve(lastElemnt);

            }
            else {
                reject('Array is Empty now')
            }

        }, 1000)

    });
}

creatPost({ title: 'post three', body: 'this is post three' })
    .then(() => {
        getPost();
        deletePost().then(() => {
            getPost();
            deletePost().then(() => {
                getPost();
                deletePost().then(() => {
                    getPost();
                    deletePost().then(() => { })
                        .catch((error) => {
                            console.log('inside catch block', error)
                        })
                })
                    .catch((err) => { console.log('delete post three', err) });
            })
                .catch((err) => { console.log('delete post two', err) });


        })
            .catch((err) => { console.log('delet post one', err) });

    })
    .catch(err => console.log(err));

