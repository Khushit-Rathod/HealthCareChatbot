import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9hyesnc', 'template_hl8iejn', form.current, 'EsM7SxEy_EdlBCMrd')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
      });
  };

  return (
    <div id="contact">
      <h1 className="cpt">Contact Us</h1>
      <span className="cd">Please fill out the form</span>
      <form ref={form} name="contactForm" onSubmit={sendEmail}>
        <input type="text" name="from_name" className="name" placeholder="Your Name" />
        <input type="email" name="to_name" className="email" placeholder="Your Email" />
        <textarea
          name="message"
          className="msg"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="Send" className="submitBtn">Submit</button>
        <div className="links">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
            alt=""
            className="link"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/455/455705.png"
            alt=""
            className="link"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
            alt=""
            className="link"
          />
        </div>
      </form>
    </div>
  );
}

export default Contact;
