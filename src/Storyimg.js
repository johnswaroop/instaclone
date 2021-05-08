import { motion } from 'framer-motion'
const Storyimg = (props) => {




    return (
        <motion.img key={props.src} id='#story-img' src={props.src} alt=""
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            duration={{ duration: 3 }}
        />
    )
}

export default Storyimg;