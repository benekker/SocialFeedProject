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
                    <input type='text' className='inputNameTextBox' value={name} onChange={(event) => setName(event.target.value)} />         
            </div>
            <div className='form-group'>
                <div className='postLabel'>
                    <label>Post</label>
                </div>
                <div className='postInputBox'>
                    <textarea
                        className='postTextArea'
                        type='text'
                        value={postText}
                        onChange={(event) => setPostText(event.target.value)}
                        ></textarea>
                </div>   
            </div>
                <button type='submit' className='submitButton' style={{'margin-top': '1em'}}>Create</button>
            </div>
        </form>
    )

}
export default CreatePost;