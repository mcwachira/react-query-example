

//fetch data  properly

// /post -> ["post"]
// /post/1 -> ["post", post.id]
// /posts?authorId=1 -> ["post", .{authorId:1}]
// /posts/2/comments -> ["posts", post.id, "comments"]
import PostListOne from "./components/PostListOne.tsx";
import PostListTwo from "./components/PostListTwo.tsx";
import {useState} from "react";
import Post from "./components/Post.tsx";


function App() {

    const [currentPage, setCurrentPage] = useState(<PostListOne/>)
return (
<>


    <button onClick={() => setCurrentPage(<PostListOne/>)}>
        POST LIST 1
    </button>

    <button onClick={() => setCurrentPage(<PostListTwo/>)}>
        POST LIST 2
    </button>


    <button onClick={() => setCurrentPage(<Post id={1}/>)}>
        First Post
    </button>
    <br/>

    {currentPage}

</>
  )
}


export default App




