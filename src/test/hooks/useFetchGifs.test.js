import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('pruebas en useFetchGifs', () => {
    const category = 'One Punch';
    test('debe regresar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs(category));
        const { images, isLoading } = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('debe regresar un arreglo de imagenes y isLoading en false', async () => {
        const { result } = renderHook(() => useFetchGifs(category));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            { 
                timeout: 1000
            }
        );
        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
})