import './DisplayPosts.css'
import LikeButton from '../LikeButton/LikeButton';

const DisplayPosts = (props) =>{
    return (

        <div className='wrap'>
            {props.parentPost.map((post, index) =>{
                return(
                    <div key={index} className='postFeed'>
                        <div className='feedContent' >
                            <h3 className="postName">{post.name}</h3>
                            <p className="postText">{post.postText}</p>
                            <LikeButton/>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
export default DisplayPosts;