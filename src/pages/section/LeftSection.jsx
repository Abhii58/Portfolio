
import React, { useEffect, useState } from 'react';
import "./LeftSection.css";


const LeftSection = () => {
   

  const [text, setText] = useState("I'm ");
  const [subText, setSubText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = ['A Web Developer', 'A Designer', 'An Analyst', 'A Developer'];

  useEffect(() => {
    const typeText = () => {
      const currentPhrase = phrases[phraseIndex];

      if (!isDeleting) {
        // Typing phase
        if (charIndex < currentPhrase.length) {
          setSubText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting phase
        if (charIndex > 0) {
          setSubText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          // Move to the next phrase
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    // Typing speed (faster during deletion)
    const typingInterval = setTimeout(typeText, isDeleting ? 40 : 150);

    // Cleanup timeout
    return () => clearTimeout(typingInterval);
  }, [charIndex, isDeleting, phraseIndex]);

    


  return (
    <div className="left-section">
       <div className="move">
        <h1 className='hi'>I Am </h1>
       
      <h1 className="title" id="typing-text">. {subText}</h1>
      <p className="description-left">
        I specialize in crafting stunning websites. 
        With expertise in modern web technologies, 
        I deliver user-friendly and responsive designs. 
        
      </p>
      <div className="buttons">
  <a href="#home">
    <button className="button home-button">Home</button>
  </a>
  <a href="#about">
    <button className="button about-button">About</button>
  </a>
</div>

      <div className="gp">
      <div className="hexagons">
        <div className="hexagon red"></div>
        <div className="hexagon"></div>
        </div>
        <div className="buttons-group">
         <a href="https://www.linkedin.com/in/abhishek-bijalwan-6125432a2" target="_blank">
          <button className="hex-button1">in</button> 
          </a>
          <a href="https://www.facebook.com/abhishek.bijalwan.71/" target="_blank">
          <button className="hex-button2">f</button> 
          </a>
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRwRfDZRQcGJppGmtpQhZDZtcvmjKjptfcwPkwnzCxzsRhjVvJmrkTngRNMKNzqMrbjrRXvV">
          
          <button className="hex-button3"><image src="./img/mail.png" /></button>
           </a>
          <a href="https://www.instagram.com/abhishekbijalwan58/" target="_blank">
          <button className="hex-button4"></button> </a>
       
      </div>
      </div>
      </div>
    </div>
  );
};

export default LeftSection;