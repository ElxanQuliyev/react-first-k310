import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../image/logo.png'
import './header.scss'
const Header = () => {
  return (
      <header className="header">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-2">
              <img width={200} src={Logo} alt="" />
            </div>
            <div className="col-lg-8">
              <ul className="menu d-flex list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/haqqimizda">About</Link>
                </li>
                <li>
                  <Link to="/elaqe">Contact</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header