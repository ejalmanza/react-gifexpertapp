import React, { useState } from 'react'
import PropTypes from 'prop-types' // para validar campos

export const AddCategory = ({setCategories}) => {

const [inputValue, setInputValue] = useState('')

const handleInputChance=(e) => {    
    setInputValue(e.target.value)
}

const handleSubmit = (e) =>{
    e.preventDefault()
    if (inputValue.length>2){
        setCategories(cats => [inputValue, ...cats])
        setInputValue('');
    }
}

  return ( 
    <form onSubmit={handleSubmit}>
        <input
            type = "text"
            value = {inputValue}
            onChange={handleInputChance }
        />
    </form> 

  )
}

// Valida campos
AddCategory.propTypesropTypes ={
    setCategories: PropTypes.func.isRequired
}