import React, { useState } from 'react';
import './CreatePostForm.css';

const CreatePost = (props) =>{
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newPost ={
            name: name,
            post: post,
        };
        console.log(newPost)
    }

    return(
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='postBox'>
            <div className='form-group'>
                <div className='nameLabel'>
                    <label>Name</label>
                </div>
                <div className='nameInputBox'>
                    <input type= 'text' className='form-control'  />
                </div>              
            </div>
            <div className='form-group'>
                <div className='postLabel'>
                    <label>Post</label>
                </div>
                <div className='postInputBox'>
                    <input type= 'text' className='form-control' />
                </div>   
            </div>
            <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Create</button>
            </div>
        </form>
    )

}
export default CreatePost;