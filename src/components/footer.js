import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
            <li>
                <a href="mailto:vrwidjaya@gmail.com" className="icon fa-envelope" target="_blank">
                    <span className="label">Email</span>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/V9.98R" className="icon fa-facebook" target="_blank">
                    <span className="label">Facebook</span>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/vincentrw/" className="icon fa-instagram" target="_blank">
                    <span className="label">Instagram</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/vwidjaya/" className="icon fa-github" target="_blank">
                    <span className="label">GitHub</span>
                </a>
            </li>
          </ul>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
