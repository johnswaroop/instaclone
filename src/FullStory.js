import { useEffect, useState } from "react";

const FullStory = (props) => {

    console.log(props.storybook);
    console.log(props.src);



    const [currentIndex, setCurrentIndex] = useState(props.storybook.indexOf(props.src));

    useEffect(() => {

        // let timer = setInterval(() => {


        //     setCurrentIndex((index) => {

        //         if (index < props.storybook.length - 1) {
        //             return index + 1;
        //         }
        //         else {
        //             clearInterval(timer);
        //             console.log("--------------end-----------------" + index);
        //             return index
        //         }

        //     })



        // }, 2000)


    }, []);

    return (
        <div className='story-fullscreen'>
            <img src={props.storybook[currentIndex]} alt="" />
        </div>
    )
}

export default FullStory;