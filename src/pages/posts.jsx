import { useRef, useState, useEffect} from "react";
import { fetchPostsData } from "../../services";

export const Posts = () => {

 const [postList, setPostList] = useState([]);
 const [loading, setLoading] = useState(false);

 const newPostRef = useRef("");

 useEffect(() => {

    // fetch posts data
    const fetchPosts = async () => {
        setLoading(true);
        const posts = await fetchPostsData();
        setPostList(posts);
        setLoading(false);
      };
    fetchPosts();
  }, []);

  const handleSubmitPostRef = (event) => {
    event.preventDefault();
    setPostList(() => {
      return [...postList, { title: newPostRef.current.value }];
    });
  };

  return (
    <>
      <div>
        <h3> Add User Post</h3>
        <input
          type="text"
          placeholder="Enter new post title"
          ref={newPostRef}
        />
        <button type="submit" onClick={handleSubmitPostRef}>
          {" "}
          Add Post
        </button>
      </div>

        <div style={{ marginTop: "20px" }}>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            {postList.length === 0 ? (
              <h2>No Post Found</h2>
            ) : (
              postList.map((post, index) => (
                // < key={index} title={post.title} />
                <div key={index}>{post.title}</div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};
