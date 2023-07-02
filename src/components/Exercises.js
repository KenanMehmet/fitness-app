import React, { useEffect, useState } from 'react'
import { Pagination } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'

const Exercises = ({ bodyPart, setBodyPart, exercises }) => {
    console.log(exercises)
    return (
        <div id="exercises">
            <h3 styles={{ marginBottom: "46px" }}>Showing results</h3>
            <div className='exercises-container'>
                {exercises.map((exercise, index) => (
                    <p>{exercise.name}</p>
                ))
                }
            </div>
        </div>
    )
}

export default Exercises