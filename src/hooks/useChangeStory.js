import { useEffect, useState } from 'react'

const useChangeStory = (storybook, initialStory) => {

    const [currentStory, setCurrentStory] = useState(initialStory);
    let timer;

    function close() {

        clearInterval(timer);
    }

    useEffect(() => {

        timer = setInterval(() => {



            setCurrentStory((url) => {

                if (storybook.indexOf(url) < (storybook.length - 1) && storybook.indexOf(url) >= 0) {

                    console.log(storybook[storybook.indexOf(url) + 1]);
                    return storybook[storybook.indexOf(url) + 1];

                }
                else {

                    clearInterval(timer);
                    return (url)
                }


            })

        }, 3000)


    }, [])

    return [currentStory, close];
}

export default useChangeStory;