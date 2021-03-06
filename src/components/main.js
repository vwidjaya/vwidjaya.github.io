import React from 'react'
import PropTypes from 'prop-types'

import pic02 from '../images/pic02.jpg'
import resume from '../RESUME - Vincent Widjaya.pdf'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <p>
            Hi! My name is Vincent, and I'm an Informatics major at the
            University of Washington (Seattle), graduating June 2020. My
            concentration is in Data Science but I am also heavily into software
            development. I take various computer science courses at UW to
            supplement my career pursuit in both domains.
          </p>
          <p>
            In the summer of 2017, I interned at <strong>Uber</strong> as a data
            scientist. In 2018, I interned at a small startup that develops
            software for other companies, for internal and/or external
            operations.
          </p>
          <p>
            This summer, I am interning as a Full Stack Engineer at{' '}
            <strong>GO-JEK</strong>, Indonesia's ride-hailing service which has
            has become Southeast Asia's second and Indonesia's first decacorn,
            hosting a multitude of microservices and startups.
          </p>
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            TBD
          </p>
          <p>
            Projects page
          </p>
          {close}
        </article>

        <article
          id="resume"
          className={`${this.props.article === 'resume' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div id="resume-wrapper">
            <object data={resume} type="application/pdf" />
          </div>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main