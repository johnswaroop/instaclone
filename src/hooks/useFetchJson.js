


import { useState, useEffect } from 'react'

const useFetchJson = (url) => {

    const [data, setdata] = useState(
        {
            name: { first: "" },
            picture: { thumbnail: "/images/white.png" }
        }

    );

    useEffect(() => {
        fetch('https://randomuser.me/api/').then((Response) =>
            Response.json()).then((out) => {
                setdata({ ...out.results[0] });
            })
    }, []);

    return data;

}

export default useFetchJson;