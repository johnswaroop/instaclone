import React, { useEffect, useState } from 'react'
import Story from './Story'

const Phone = (props) => {





    return (
        <div className='phone'>
            <div className='nav'>
                <img id='camera' src='/images/camera.png' alt="" />
                <img id='logo' src="/images/logo.png" alt="" />
                <img id='message' src="/images/send.png" alt="" />
            </div>
            <Story />


        </div>
    )
}

export default Phone;