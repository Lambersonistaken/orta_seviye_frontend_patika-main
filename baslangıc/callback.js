// // const sayHi = (cb) => {
// //     cb();
// // };

// // sayHi(() => {
// //     console.log('Hi');
// // });


import axios from "axios";

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(data => data.json())
// .then(users => {
//     console.log("Users yuklendi",users);

//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(data => data.json())
//     .then(posts => {
//         console.log("Posts yuklendi",posts);
//     })
// })


// async function getData() {
//     const {data: users} = await axios('https://jsonplaceholder.typicode.com/users')

//     const {data: post1} = await axios('https://jsonplaceholder.typicode.com/posts/1')
         
//     const {data: post2} = await axios('https://jsonplaceholder.typicode.com/posts/2')

//     console.log("Users yuklendi", users);
//     console.log("Post1 yuklendi", post1);
//     console.log("Post2 yuklendi", post2);

// }

// getData();

const getUsers = () => {
    return new Promise(async(resolve,reject)=> {
        const {data} = await axios('https://jsonplaceholder.typicode.com/users')
        resolve(data)
       
    })
}

const getPost = (num) => {
    return new Promise(async(resolve,reject)=> {
        const {data} = await axios(`https://jsonplaceholder.typicode.com/posts/${num}`)
        console.log("BEN CALISTIM")
        resolve(data)
       
    })
}




(async () => {
    const users = await getUsers();
    console.log("Users yuklendi", users);
    const post = await getPost(1);
    console.log("Post yuklendi", post);
})()