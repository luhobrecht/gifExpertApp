import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"


describe('Pruebas en <GifExpertApp />', () => { 
    
    test('should match the snapshot ', () => { 
        

        const title = "Fuck You Season 4 GIF by Friends"
        const url = "https://media2.giphy.com/media/daIJvyatzeg20Iqi12/giphy.gif?cid=97d5ddfc1osd30iu6jr8822y0r3dmpgrx1lqw7gzxgj4u476&rid=giphy.gif&ct=g"

        const {container} = render( <GifExpertApp title= { title } url= { url }/> )

       expect (container).toMatchSnapshot();
     //screen.debug();

     });

     test('should return false if same category is added', () => { 
         

        // const newCategory = 'Friends'

        // const onAddCategory = render(<GifExpertApp { newCategory }/>)
 
        // expect(screen.getByRole('textbox')).toBeFalsy()


      })

    //  


    })