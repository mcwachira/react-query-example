import {useMutation, useQuery} from "@tanstack/react-query";


const POSTS = [
    {id:1, title:"POST 1"},
    {id:2, title:"POST 2"}
]
function App() {

    const postQuery = useQuery({
        queryKey:["posts"],
        queryFn:() => wait(1000).then(() => [...POSTS]),

    })

    const newPostMutation = useMutation({
        mutationFn:(title:string) => {
            return wait(1000).then(() => POSTS.push({id:crypto.randomUUID(), title}))
        }
    })

    if(postQuery.isLoading) return <h1>Loading ...</h1>

    if(postQuery.isError){
        return <pre>{JSON.stringify(postQuery.error )}</pre>
    }
    return (
        <>
            <div>

                {
                    postQuery.data.map((post) => <div key={post.id}>
                        {post.title}
                    </div>)
                }

                <button disabled={newPostMutation.isLoading} onClick={() => newPostMutation.mutate("this is a new post")}>
                    Add POST
                </button>
            </div>
        </>
    )
}


export default App



const wait = (duration:number) => {
    return new Promise(resolve => setTimeout(resolve, duration))
}


