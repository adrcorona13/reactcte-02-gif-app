import { render, screen } from "@testing-library/react"
import { GifApp } from "../GifApp"

describe('pruebas en GifApp', () => { 
    test('should first', () => { 
        render(<GifApp/>);
        screen.debug();
     })
 })