import React from 'react'
import image from "../images/image.svg"

function Profile() {
  return (
    <div className='profile'>
      <img src={image} alt="Annette Black" id="profile_img" />
      <p>Annette Black</p>
      <div className="details">
        <p ></p>
        <a href="https://twitter.com/Tolulophey" id="twitter">Tolulophey</a>
        <a href="https://twitter.com/Tolulophey" id="slack">Tolulophey</a>
      </div>
    </div>
  )
}

export default Profile