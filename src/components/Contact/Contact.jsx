import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="header">
        <h1>Contact Me</h1>
      </header>

      <div className="content">
        {/* Left Section */}
        <div className="left-section-c">
          <img


            className="contact-image"
          />
        </div>

        {/* Right Section */}
        <div className="right-section-c">
          <form className="contact-form">
            <h2>Get in Touch</h2>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
            ></textarea>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>

          {/* Social Media Icons */}
          <h1 className="social-h">contact via:</h1>
          <div className="Social-c">
  <div class="icons-c">
    <a href="https://in.linkedin.com/in/abhishek-bijalwan-6125432a2" target="blank" class="linkedin">
      <div class="layer">
        <span></span><span></span><span></span><span class="linkedin"></span>
      </div>
    </a>

    <a href="https://instagram.com/in/abhishekbijalwan58" target="blank" class="instagram">
      <div class="layer">
        <span></span><span></span><span></span><span class="fab fa-instagram"></span>
      </div>
    </a>
    
    <a href="https://github.com/Abhii58/" target="blank" class="Github">
      <div class="layer">
        <span></span><span></span><span></span><span class="Github"></span>
      </div>
    </a>
  </div>
  </div>



        </div>

      </div>
    </div>

  );
};

export default Contact;
