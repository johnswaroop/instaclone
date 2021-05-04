import React, { useEffect, useState } from 'react'
import Story from './Story'
import Post from './Post'
import Yscroll from './Yscroll'

const Phone = (props) => {





    return (
        <div className='phone'>
            <div className='nav'>
                <img id='camera' src='/images/camera.png' alt="" />
                <img id='logo' src="/images/instagram_logo.svg" alt="" />
                <img id='message' src="/images/send.png" alt="" />
            </div>

            <Yscroll>
                <Story />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </Yscroll>



        </div>
    )
}

export default Phone;