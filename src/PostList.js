import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const baseUrl = "https://jsonplaceholder.typicode.com";
  useEffect(() => {
    axios.get(`${baseUrl}/posts`).then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      <h1>List of Posts</h1>
      {posts.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </div>
  );
}
