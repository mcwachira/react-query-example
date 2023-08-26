import axios from "axios";

export const getPosts = async() => {

    const {data} =await axios.get('https://jsonplaceholder.typicode.com/posts')

    console.log(data)

    return data


}

export const getPost = async(id:string) => {

    const {data} =await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

    console.log(data)

    return data


}

export const getUser = async(id:string) => {

    const {data} =await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

    console.log(data)

    return data


}

export const createPosts = async(title:string, body:string) => {

    const {data} =await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
        userId: 1
    // },    headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    // },
    })

    console.log(data)

    return data


}

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));