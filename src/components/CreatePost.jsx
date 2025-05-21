import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { postAtom } from '../atoms/postAtom.jsx';
import { authAtom } from '../atoms/authAtom.jsx';

const CreatePost = () => {
  const [content, setContent] = useState('');
  const [posts, setPosts] = useRecoilState(postAtom);
  const { user } = useRecoilValue(authAtom);

  const handleSubmit = () => {
    if (!content.trim()) return;
    const newPost = {
      _id: Date.now().toString(),
      content,
      createdAt: new Date(),
      user,
    };
    setPosts([newPost, ...posts]);
    setContent('');
  };

  return (
    <div>
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
};

export default CreatePost;