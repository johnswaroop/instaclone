
import { useEffect, useState } from 'react'
import useFetchImage from './hooks/useFetchImage'
import useFetchJson from './hooks/useFetchJson'



const Post = (props) => {


    let imageUrl = useFetchImage(500);
    let user = useFetchJson('https://randomuser.me/api/');
    console.log(user.name.first);
    const [likeClass, setLikeClass] = useState('like-heart');

    const animate = 'slide-in-fwd-center';

    function liker() {

        console.log('liked');
        setLikeClass((likeClass) => {
            return `${likeClass} ${animate}`;
        })
    }


    return (
        <div className='post-container'>

            <div className='user-info'>
                <img className='dp' src={user.picture.thumbnail} alt="" />
                <span className='user-info-text'>
                    <h1>{user.name.first}</h1>
                    <h3>3 hours ago</h3>
                </span>
                <img src="" alt="" />
            </div>

            <div className='image-container' onDoubleClick={liker}>

                <img src={imageUrl} alt="" />

                <img className={likeClass} src="/images/like.png" alt="" />


            </div>

            <div className='post-info'>
                <div className='likes'>
                    <img className='likes-img' src="/images/heart.png" alt="" />
                    <p className='likes-count'>1000</p>
                </div>

                <div className='comments'>
                    <img className='comments-img' src="/images/comment.png" alt="" />
                    <p className='comments-count'>2000</p>
                </div>

            </div>

        </div>
    )

}

export default Post;













