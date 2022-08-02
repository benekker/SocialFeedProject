import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import CreatePost from './Components/CreatePost/CreatePostForm';

function App() {





  return (
    <div className='App'>
    <div>
      <NavBar />
    </div>
    <div>
      <CreatePost />
    </div>
    </div>
  );
}

export default App;
