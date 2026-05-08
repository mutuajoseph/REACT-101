import {useState, useEffect} from "react";
import { fetchPostsData } from "../../../services";
import { postContext } from "./postContext";

export const PostProvider = ({children}) => {
     const [postList, setPostList] = useState([]);
     const [loading, setLoading] = useState(false);

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

  return (
    <postContext.Provider value={[postList, loading, setPostList, setLoading]}>
        {children}
    </postContext.Provider>
  )
}