import React from 'react';
import { useRecoilValue } from 'recoil';
import { postAtom } from '../atoms/postAtom.jsx';
import CreatePost from '../components/CreatePost.jsx';
import PostCard from '../components/PostCard.jsx';

const Home = () => {
  const posts = useRecoilValue(postAtom);

  return (
    <div>
      <CreatePost />
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Home;