import React from 'react'
import contactStyle from './contactCard.module.scss'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
const ContactCard = () => { 
  return (
    <div className={` bg-primary text-white ${contactStyle.wrapper}`}>
      <div >
        <h4>Email</h4>
        <p>info@companyname.com</p>
        <h4>Telephone</h4>
        <p>+358-xxx-xxxx</p>
        <h4>Address</h4>
        <p>Street xx</p>
        <p>01000 Helsinki</p>
        <h4>Follow us</h4>
      </div>
      <div className={contactStyle.socialIcons}>
        <ul>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter  size ={30}color={'white'}/>
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size ={30} color={'white'}/>
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size ={30} color={'white'}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default ContactCard
