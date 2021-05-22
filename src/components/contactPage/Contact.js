import React from 'react'
import contactStyle from './style.module.scss'
import Form from './Form'
import ContactCard from './ContactCard'
import SubHeader from '../header/SubHeader'
const ContactPage = () => (
    <>
      <SubHeader 
        title = "Contact us"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
      />
      <div className={contactStyle.wrapper}>
        <div className={contactStyle.contactContainer}>
          <div>
            <ContactCard />
          </div>
          <div>
            <Form/>
          </div>
        </div>
      </div>
    </>
)

export default ContactPage
