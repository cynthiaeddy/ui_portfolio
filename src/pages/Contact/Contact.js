import React, { useState } from 'react'
// import emailjs from '@emailjs/browser'
import './Contact.css'

export const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(
  //     'in form, testing keys',
  //     process.env.REACT_APP_SERVICE_ID,
  //     'template id',
  //     process.env.REACT_APP_TEMPLATE_ID,
  //     'template public',
  //     e.target,
  //     process.env.REACT_APP_PUBLIC_KEY,
  //   )
  //   emailjs
  //     .sendForm(
  //       process.env.REACT_APP_SERVICE_ID,
  //       process.env.REACT_APP_TEMPLATE_ID,
  //       e.target,
  //       process.env.REACT_APP_PUBLIC_KEY,
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text)
  //         // Reset the form fields
  //         setName('')
  //         setEmail('')
  //         setMessage('')
  //       },
  //       (error) => {
  //         console.log(error.text)
  //       },
  //     )
  // }
  console.log('name', name, 'email', email)

  console.log(
    'keys, service',
    process.env.REACT_APP_SERVICE_ID,
    'template',
    process.env.REACT_APP_TEMPLATE_ID,
    'PUBLIC',
    process.env.REACT_APP_PUBLIC_KEY,
    'PUBLIC with emailjs',
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
  )

  return (
    <section className='Container contact'>
      <div className='AboutContact'>say hello</div>
      <form className='ContactForm' onSubmit={''}>
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
  )
}

// export default Contact
