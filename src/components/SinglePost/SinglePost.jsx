import "./singlepost.css";
import SinglePostImage from "../../assets/images/blog-post-img.jpg";

const SinglePost = () => {
    return (
        <div className="singlepost">
            <div className="singlePostWrapper">
                <img src={SinglePostImage} className="singlepostImage" alt="" />
            <h1 className="singlePostTitle">
                Lorem, ipsum dolor.
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singleAuthor">
                    Author: <strong>Habeeb</strong>
                </span>
                <span className="singlePostDate">1 hour ago </span>
            </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, at
                    molestiae. Tempore voluptas est, voluptate, possimus consectetur
                    labore delectus alias numquam cum similique reprehenderit ipsa.
                </p>
            </div>
        </div>
    );
};

export default SinglePost;
