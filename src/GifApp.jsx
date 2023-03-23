import {useState} from 'react'
import { AddCategory } from './components/AddCategory';

export const GifApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
    const onAddCategory = () => {
        setCategories(['Valorant',...categories]);
    }

    return (
        <>
            {/* Titulo */}
            <h1>Gif App</h1>

            {/* Input */}
            <AddCategory/>

            {/* Listado de Gifs */}
                {/* Gif Item */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                { 
                    categories.map(category => {
                        return <li key={ category }>{category}</li>
                    })
                }
            </ol>
        </>
    );
};
