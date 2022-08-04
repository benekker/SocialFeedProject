import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import CreatePost from './Components/CreatePost/CreatePostForm';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';


function App() {
  const [createdPosts, setcreatedPosts] = useState([]);

  function addNewPost(post) {
    let inputPosts = [...createdPosts, post];

    setcreatedPosts(inputPosts);
  }




  return (
    <div className='App'>
      <NavBar />
      <div className='content'>
        <CreatePost addNewPost={addNewPost} />
        <DisplayPosts parentPost={createdPosts} />
      </div>
    </div>
    
  );
}

export default App;
