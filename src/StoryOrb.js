
import { useEffect, useState } from 'react';
import useFetchImage from './hooks/useFetchImage'
import StoryLog from './hooks/StoryLog';
import { motion } from "framer-motion";


const StoryOrb = (props) => {

    let storyUrl = useFetchImage(500);

    function clickHandle(e) {
        props.onClick(storyUrl)
    }

    if (storyUrl != '/images/white.png') {

        props.updateLog(storyUrl);

        return (
            <motion.div initial={{ opacity: 0, scale: 0.25 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className='story-orb' onClick={clickHandle}>
                <img src={storyUrl} alt="" />
            </motion.div>
        )


    }
    else {
        return null
    }




}

export default StoryOrb;