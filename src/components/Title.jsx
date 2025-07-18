import React from 'react'

const Title = ({Title,subTitle,align,font}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align == "left " && "md:items-start md:text-left"}`}>
        <h1 className={`text-4xl md:text-[40px] ${font || "font-playfair"}`}>{Title}</h1>
        <p className='text-sm mad:text-base text-gray-500/90 mt-2max-w-175'>{subTitle}</p>
    </div>
  )
}

export default Title