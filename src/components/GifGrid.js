import React, { useState , useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'; 

export const GifGrid =  ({category}) => {

    const { data:images, loading } = useFetchGifs( category) ;
 
  return (
    <>
        <h3 className='animate__bounceInLeft'>{category}</h3>
        { loading && <p>Loading</p>}
        {
            <div className='card-grid'>                
                {
                images.map( img => (
                        <GifGridItem
                            key ={img.id}
                            {...img}
                        />
                    ))
                } 
          </div> 
         }
    </> 
  )
}
 