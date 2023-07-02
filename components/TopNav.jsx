import { useState } from "react"

export default function TopNav() {

  const [activeLink, setActiveLink] = useState("For You");

    return (
      <div className="top-nav">
        <a className="top-nav__home-link">Home</a>
        <ul className="top-nav__link-cont">
          <li className="top-nav__item" onClick={() => setActiveLink("For You")}>
            <a className={`top-nav__link ${activeLink === "For You" ? 'top-nav__active-link' : null}`}>
              For you
              <div className={activeLink === "For You" ? 'top-nav__active-link-underline' : null} style={{"width": "5.6rem"}}></div>
            </a>
          </li>
          <li className="top-nav__item" onClick={() => setActiveLink("Following")}>
            <a className={`top-nav__link ${activeLink === "Following" ? 'top-nav__active-link' : null}`}>
              Following
              <div className={activeLink === "Following" ? 'top-nav__active-link-underline' : null} style={{"width": "6.9rem"}}></div>
            </a>
          </li>
        </ul>
      </div>
    )
  }