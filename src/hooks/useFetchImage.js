import { useState, useEffect } from 'react'

const useFetchImage = (size) => {

    const [url, setSurl] = useState('/images/white.png');

    useEffect(() => {

        fetch(`https://picsum.photos/${size}`).then((Response) => {
            setSurl(Response.url);
        })
    }, [])


    return url;
}

export default useFetchImage;