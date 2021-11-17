import { useState, useEffect, useContext } from 'react'
import axios from "axios";
import { tokenContext } from "../shared/context/tokenContext";

export const usePostsData = () => {
    const [ data, setData ] = useState();
    const token = useContext(tokenContext);

    useEffect(() => {
        axios.get('https://oauth.reddit.com/best', {
            headers: {Authorization: `bearer ${token}`}
        })
            .then((res) => {
                setData(res.data);
            })
            .catch(console.log)
    }, []);

    return [data];
};
