
const Post = (props) => {




    return (
        <div className='post-container'>

            <div className='user-info'>
                <img className='dp' src="https://picsum.photos/60" alt="" />
                <span className='user-info-text'>
                    <h1>Doug wilson</h1>
                    <h3>3 hours ago</h3>
                </span>
                <img src="" alt="" />
            </div>

            <div className='image-container'>
                <img src="https://picsum.photos/500" alt="" />


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













