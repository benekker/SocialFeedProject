import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import CreatePost from './Components/CreatePost/CreatePostForm';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';

function App() {
  const [createdPosts, setcreatedPosts] = useState([]);

  function addNewPost(post) {
    let inputEntries = [...createdPosts, post];

    setcreatedPosts(inputEntries);
  }




  return (
    <div>
      <NavBar />
      <CreatePost addNewPost={addNewPost} />
      <DisplayPosts parentPost={createdPosts} />



    </div>
    
  );
}

export default App;
