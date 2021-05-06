import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FullStory = (props) => {

    console.log(props.storybook);
    console.log(props.src);
    let timer;

    const [currentIndex, setCurrentIndex] = useState(props.storybook.indexOf(props.src));




    useEffect(() => {



        timer = setInterval(() => {




            setCurrentIndex((index) => {

                if (index < props.storybook.length - 1) {


                    return index + 1;

                }
                else {
                    clearInterval(timer);
                    console.log("--------------end-----------------" + index);

                    return index
                }

            })



        }, 3000)






    }, []);




    return (
        <div className='story-fullscreen'  >
            <div className="progress-body">

                <motion.div initial={`${currentIndex * 0}%`} animate={{ width: `${currentIndex * 100}%` }} transition={{ type: "spring", duration: 3 }}
                    className='progress-inner'></motion.div>
            </div>
            <img src={props.storybook[currentIndex]} alt="" />

            <div className='cancel' onClick={() => {
                clearInterval(timer);
                props.toggle();
            }}>
                <h1>X</h1>
            </div>
        </div >
    )
}

export default FullStory;