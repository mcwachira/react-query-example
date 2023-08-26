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