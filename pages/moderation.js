import React, { useState, useEffect } from "react";

export default function Moderation() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://api.socialverseapp.com/admin/dashboard/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.posts))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
      <h1>Content Moderation</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.content} (Views: {post.views})
          </li>
        ))}
      </ul>
    </div>
  );
}
