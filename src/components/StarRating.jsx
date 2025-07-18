import React from 'react'
import { assets } from '../assets/assets'

const StarRating = ({ rating = 4 }) => {
    return (
        <>
            {Array(5).fill(0).map((_, index) => (
                <img
                    key={index}
                    src={rating > index ? assets.starIconFilled : assets.starIconOutlined}
                    alt="star-icon"
                    className="w-5 h-5"
                />
            ))}
        </>
    )
}

export default StarRating
