import { useEffect, useState } from "react";
import { getgifs } from "../helpers/getGifs";

export const GifGrid = ({category}) => {

    const [counter, setCounter] = useState(0);

    getgifs(category);
    
    useEffect( () => {
        getgifs(category);
    }, [])
    
    return (
        <>
            <h3>{category}</h3>
            <h5>{counter}</h5>
            <button onClick={() => setCounter(counter+1)}>+1</button>
        </>
    )
}