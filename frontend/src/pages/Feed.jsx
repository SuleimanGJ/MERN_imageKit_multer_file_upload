import { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqcIiAPzwN4Kk_zajWverfQ4I1O4DAu5hgXFGlJJ_G6cgjXXTiAH17hE&s",
            caption: "random from internet"
        }
    ]);

    // const getPosts = async () => {

    //     const result = await axios.get("http://localhost:3000/api/posts/get-posts");
    //     const {data} = await result.data;
    //     console.log(data)
    //     setPosts(data);
    // //     return data;
    // }

    useEffect(() => {
        
        // getPosts();

        axios.get("http://localhost:3000/api/posts/get-posts")
        .then((res) => {
            console.log(res.data.data);
            // return setPosts([...posts, res.data.data])
            return setPosts(res.data.data)
    })
    }, [])

    return (
        <section className="feed-section">
            <h1>Feed</h1>

            {
                posts.length > 0 ? (
                    posts.map( (post) => (
                        <div key={post._id} className="post-card">
                            <img src={post.image} alt="image" />
                            <h3>{post.caption}</h3>
                        </div>
                    ))
                ) : <p>No Feeds</p>
            }

        </section>
    )
};

export default Feed;