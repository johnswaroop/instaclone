import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Storyimg from './Storyimg'
import useChangeStory from "./hooks/useChangeStory";


const FullStory = (props) => {

    // console.log(props.storybook);
    //  console.log(props.src);
    let timer;

    let [img, closeStory] = useChangeStory(props.storybook, props.src);




    return (

        <div className='story-fullscreen'   >
            <div className="progress-body" >

                <motion.div key={img} initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 3 }}
                    className='progress-inner'></motion.div>
            </div>

            <Storyimg src={img} />

            <div className='cancel' onClick={() => { closeStory(); props.toggle(); }}>
                <h1>X</h1>
            </div>

        </div >
    )
}

export default FullStory;