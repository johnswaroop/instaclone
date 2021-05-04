
import { useEffect, useState } from 'react';
import useFetchImage from './hooks/useFetchImage'


const StoryOrb = (props) => {

    let storyUrl = useFetchImage(150);


    return (
        <div className='story-orb'>
            <img src={storyUrl} alt="" />
        </div>
    )

}

export default StoryOrb;