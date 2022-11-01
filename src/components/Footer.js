import React from 'react'
import slack from "../images/slack.svg"
import gitHub from "../images/gitHub.svg"
import logo from "../images/logo.svg"
import I4G from "../images/I4G.svg"

function Footer() {
  return (
    <footer>
      <div className="icons">
        <img src={slack} alt="slack" />
        <img src={gitHub} alt="gitHub" />
      </div>
      <div className="bottom">
        <div className="zuri">
          <img src={logo} alt="zuri" />
        </div>
        <p>HNG Internship 9 Frontend Task</p>
        <div className="I4G">
          <img src={I4G} alt="I4G" />
        </div>
      </div>
    </footer>
  )
}

export default Footer