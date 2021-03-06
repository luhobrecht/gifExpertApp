import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

//import { getGifs } from "../helpers/getGifs"
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category);
   

  return (
    <>
    <h3>{ category }</h3>
    {
        isLoading && ( <h2>Cargando...</h2> )
    }
    
    <div className= "card-grid">
        {images.map((image) => (
            
            <GifItem 
            key={image.id}
            // title= {image.title}
            // url= {image.url}
            //o
            {...image}
            />


        ))}
        
    </div>
    {/* {
        gifs.map(gif => (
            <p>{ gif }</p>
        ))
    } */}
    
    </>
  )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}