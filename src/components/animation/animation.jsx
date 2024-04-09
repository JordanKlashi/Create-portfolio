import { useState, useEffect } from "react";

const AnimatedText = ({ text, speed, delay = 0 }) => {
    const [displayText, setDisplayText] = useState('');
    
    useEffect(() => {
        let timer;
        const startAnimation = () => {
            let index = 0;
            timer = setInterval(() => {
                if (index < text.length) {
                    setDisplayText(prevText => prevText + text.charAt(index));
                    index++;
                } else {
                    clearInterval(timer);
                }
            }, speed);
        };
        const delayTimer = setTimeout(startAnimation, delay);
      

        return () => {
            clearTimeout(delayTimer);
            clearInterval(timer);
        };
    }, [text, speed, delay]);
  
    return (
        <p className="presentation-animation">{displayText}</p>
    );
};
  
export default AnimatedText;