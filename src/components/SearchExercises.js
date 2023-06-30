import React, { useEffect, useState } from 'react'

import Button from './Button'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'


const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData]);
        }

        fetchExercisesData();
    }, [])


    const handleSearch = async () => {
        if (search) {
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
            const searchedExercises = exerciseData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch('')
            setExercises(searchedExercises)
        }
    }
    return (
        <div>
            <div className='search-wrapper'>
                <h1> Exercises you should <br /> know</h1>
                <div style={{ display: "flex" }}>
                    <input
                        className='search-field'
                        type='text' value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}
                        placeholder='enter text'
                    />
                    <Button text="Search" onClickFunction={handleSearch}></Button>
                </div>
            </div>
            <div className='exercises-wrapper' style={{ position: "relative", width: "100%", padding: "10px" }}>
                <h1>hello</h1>
                <HorizontalScrollbar data={bodyParts} bodyParts bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </div>
        </div>
    )
}

export default SearchExercises