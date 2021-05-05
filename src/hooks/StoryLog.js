
const StoryLog = () => {

    let storybook = [];


    return (log) => {

        storybook.push(log);

        //console.log([...new Set(storybook)]);
        storybook = [...new Set(storybook)];
        return storybook
    }

}

export default StoryLog