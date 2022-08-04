import React, { useState } from 'react';
import './CreatePostForm.css';

const CreatePost = (props) =>{
    const [name, setName] = useState('');
    const [postText, setPostText] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newPost ={
            name: name,
            postText: postText,
        };
        console.log(newPost)
        props.addNewPost(newPost)
    }

    return(
        <form onSubmit={handleSubmit} className='form'>
            <div className='postBox'>
            <div className='form-group'>
                <div className='nameLabel'>
                    <label>Name</label>
                </div>
                <div className='nameInputBox'>
                    <textarea
                        type='text'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        ></textarea>
                </div>              
            </div>
            <div className='form-group'>
                <div className='postLabel'>
                    <label>Post</label>
                </div>
                <div className='postInputBox'>
                    <textarea
                        type='text'
                        value={postText}
                        onChange={(event) => setPostText(event.target.value)}
                        ></textarea>
                </div>   
            </div>
            <div className='button'>
                <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Create</button>
            </div>
            </div>
        </form>
    )

}
export default CreatePost;