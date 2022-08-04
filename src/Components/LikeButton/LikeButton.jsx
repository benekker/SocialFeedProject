import React, { useState } from 'react';

const LikeButton = (props) =>{

    const [buttonClass, setButtonClass] = useState("inactive");

    function handleClick(){
        if (buttonClass === "inactive"){
            setButtonClass("active")
        }
        else{
            setButtonClass("inactive")
        }

    }
        return(
            <div>
                <button className={buttonClass} onClick={handleClick}>
                    <img src='' alt='like button' />
                </button>
            </div>
        )
}
export default LikeButton