import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg_icon.png';
import mail_icon from '../../assets/mail_icon.png';
import location_icon from '../../assets/location_icon.png';
import phone_icon from '../../assets/phone_icon.png';
import white_arrow from '../../assets/white_arrow.png';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d3214a1a-92cb-4335-8609-be08d250e38a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
    <div className="contact-col">
    <h3 className='contact-col h3'><img src={msg_icon} alt=''/>&nbsp;&nbsp; Send us a Message </h3>
    <p className='contact-col-p'>Please feel free to ask through contact form or find our contact information below. Your feedback and suggestions are important to us.</p>
    <ul className='contact-col ul'>
      <li className='contact-col ul li'><img src={mail_icon} alt=''/>&nbsp;&nbsp; contact@evlanding.com </li>
      <li className='contact-col ul li'><img src={phone_icon} alt=''/>&nbsp;&nbsp; 8668556085</li>
      <li className='contact-col ul li'> <img src={location_icon} alt=''/>&nbsp;&nbsp; Opposite to Baner Biz Bay, Baner 411211</li>
    </ul>
    </div>
    <div className="contact-col">
    <form onSubmit={onSubmit}>
    <label className=''>Your Name</label>&nbsp;&nbsp;
    <input type='text' name='name' placeholder='Enter Your Name' required></input>

    <label className=''>Phone Number</label>&nbsp;&nbsp;
    <input type='tel' name='phone' placeholder='Enter Your Phone Number' required></input>
    
    <label className=''>Write Your Message here</label>&nbsp;&nbsp;
    <textarea name='message'rows='6' placeholder='Enter Your Message' required></textarea>
    <button name='Submit' type='submit' className='btn dark-btn'>Submit Now<img src={white_arrow} alt=''/></button>    
    </form>
    <span>{result}</span>
    </div>  
    </div>
  )
}
