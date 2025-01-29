/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

const Social = () => {
  return (
    <div className="home_social">
        <a href="mailto:developerfarhan7@gmail.com" className="home_social-icon" target='_blank'>
                <i class="uil uil-envelope"></i>
        </a>
        <a href="https://github.com/pharhan7" className="home_social-icon" target='_blank'>
            <i class="uil uil-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/farhansaifi" className="home_social-icon" target='_blank'>
            <i class="uil uil-linkedin"></i>
        </a>
    </div>
  )
}

export default Social