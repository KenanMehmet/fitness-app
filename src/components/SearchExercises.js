import React, { useEffect, useState } from 'react'

import Button from './Button'


const SearchExercises = () => {
    return (
        <div className='search-wrapper'>
            <h1> Exercises you should <br /> know</h1>
            <input
                className='search-field'
                type='text' value={""} onChange={(e) => { }}
                placeholder='enter text'
            ></input>
        </div>
    )
}

export default SearchExercises