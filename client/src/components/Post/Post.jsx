import "./post.css";
import PostImage from "../../assets/images/blog-post-img.jpg";

const Post = () => {
    return (
        <div className="post">
            <img src={PostImage} className="postImage" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor</span>
                <hr />
                <span className="postDate"> 1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
                repudiandae reprehenderit deserunt exercitationem? Dolorem quasi qui,
                possimus aut ut temporibus natus iure corrupti sed delectus, soluta
                sapiente, blanditiis aspernatur adipisci!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
                repudiandae reprehenderit deserunt exercitationem? Dolorem quasi qui,
                possimus aut ut temporibus natus iure corrupti sed delectus, soluta
                sapiente, blanditiis aspernatur adipisci!Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
                repudiandae reprehenderit deserunt exercitationem? Dolorem quasi qui,
                possimus aut ut temporibus natus iure corrupti sed delectus, soluta
                sapiente, blanditiis aspernatur adipisci!
            </p>
        </div>
    );
};

export default Post;
