import React, { useState } from 'react';
import like from "./Images/icons8-facebook-like-50.png"
import dislike from "./Images/icons8-dislike-64.png"
import "./LikeButton.css"

const LikeButton = (props) =>{

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
export default LikeButton