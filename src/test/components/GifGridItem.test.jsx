import { render, screen } from "@testing-library/react"
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en GifGridItem', () => {

    const title = 'titulo';
    const url = 'https://url.com/';

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifGridItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el url y el alt indicado', () => {
        render(<GifGridItem title={title} url={url} />);
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });

    test('debe mostrar el titulo en el componente', () => { 
        render(<GifGridItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();

     })
})