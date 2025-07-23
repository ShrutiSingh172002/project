// src/pages/BlogDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogData';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) return <h2>Blog post not found</h2>;

  return (
    <div className="page-content">
      <h1>{post.title}</h1>
      <p><em>{post.date}</em></p>
      <pre style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{post.content}</pre>
    </div>
  );
};

export default BlogDetail;
