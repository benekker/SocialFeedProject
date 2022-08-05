import React, { useState } from 'react';
import like from "./Images/icons8-thumbs-up-100.png"
import dislike from "./Images/icons8-thumbs-down-100.png"
import "./PostButtonGroup.css"

const PostButtonGroup = (props) =>{

    const [likeButtonClass, setLikeButtonClass] = useState("likeInactive");
    const [dislikeButtonClass, setDislikeButtonClass] = useState("likeInactive");

    function likeHandleClick(){
        if (likeButtonClass === "likeInactive"){
            setLikeButtonClass("likeActive")
            setDislikeButtonClass("dislikeInactive")
        }
        else{
            setLikeButtonClass("likeInactive")
        }
    }
    
    function dislikeHandleClick(){
        if (dislikeButtonClass === "dislikeInactive"){
            setDislikeButtonClass("dislikeActive")
            setLikeButtonClass("likeInactive")
        }
        else{
            setDislikeButtonClass("dislikeInactive")
        }
    }

        return(
            <div className='buttonWrap'>
                <button className={likeButtonClass} onClick={likeHandleClick}>
                    <img src={like} alt='like button' />
                </button>
                <button className={dislikeButtonClass} onClick={dislikeHandleClick}>
                    <img src={dislike} alt='dislike button' />
                </button>
            </div>
        )
}
export default PostButtonGroup