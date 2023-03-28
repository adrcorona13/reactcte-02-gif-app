import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('pruebas en GifGrid', () => {
    const category = 'query';
    test('debe mostrar el loading', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando'));
        expect(screen.getByText(category));
        // screen.debug();
    });

    test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [{
            id: 'id1',
            title: 'title1',
            url: 'url1'
        }, 
        {
            id: 'id2',
            title: 'title2',
            url: 'url2'
        }]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
        
    })
})