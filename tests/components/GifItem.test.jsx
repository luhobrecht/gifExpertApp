import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

 
 
 
 describe('Pruebas sobre componente GifItem', () => { 

    test('GifItem should match with snapshot ', () => { 
        
        const title = "Fuck You Season 4 GIF by Friends"
        const url = "https://media2.giphy.com/media/daIJvyatzeg20Iqi12/giphy.gif?cid=97d5ddfc1osd30iu6jr8822y0r3dmpgrx1lqw7gzxgj4u476&rid=giphy.gif&ct=g"

        const {container} = render( <GifItem title= { title } url= { url }/> )

       expect (container).toMatchSnapshot();


     }),

     test('GifItem should show image with URL and ALT', () => { 
        
        const title = "Fuck You Season 4 GIF by Friends"
        const url = "https://media2.giphy.com/media/daIJvyatzeg20Iqi12/giphy.gif?cid=97d5ddfc1osd30iu6jr8822y0r3dmpgrx1lqw7gzxgj4u476&rid=giphy.gif&ct=g"

        render( <GifItem title= { title } url= { url }/> )

    //    expect (screen.getByRole('img').src).toBe(url);
    //    expect (screen.getByRole('img').alt).toBe(title);

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);


     }),

     test('GifItem should show title in the component', () => { 
        
        const title = "Fuck You Season 4 GIF by Friends"
        const url = "https://media2.giphy.com/media/daIJvyatzeg20Iqi12/giphy.gif?cid=97d5ddfc1osd30iu6jr8822y0r3dmpgrx1lqw7gzxgj4u476&rid=giphy.gif&ct=g"

        render( <GifItem title= { title } url= { url }/> )

    //    expect (screen.getByRole('img').src).toBe(url);
    //    expect (screen.getByRole('img').alt).toBe(title);

        expect(screen.getByText(title)).toBeTruthy();


     })

  })