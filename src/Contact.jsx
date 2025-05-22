import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion'

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false)
  const [userData, setUserData] = useState({
    name : '',
    email : '',
    message : ''
  })

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true)
    emailjs.send("service_v4ev4hb","template_ulpllvc",{
    name: userData?.name,
    message: userData?.message,
    title: "Looking to connect",
    email: userData?.email,
    }, process.env.REACT_APP_PUBLIC_KEY).then(()=> {
        setSent(true)
        setError(false)
    }).catch((err)=> {
        setError(true)
    }).finally(()=> {
        setSending(false)
    })
    
  };

  const handleDataChange = (e) => {
    setUserData(prev => {
        return {
            ...prev,
            [e.target.name] : e.target.value
        }
    })
  }

  return (
    <div>
      {/* <h2 className="text-2xl font-bold mb-4">Contact Me</h2> */}
      {/* <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input type="text" name="user_name" placeholder="Your Name" required className="w-full p-2 border rounded" />
        <input type="email" name="user_email" placeholder="Your Email" required className="w-full p-2 border rounded" />
        <textarea name="message" placeholder="Your Message" required className="w-full p-2 border rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
        {sent && <p className="text-green-600">Message sent successfully!</p>}
      </form> */}

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 md:px-16 max-w-4xl mx-auto"
        aria-label="Contact me"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 rounded-xl p-10 shadow-lg"
        >
          <h2 className="text-4xl font-bold mb-6 text-indigo-400 text-center">
            Contact Me
          </h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-6 max-w-xl mx-auto"
          >
            <label className="flex flex-col text-gray-300 font-semibold">
              Name
              <input
                name="name"
                required
                type="text"
                value={userData?.name}
                autoComplete="off"
                placeholder="Your Name"
                onChange={handleDataChange}
                className="mt-2 rounded-md bg-gray-700 border border-gray-600 p-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </label>
            <label className="flex flex-col text-gray-300 font-semibold">
              Email
              <input
                name="email"
                required
                autoComplete="off"
                type="email"
                value={userData?.email}
                onChange={handleDataChange}
                placeholder="Your Email"
                className="mt-2 rounded-md bg-gray-700 border border-gray-600 p-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </label>
            <label className="flex flex-col text-gray-300 font-semibold">
              Message
              <textarea
                placeholder="Your Message"
                rows={5}
                name="message"
                value={userData?.message}
                autoComplete="off"
                onChange={handleDataChange}
                className="mt-2 rounded-md bg-gray-700 border border-gray-600 p-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
              />
            </label>
            <button
              type="submit"
              disabled={sent}
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-md shadow-lg transition"
            >
                {
                    sending
                    ?
                    `Sending Message`
                    :
                    `Send Message`
                }
            </button>
            {sent && <p className="text-green-600">Message sent successfully!</p>}
            {error && <p className="text-red-600">Error in sending message, please try again later.</p>}
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;