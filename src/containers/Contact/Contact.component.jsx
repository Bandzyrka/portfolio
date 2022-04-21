import React, {useState} from 'react'
import AppWrapper from '../../wrapper/AppWrapper'
import images from '../../constants/images'
import {FaUser} from 'react-icons/fa'
import {IoIosMailOpen} from 'react-icons/io'
import {client} from '../../client'
import {MdAlternateEmail} from 'react-icons/md'
import { AiOutlineCheck} from 'react-icons/ai'
import {motion} from 'framer-motion'
import './Contact.component.scss'
const Contact = () => {
    
  const [formData, setFormData] = useState({name: '', email: '', message: '',})
  const [isFormSubmited, setIsFormSubmited] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const { name, email, message} = formData

  const handleChangeForm = (event) =>
  {
    const {value, name} = event
    setFormData({...formData, [name]: value})
  }
  const handleSumbit = () =>{
      setLoading(true);
      console.log('sd')
      const contact = {
          _type: 'contact',
          name: name,
          email: email,
          message: message,
      }
      client.create(contact).then(() =>{
          setLoading(false)
          setIsFormSubmited(true)
      })
  }
  return (
    <>
      <h2 className="head-text">Take a <span>Chat</span> & <span>Coffe</span> with me</h2>
      <motion.div className="app__contact"
        whileInView={{opacity: [0, 1] }}
        transition={{ duration: 1}}
      >
        <div className="app_contact-content">
            <div className="app_contact-item">
                <motion.img src={images.mobile} alt="mobile" whileHover={{scale: '1.1', duration: '0.5'}}/>
                <p className="p-text"> +48 791 114 502 </p>
            </div>
            <div className="app_contact-item">    
                <motion.img src={images.email} alt="email" whileHover={{scale: '1.1', duration: '0.5'}}/>
                <p className="p-text"> bandzyrka@gmail.com </p>
            </div>
        </div> 
        {
            !isFormSubmited ? <div className="app__contact-form">
                
                <label>
                    <FaUser /> 
                     Your Name
                </label>
                <input 
                    placeholder="e.g John Doe" 
                    type="text"
                    name="name"
                    required
                    onChange={handleChangeForm}
                    > 
                </input>
              
                <label>
                    <MdAlternateEmail/> 
                     Your Email
                </label>
                <input 
                    placeholder="email@domain.com"
                    type="text"
                    required
                    name="email"
                    onChange={handleChangeForm}
                    >
                </input>
       
    
                <label>
                    <IoIosMailOpen />
                     Your Message
                 </label>
                <textarea 
                    placeholder="type here"
                    required
                    name="message"
                    onChange={handleChangeForm}
                >
                </textarea>
                <motion.button 
                    onClick={handleSumbit}
                    whileHover={{backgroundColor: '#315cac', scale: 1.02}}
                    transition={{ duration: 0.1, ease: 'easeInOut'}}
                    whileTap={{scale: 0.9}}
                    > {loading ? (<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>) : "Send Message"}</motion.button>
        </div>
        :
        <motion.div
            className="succes_message"
            whileInView={{y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}> 
            <AiOutlineCheck />
            <span>Message sent successfully</span>
            <h2 className="bold-text">Thank you for getting in touch!</h2>
        </motion.div>
    }
        </motion.div>
      </>
  )
}



export default AppWrapper(Contact, 'contact')