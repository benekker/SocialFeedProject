
const DisplayPosts = (props) =>{
    return (
        
        <div>
            {props.parentPost.map((post, index) =>{
                return(
                    <div key={index}>
                        <p className="postName">{post.name}</p>
                        <p className="postText">{post.postText}</p>
                    </div>
                );
            })}
        </div>
    )
}
export default DisplayPosts;