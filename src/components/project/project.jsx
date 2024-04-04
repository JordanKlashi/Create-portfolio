import LogoSite from "../../img/LogoSite.png"
import LogoCode from "../../img/LogoCode.png"
import Modal from '../modal/modal.jsx';
import Carrousel from '../carousel/carousel.jsx';
import { useState } from "react";

const Project = ({ project }) => {
  // const [showModal, setShowModal] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);

  const { 
    id,
    title, 
    description, 
    type, 
    url,
    img,
    code,
  } = project;

  // const handleImageClick = (slide) => {
  //   setSelectedImage(slide);
  //   setShowModal(true);
  // };
  // { 
  //   id:9,
  //   title: "Implémentez le front-end d'une application bancaire avec React", 
  //   img:[ 
  //     {src: './data/img/photoSite/projet10/photo1.JPG'}, 
  //     {src: './data/img/photoSite/projet10/photo2.JPG'},
  //     {src: './data/img/photoSite/projet10/photo3.JPG'}
  //   ],      description: "Description du projet : Réalisation complet d'un site en React-Redux, travailler avec une base de données Mongodb, faire des call API, utilisations des hook, découverte des actions, des reducers, du toolkit Thunk", 
  //   type: 'React', 
  //   url: 'https://jordanklashi.github.io/project-11/',
  //   code: 'https://github.com/JordanKlashi/project-11',
  // },

  return (  
    <div className="content">
      <div className="content-style">
        <div className="project">
          <h3 className="project-title">Implémentez le front-end d'une application bancaire avec React</h3>
          <p className="project-description">Réalisation complet d'un site en React-Redux, travailler avec une base de données Mongodb, faire des call API, utilisations des hook, découverte des actions, des reducers, du toolkit Thunk</p>
          <div className="imgtestorder">
            <div className="imgtest" src="./data/img/photoSite/projet10/photo1.JPG" alt="test">img</div>
            <div className="imgtest" src="./data/img/photoSite/projet10/photo1.JPG" alt="test">img</div>
            <div className="imgtest" src="./data/img/photoSite/projet10/photo1.JPG" alt="test">img</div>
          </div>
          <div className="project-tags">
            <p className="project-tags_type">React</p>
            <a className="project-tags_link" href="#">Mon site</a>
            <a className="project-tags_link" href="#">Mon code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;