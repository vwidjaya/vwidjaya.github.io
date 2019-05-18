import React from 'react'
import PropTypes from 'prop-types'
import logo from "../../src/images/vwlogo2.png"

const Header = props => (
   <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      {/* <div className="logo">
         <p><strong>V W</strong></p>
         <span className="icon fa-diamond" />
      </div> */}
      <div id="vw-logo">
         <img src={logo} alt="logo"></img>
      </div>
      <div className="content">
         <div className="inner">
            <h1>Vincent Widjaya</h1>
            <p>Software engineering student studying <br /> Informatics at the University of Washington.</p>
         </div>
      </div>
      <nav>
         <ul>
            <li><a href="#" onClick={() => { props.onOpenArticle('about') }}>About</a></li>
            <li><a href="#" onClick={() => { props.onOpenArticle('projects') }}>Projects</a></li>
            <li><a href="#" onClick={() => { props.onOpenArticle('resume') }}>Resume</a></li>
         </ul>
      </nav>
   </header>
)

Header.propTypes = {
      onOpenArticle: PropTypes.func,
      timeout: PropTypes.bool
}

export default Header
