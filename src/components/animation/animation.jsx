import { useState, useEffect } from "react";


const AnimatedText = ({ text, speed }) => {
    const [displayText, setDisplayText] = useState('');
    
    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(prevText => prevText + text.charAt(index));
          index++;
        } else {
          clearInterval(interval); // Arrêter l'animation une fois que tout le texte est affiché
        }
      }, speed);
      
      // Nettoyer l'intervalle lorsque le composant est démonté pour éviter les fuites de mémoire
      return () => clearInterval(interval);
    }, [text, speed]); // Déclencher l'effet seulement lorsque le texte ou la vitesse changent
  
    return (
        <p className="presentation-animation">{displayText}</p>
    );
  };
  
  export default AnimatedText;