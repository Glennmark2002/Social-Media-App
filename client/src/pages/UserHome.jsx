import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../components/Post";

function UserHome() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const res = await axios.get('https://social-media-app-gje5.vercel.app/api/post')
      setPosts(res.data)
    }

    fetchData();
    // const interval = setInterval(fetchData, 5000); // Fetch every 5 seconds
    // return () => clearInterval(interval); // Cleanup on unmount

  }, []);

  return (
    <div className='max-w-sm w-full md:max-w-xl ' >
      {posts.map(post => <Post key={post._id} post={post} />)}
    </div>
  );
}

export default UserHome;
