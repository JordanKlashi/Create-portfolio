import LogoSite from "../../img/LogoSite.png"; // Assurez-vous que le chemin d'accès est correct
import LogoCode from "../../img/github.png"; // Assurez-vous que le chemin d'accès est correct
import { useState } from "react";
import Modal from "../modal/modal";

const Project = ({ project }) => {
  const {
    title, 
    description, 
    type, 
    url,
    img, // Supposons que ceci est un tableau d'objets { src: "chemin/vers/image.jpg" }
    code,
  } = project;

  const [showModal, setShowModal] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  const handleImageClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setShowModal(true);
  };

  return (  
    <div className="content">
      <div className="content-style">
    <div className="project-detail">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-images">
        {img.map((image, index) => (
          <img onClick={handleImageClick} key={index} src={image.src} alt={`Project ${title} Image ${index + 1}`} />
        ))}
      </div>
      <div className="project-tags">
        <span className="tag">{type}</span>
        <a className="link" href={url} target="_blank" rel="noopener noreferrer"><img src={LogoSite} alt="Site"/></a>
        <a className="link" href={code} target="_blank" rel="noopener noreferrer"><img src={LogoCode} alt="Code"/></a>
      </div>
    </div>
    </div>
     {showModal && <Modal imageUrl={selectedImageUrl} onClose={() => setShowModal(false)} /> }
    </div>

  );
};

export default Project;