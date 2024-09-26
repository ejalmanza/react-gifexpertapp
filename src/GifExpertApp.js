// en esta metodo, se trabajara con el archivo AddCategory
// que permite agregar textbox y validarlos
import {React,Fragment, useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // const categories =['one punch', 'samurai x', 'Dragon ball'];
    const [categories,setCategories] = useState(['one punch'])

    // const handleAdd = ()=>{ 
    //     setCategories(cats => [...cats,'Nuevo elemento al arreglo'])

    // }


  return (
    <> 
    
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr></hr>  
        <br></br>
        <ol>
            {
                // categories.map(category =>{
                //     return <li key={category} > {category}</li>
                // })
                // categories.map(category=>(
                //     <li key={category}>{ category}</li>
                // ))
                categories.map(category=>(                    
                <GifGrid 
                    key = { category}
                    category={ category }
                />
                ))

            }
        </ol>
    </>
  )
}
