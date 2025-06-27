import React from 'react'
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="footer text-center">
        <div className="social-icons my-3 d-flex align-items-center justify-content-center gap-3 ">
          <span className="social-circle"><FaFacebookF /></span>
          <span className="social-circle"><FaTwitter /></span>
          <span className="social-circle "><FaLinkedinIn /></span>
          <span className="social-circle "><FaYoutube/></span>

        </div>
        <p className=''>Example@email.com</p>
        <p>Copyright © 2020 Name. All rights reserved.</p>
      </footer>

    </>
  )
}

export default Footer