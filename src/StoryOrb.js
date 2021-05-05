
import { useEffect, useState } from 'react';
import useFetchImage from './hooks/useFetchImage'
import StoryLog from './hooks/StoryLog';


const StoryOrb = (props) => {

    let storyUrl = useFetchImage(500);

    function clickHandle(e) {
        props.onClick(storyUrl)
    }

    if (storyUrl != '/images/white.png') {

        props.updateLog(storyUrl);

        return (
            <div className='story-orb' onClick={clickHandle}>
                <img src={storyUrl} alt="" />
            </div>
        )


    }
    else {
        return null
    }




}

export default StoryOrb;