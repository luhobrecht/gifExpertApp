import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('tests on < GifGrid />', () => { 
    
    const category = 'Breaking Bad';

    test('should show loading at the beginning ', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        
        render (<GifGrid category= { category }/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

     });

     test('should show items when the images load with useFetchGifs', () => { 
         

        const gifs= [{
            id: 'ABC',
            title: 'Saitama',
            url: 'https://asd'
        },
        {
            id: 'DEF',
            title: 'hola',
            url: 'https://asdasd'
        }]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        
        
        render (<GifGrid category= { category }/>);

        // screen.debug()

        expect( screen.getAllByRole('img').length).toBe(2);
        
        
      })

  })