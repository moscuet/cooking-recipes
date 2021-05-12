import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import formStyles from './form.module.scss'
import {Link} from 'react-router-dom'
const Form = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: true,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: 'post',
      url: 'https://getform.io/f/cc5246eb-0be2-49f0-834e-1a5b3d2de124',
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, 'Thank you! Soon you will hear from us!', form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <div className={`${formStyles.formContainer} bg-light text-dark`}  > 
      <form onSubmit={handleOnSubmit} className = {`${formStyles.contactForm}`}>
        <div className={`${formStyles.formGroup}`}>
          <label htmlFor="inputName" required="required">
            Name
          </label>
          <input
            type="text"
            className={`${formStyles.formControl}`}
            id="inputName"
            required="required"
          />
        </div>
        <div className={`${formStyles.formGroup}`}>
          <label htmlFor="inputEmail1" required="required">
            Email
          </label>
          <input
            type="email"
            name="email"
            className={`${formStyles.formControl}`}
            id="inputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className={`${formStyles.formGroup}`}>
          <label htmlFor="inputMessage" required="required">
            Message
          </label>
          <textarea
            rows="3"
            name="email"
            className={`${formStyles.formControl}`}
            id="inputMessage"
            aria-describedby="emailHelp"
          />
        </div>
        <div className={`${formStyles.formGroup}`}>
          <Button
            type="submit"
            variant="success"
            disabled={serverState.submitting}
          >

            Submit
          </Button>
          {serverState.status && (
            <>
            <Link to = {`/`}><Button  variant="secondary" value="Send data">Back Home</Button></Link>
            <div>
            <p className={!serverState.status.ok ? 'errorMsg' : ''}>
              {serverState.status.msg} 
            </p>
            </div>
            </>
          )}
        </div>
      </form>
    </div>
  )
}
export default Form
