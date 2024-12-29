import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'

export const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then(
        (result) => {
          console.log(result.text)
          // Reset the form fields
          setName('')
          setEmail('')
          setMessage('')
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <section className='Container contact'>
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
          <label htmlFor='email' className='Contact_text'>
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
          <label htmlFor='message' className='Contact_text'>
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
  )
}

export default Contact
