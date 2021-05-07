
import { useEffect, useState } from 'react'
import useFetchImage from './hooks/useFetchImage'
import useFetchJson from './hooks/useFetchJson'
import PostInfo from './PostInfo'
import { motion } from "framer-motion";



const Post = (props) => {


    let imageUrl = useFetchImage(500);
    let user = useFetchJson('https://randomuser.me/api/');
    const [likeClass, setLikeClass] = useState('like-heart');
    console.log(user.name.first);

    const [stats, setStats] = useState({
        likes: Math.floor(Math.random() * 300) + 1,
        comments: Math.floor(Math.random() * 200) + 1,
        time: Math.floor(Math.random() * 10) + 1,
    })








    function liker() {
        const animate = 'slide-in-fwd-center';
        console.log('liked');
        setLikeClass((likeClass) => {
            return `${likeClass} ${animate}`;
        })
    }

    useEffect(() => {

    }, [])

    if (imageUrl != '/images/white.png') {


        return (
            <motion.div initial={{ opacity: 0, scale: 0.70 }} animate={{ opacity: 1, scale: 1.00 }} transition={{ duration: 0.7 }}
                className='post-container'>

                <div className='user-info'>
                    <img className='dp' src={user.picture.thumbnail} alt="" />
                    <span className='user-info-text'>
                        <h1>{user.name.first}</h1>
                        <h3>{`${stats.time} hours ago`}</h3>
                    </span>
                    <img src="" alt="" />
                </div>

                <div className='image-container' onDoubleClick={liker}>

                    <img src={imageUrl} alt="" />

                    <img className={likeClass} src="/images/like.png" alt="" />


                </div>

                <PostInfo liked={
                    () => {
                        if (likeClass === 'like-heart') {
                            return false
                        }
                        else {
                            return true
                        }
                    }
                }
                    likes={stats.likes}
                    comments={stats.comments}
                    delike={
                        () => {
                            setLikeClass('like-heart');
                        }
                    }

                />



            </motion.div>
        )

    }
    else {
        return null
    }
}

export default Post;













