import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import StarRating from './StarRating' 

const Testimonial = () => {
  return (
    <div className='w-full bg-slate-50 py-20'>
      <div className='max-w-screen-xl mx-auto flex flex-col items-center px-6 md:px-16 lg:px-24'>
        <Title
          Title="What Our Guests Say"
          subTitle="Discover why discerning travelers consistently choose Chill Panalam for their exclusive and luxurious accommodation around the world"
        />

        <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-md max-w-sm"
            >
              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <p className="font-playfair text-xl">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-4">
                <StarRating />
              </div>
              <p className="text-gray-500 mt-4">"{testimonial.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
