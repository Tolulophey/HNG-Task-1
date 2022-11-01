import React from 'react'
import image from "../images/mypicture.jpg"

function Profile() {
  return (
    <div className='profile'>
      <img src={image} alt="myPicture" id="profile_img" />
      <p>Tolulope Amole</p>
      <p id="twitter">Twitter Username: @Tolulophey</p>
      <p id="slack">Slack Username: Tolulophey</p>
    </div>
  )
}

export default Profile