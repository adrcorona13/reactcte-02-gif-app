import {useState} from 'react'

export const GifApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
    const onAddCategory = () => {
        setCategories([...categories, 'Valorant']);
    }

    return (
        <>
            {/* Titulo */}
            <h1>Gif App</h1>

            {/* Input */}

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
