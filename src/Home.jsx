import React, { useEffect, useState } from "react";
import Post from "./Posts/Post";
import { useNavigate } from "react-router-dom";
import { deletePostById, getAllPosts } from "./API/Post";

const Home = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const response = await getAllPosts();
        setPostData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePostById(id)
    } catch (error) {
      console.log(error);
    }
  };

  const viewPost = (id) => {
    navigate(`/post/${id}`);
  };

  if (loading) return <div className="animate-spin text-blue-500">🔄</div>;

  return (
    <div className="p-5">
      <h2 className="text-3xl font-semibold border-b-2 border-gray-300">
        Posts
      </h2>
      <div className="mt-5">
        {postData.length > 0 ? (
          postData.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
                handleDelete={handleDelete}
                viewPost={viewPost}
              />
            );
          })
        ) : (
          <>No post found</>
        )}
      </div>
    </div>
  );
};

export default Home;
