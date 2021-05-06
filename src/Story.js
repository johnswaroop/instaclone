import { useEffect, useState } from 'react'
import StoryOrb from './StoryOrb'
import FullStory from './FullStory'
import StoryLog from './hooks/StoryLog';


const Story = (props) => {

    let updateStoryBook;
    let storybook;




    updateStoryBook = StoryLog();

    const [fullScreen, ToggleFullScreen] = useState(false);
    const [fullScreenData, setfullscreenData] = useState({});



    const updateLog = (log) => {


        storybook = updateStoryBook(log);

    }

    const storyTap = (src) => {


        setfullscreenData((obj) => {

            obj.storybook = storybook;
            obj.src = src;

            return ({ ...obj })
        })
        ToggleFullScreen(true);


    }









    return (
        <div className='story-container'>


            <StoryOrb updateLog={updateLog} onClick={storyTap} />
            <StoryOrb updateLog={updateLog} onClick={storyTap} />
            <StoryOrb updateLog={updateLog} onClick={storyTap} />
            <StoryOrb updateLog={updateLog} onClick={storyTap} />
            <StoryOrb updateLog={updateLog} onClick={storyTap} />
            <StoryOrb updateLog={updateLog} onClick={storyTap} />
            <StoryOrb updateLog={updateLog} onClick={storyTap} />

            {fullScreen ? <FullStory storybook={fullScreenData.storybook} src={fullScreenData.src} toggle={ToggleFullScreen} /> : null}




        </div>
    )




}

export default Story