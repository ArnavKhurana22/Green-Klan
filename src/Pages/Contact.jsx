import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      form.current.reset();
    })
    .catch(() => {
      setError(true);
      setTimeout(() => setError(false), 3000);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-page"
    >
      <h1>Get in Touch</h1>
      
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ y: 20 }}
        animate={{ y: 0 }}
      >
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="user_name" required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="user_email" required />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea name="message" required />
        </div>

        <button type="submit">Send Message</button>

        {success && (
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="success-message"
          >
            Message sent successfully!
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="error-message"
          >
            Error sending message. Please try again.
          </motion.div>
        )}
      </motion.form>
    </motion.div>
  );
}