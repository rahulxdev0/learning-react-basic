import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../API/util";

const ViewPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPost = async () => {
    try {
        setLoading(true);
      const response = await fetch(`${API_URL}posts/${id}`);
      const data = await response.json();
      console.log(data);
      setPost(data);
    } catch (error) {
      console.error(error);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    getPost(id);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{post.title}</div>;
};

export default ViewPost;
