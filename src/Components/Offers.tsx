import React from 'react'
import img1 from '../images/offer1.png'
import img2 from '../images/offer2.png'
import img3 from '../images/offer3.png'
import offer from '../images/offernotification.png'
const arr = [img1, img2, img3]
export const Offers = () => {
  return (
    <>
    <div className='card flex-row justify-content-between flex-wrap'>
      {arr.map((val) =><div className='offer mx-4' key={Math.random()}><img src={val} alt="" /></div>)}
    </div>
    <img src={offer} className="w-100" alt="" />
    </>
    
  )
}
