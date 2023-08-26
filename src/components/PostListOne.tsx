import {getPosts} from "../api/posts.ts";
import {useQuery} from "@tanstack/react-query";





const PostListOne = () => {
    const postQuery = useQuery({
        queryKey:['posts'],
        queryFn:getPosts,
        // refetchInterval:10000,
    })

    if(postQuery.isLoading) return <h1>Loading ...</h1>

    if(postQuery.isError){
        return <pre>{JSON.stringify(postQuery.error )}</pre>
    }
    return (
      <div>

          {postQuery.data.map((post) => <div key={post.id}>

              <div>
                  {post.id} :    {post.title}
              </div>

          </div>)}
      </div>
    )
}
export default PostListOne
