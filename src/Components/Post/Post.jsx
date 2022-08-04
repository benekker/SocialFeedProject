
import './Post.css';

const Post = ({props}) => {

    return (
        <div>
            <hr/>
            <strong>{props.name}</strong>
            <p>{props.post}</p>
            
        </div>
    )
}
export default Post;