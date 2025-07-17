import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    const room = roomsDummyData.find(room => room._id === id)
    room && setRoom(room)
    room && setMainImage(room.images[0])
  }, [])

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    const form = e.target.form;

    const checkIn = form.CheckInDate.value;
    const checkOut = form.CheckOutDate.value;
    const guests = form.guests.value;

    if (!checkIn || !checkOut || !guests) {
      alert("Please fill in all fields before checking availability.");
      return;
    }

    alert("Room is not Temporarily available");
  }

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      <div className='flex flex-col md:flex-row items-center md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name}</h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% Offer</p>
      </div>

      <div className='flex items-center gap-1 mt-2'>
        <StarRating />
        <p className='ml-2'>200+ reviews</p>
      </div>

      <div className='flex items-center gap-1 text-gray-500 mt-2'>
        <img src={assets.locationIcon} alt="location-icon" />
        <span>{room.hotel.address}</span>
      </div>

      <div className='flex flex-col lg:flex-row mt-6 gap-6'>
        <div className='lg:w-1/2 w-full'>
          <img src={mainImage} alt="Room-image" className='w-full rounded-xl shadow-lg object-cover' />
        </div>
        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
          {room?.images.length > 1 && room.images.map((image, index) => (
            <img
              onClick={() => setMainImage(image)}
              key={index}
              src={image}
              alt="Room-Image"
              className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image ? 'outline outline-2 outline-orange-500' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className='flex flex-col md:flex-row md:justify-between mt-10'>
        <div className='flex flex-col '>
          <h1 className='text-3xl md:text-4xl font-playfair'>Experience luxury like never before</h1>
          <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
            {room.amenities.map((item, index) => (
              <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                <p className='text-xs'>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <p className='text-2xl font-medium'>${room.pricePerNight}/ night</p>
      </div>

      <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
        <div className='flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4 md:gap-10 text-gray-500'>

          <div className='flex flex-col'>
            <label htmlFor="CheckInDate" className='font-medium'>Check-In</label>
            <input type="date" id='CheckInDate' name="CheckInDate" placeholder='Check-In' required className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="CheckOutDate" className='font-medium'>Check-Out</label>
            <input type="date" id='CheckOutDate' name="CheckOutDate" placeholder='Check-Out' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="guests" className='font-medium'>Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              placeholder="0"
              className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none'
              min={1}
              required
            />
          </div>
        </div>

        <button
          type='submit'
          onClick={handleCheckAvailability}
          className='bg-blue-500 hover:bg-blue-600 active:scale-95 transition-all duration-300 ease-in-out text-white font-semibold tracking-wide rounded-lg shadow-md md:px-6 py-3 md:py-4 text-base cursor-pointer hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300'
        >
          Check Availability
        </button>
      </form>

      <div className='mt-24 space-y-4'>
        {roomCommonData.map((spec, index) => (
          <div key={index} className='flex items-start gap-2'>
            <img src={spec.icon} alt={`${spec.title}-icon`} className='w-[26px]' />
            <div>
              <p className='text-base'>{spec.title}</p>
              <p className='text-gray-500'>{spec.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='max-w-3xl border-y border-black-300 my-15 py-10 text-gray-500'>
        <p>
          Guests will be allocated on the ground floor according to availability. You get a comfortable two-bedroom apartment that has true city feelings. The price quoted is for two guests. At the guest slot, please mark the number of guests to get the exact price. These guests will be allocated to the ground floor according to availability. You get a comfortable two-bedroom apartment that has a true city feeling.
        </p>
      </div>
    </div>
  )
}

export default RoomDetails;
