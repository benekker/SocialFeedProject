import './DisplayPosts.css'
import PostButtonGroup from '../LikeButton/PostButtonGroup';

const DisplayPosts = (props) =>{
    return (

        <div className='wrap'>
            {props.parentPost.map((post, index) =>{
                return(
                    <div key={index} className='postFeed'>
                        <div className='feedContent' >
                            <h3 className="postName">{post.name}</h3>
                            <p className="postText">{post.postText}</p>
                        </div>
                        <div className='likeButtonWrap'>
                            <PostButtonGroup/>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
export default DisplayPosts;