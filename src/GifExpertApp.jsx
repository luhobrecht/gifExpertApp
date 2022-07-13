import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Friends' ]);
    
    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;
  
        setCategories([ newCategory , ...categories ]);
        //o
        //setCategories( cat => [...cat, 'Peaky Blinders'])

    }

  return (
    <>

   
    <h1>Gif Expert App</h1>

 
    <AddCategory 
    onNewCategory ={ event => onAddCategory(event) }
    />

    

    {categories.map((category) => (
            <GifGrid 
            key={ category }
            category= { category }
            />
        )
    )}
   

    </>
  )
}
