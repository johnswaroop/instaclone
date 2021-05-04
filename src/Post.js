
import { useEffect, useState } from 'react'
import useFetchImage from './hooks/useFetchImage'



const Post = (props) => {


    let imageUrl = useFetchImage(500);
    let profileUrl = useFetchImage(400);
    let [profile, setProfile] = useState('');


    useEffect(() => {
        fetch('https://randomuser.me/api/').then((Response) =>
            Response.json()).then((data) => {
                console.log(data.results[0].name.first);
                setProfile(data.results[0].name.first);
            })
    }, []);




    return (
        <div className='post-container'>

            <div className='user-info'>
                <img className='dp' src={profileUrl} alt="" />
                <span className='user-info-text'>
                    <h1>{profile}</h1>
                    <h3>3 hours ago</h3>
                </span>
                <img src="" alt="" />
            </div>

            <div className='image-container'>
                <img src={imageUrl} alt="" />


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













