import React from 'react'
import "../styles/recipemore.css";

const RecipeMore = () => {
  return (
    <div className='wrap'>
        <header className='header'>
            <div className='header-wrap'>
            <div className='title'>
            </div>
                <button className='edit'>
                </button>

                <button className='trash'>   
                </button>
                </div>
        </header>
        <div className='main-wrap'>
            <img src='/images/chocolate.svg'/>
            <div className='ingredient'></div>
            <div className='recipe'></div>
            <div className='comment'></div>
        </div>
    </div>
  )
}

export default RecipeMore