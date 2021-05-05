import { useState } from "react";

const PostInfo = (props) => {

    let likeImg;
    let likes = props.likes;

    if (props.liked()) {
        likeImg = "/images/heartRed.png";
        likes = likes + 1;
    }
    else {
        likeImg = "/images/heart.png";


    }

    function delike() {
        props.delike();
    }


    return (
        <div className='post-info'>
            <div className='likes'>
                <img className='likes-img' src={likeImg} alt="" onClick={delike} />
                <p className='likes-count'>{likes}</p>
            </div>

            <div className='comments'>
                <img className='comments-img' src="/images/comment.png" alt="" />
                <p className='comments-count'>{props.comments}</p>
            </div>

        </div>
    )
}

export default PostInfo;