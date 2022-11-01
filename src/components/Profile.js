import React from 'react'
import image from "../images/mypicture.jpg"

function Profile() {
  return (
    <div className='profile'>
      <img src={image} alt="myPicture" id="profile_img" />
      <p>Tolulope Amole</p>
      <div className="details">
        <a href="https://twitter.com/Tolulophey" id="twitter">Tolulophey</a>
        <a href="#" id="slack">Tolulophey</a>
      </div>
    </div>
  )
}

export default Profile