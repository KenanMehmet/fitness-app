import React, { useEffect, useState } from 'react'

import Button from './Button'
import { exerciseOptions, fetchData } from '../utils/fetchData'


const SearchExercises = () => {
    const [search, setSearch] = useState('')

    const handleSearch = async () => {
        console.log("starting")
        if (search) {
            const exerciseData = fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
            console.log(exerciseData)
        }
    }


    return (
        <div className='search-wrapper'>
            <h1> Exercises you should <br /> know</h1>
            <div style={{ display: "flex" }}>
                <input
                    className='search-field'
                    type='text' value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder='enter text'
                />
                <Button text="Search" onClickFucntion={handleSearch}></Button>
            </div>
        </div>
    )
}

export default SearchExercises