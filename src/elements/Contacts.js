import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from './AnimatedLetters'
import './Contacts.scss'

const Contacts = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
        clearTimeout(timeoutId); // Clear the timeout when the component unmounts
    };
 }, []);

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_o2gbhd7', 'template_k9pv4wo', e.target, 'db-cEmmriuu6iKcfL')
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      )

    e.target.reset()
  }

  return (
    <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['G', 'E', 'T', ' ', 'I', 'N', ' ', 'T', 'O', 'U', 'C', 'H', '!']}
                    idx={15}
                    />
                </h1>
                <p>
                    You can contact me using this form or send an email directly.
                </p>
            </div>

         <div className="contact-form">
            <form  onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                <input className= "flat-button" type="submit" value="Send" disabled={isSubmitting} />
      {stateMessage && <p>{stateMessage}</p>}
                </li>
              </ul>
             </form>
         </div>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contacts