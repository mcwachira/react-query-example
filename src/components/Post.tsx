import {useQuery} from "@tanstack/react-query";
import {getPost, getUser} from "../api/posts.ts";


type PostProps= {
    id:string,
}
const Post = ({id}:PostProps) => {

    const postQuery = useQuery({
        queryKey:["posts", id],
        queryFn:() => getPost(id)
    })

    const userQuery = useQuery({
        queryKey:["users",postQuery?.data?.userId],
        //this will query the user id once the post data is fetched
        enabled:postQuery?.data?.userId !=null,
        queryFn:() => getUser(postQuery.data.userId)
    })
    console.log(postQuery)

    if(postQuery.isLoading) return <h1>Loading ...</h1>

    if(postQuery.isError){
        return <pre>{JSON.stringify(postQuery.error )}</pre>
    }



    return (

        <>

        <h1>
            {postQuery.data.title}
            <br/>

            <small>

                {
                    userQuery.isLoading ?"Loading User ...":userQuery.isError?"Error Loading User": userQuery.data.name
                }

            </small>
        </h1>
            <div>{postQuery.data.body}</div>
        </>

    )
}
export default Post
