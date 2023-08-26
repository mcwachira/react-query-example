import React, {useRef} from 'react'
import {useMutation} from "@tanstack/react-query";
import {createPosts} from "../api/posts.ts";
import Post from "./Post.tsx";

const CreatePost = ({setCurrentPage}) => {

    const titleRef = useRef()
    const bodyRef = useRef()

    const createPostMutation = useMutation({
        mutationFn:createPosts,
        onSuccess:(data, variables, context) => {
            setCurrentPage(<Post id={data.id}/>)
        }
    })

    const  handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        createPostMutation.mutate({
            title:titleRef.current.value,
            body:bodyRef.current.value
        })
    }
    return (
        <div>
            {JSON.stringify(createPostMutation.isError && JSON.stringify(createPostMutation.error) )}

             <h1>
                CREATE POST
            </h1>


            <form onSubmit={handleSubmit}>


                <div>

                    <label htmlFor="title">

                        Title
                    </label>

                    <input id='title' ref={titleRef}/>
                </div>





                <div>
                    <label htmlFor="title">

                        Body
                    </label>

                    <input id='body' ref={bodyRef}/>
                </div>


                <button disabled={createPostMutation.isLoading}>
                    {createPostMutation.isLoading? 'Loading ...' : "create"}

                </button>

            </form>






        </div>
    )
}
export default CreatePost
