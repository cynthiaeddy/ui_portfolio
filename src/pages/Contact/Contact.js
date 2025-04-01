import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import './Contact.css'

export const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [statusMessage, setStatusMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(
      'in form, testing keys',
      process.env.REACT_APP_SERVICE_ID,
      'template id',
      process.env.REACT_APP_TEMPLATE_ID,
      'template public',
      e.target,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    )
    setTimeout(() => {
      setIsSubmitted(true) // Set to true when submission is successful
    }, 1000) // Simulating a delay
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text)
          // Reset the form fields
          setName('')
          setEmail('')
          setMessage('')
          setStatusMessage('Email sent success')
        },
        (error) => {
          console.log(error.text)
          setStatusMessage(`${error.text} happened`)
        },
      )
  }
  console.log('name', name, 'email', email, 'statusMessage', statusMessage)

  return (
    <section className={`Container contact ${isSubmitted ? 'submitted' : ''}`}>
      <div className='Container_overlord'>
        {isSubmitted ? (
          // UI shown after successful submission
          <section className='SecondContainer success'>
            <div className='AboutContact success'>thank you!</div>
            <h5 className='h5 contact'>
              I&apos;ll be sure to get back to you within 48 hours.
            </h5>
            <Link to='/' className='ButtonContainer contact'>
              <div className='Button_website'>return home</div>
            </Link>
          </section>
        ) : (
          <section className='SecondContainer form'>
            <div className='AboutContact'>say hello</div>
            <form className='ContactForm' onSubmit={handleSubmit}>
              <div className='ContactForm text'>
                <label htmlFor='name' className='Contact_text'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='ContactForm text'>
                <label htmlFor='email' className='Contact_text email'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='ContactForm text'>
                <label htmlFor='message' className='Contact_text email message'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type='submit' className='Button_website form'>
                Send
              </button>
            </form>
          </section>
        )}
      </div>
    </section>
  )
}
