import { getgifs } from "../helpers/getGifs";

export const GifGrid = ({category}) => {

    getgifs(category);

    return (
        <>
            <h3>{category}</h3>
            
        </>
    )
}