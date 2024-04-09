import React, { useState  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Website = ({ onProjectSelect }) => {
  const projectsData  = [
    { 
      id:0,
      title: 'Premiers pas sur le langage HTML', 
      img:[ 
        {src: "./data/img/photoSite/projet1/photo1.JPG"}, 
        {src: "./data/img/photoSite/projet1/photo2.JPG"},
        {src: "./data/img/photoSite/projet1/photo3.JPG"},
      ],
      description: "Description du projet: Prise en main d'un site déjà coder en HTML & CSS sur lequelle j'ai effectué des modifications, l'ajout de la section membres, l'ajout d'un nouveaux boutons pour récupérer les nouveaux horaires ", 
      type: 'HTML', 
      url: 'https://jordanklashi.github.io/Projet-2/',
      code: 'https://github.com/JordanKlashi/Projet-2' 
    },
    { 
      id:1,
      title: "Créez la page d'agence de voyage avec HMTL & CSS", 
      img:[ 
        {src: './data/img/photoSite/projet2/photo1.JPG'}, 
        {src: './data/img/photoSite/projet2/photo2.JPG'},
        {src: './data/img/photoSite/projet2/photo3.JPG'}
      ],
      description: "Description du projet: Approfondir ses connaissances en HTMl & CSS, mettre en place son environnement de développement, découpage de la maquette, intégrez le header du projet, ajout d'un formulaire de recherche, ajout de filtres, réalisations de carte, intégrez des conteneur, implémentez le footer, mettre en place le responsive du site, vérifiez la qualité du code", 
      type: 'HTML', 
      url: 'https://jordanklashi.github.io/Projet-3/',
      code: 'https://github.com/JordanKlashi/Projet-3' 
    },
    { 
      id:2,
      title: "Améliorez l'interface d'un site mobile avec des animations SCSS", 
      img:[ 
        {src: './data/img/photoSite/projet3/photo1.JPG'}, 
        {src: './data/img/photoSite/projet3/photo2.JPG'},
        {src: './data/img/photoSite/projet3/photo3.JPG'}
      ],      description: "Description du projet : Initiation a Sass, mettre en place l'environnement de développement, intégrez la version mobile, créez des animations, vérifiez la qualité du code ",
      type: 'HTML',
      url: 'https://jordanklashi.github.io/Projet-4/index.html',
      code: 'https://github.com/JordanKlashi/Projet-4'  
    },
    { 
      id:3,
      title: 'Premiers pas sur le langage Javascript', 
      img:[ 
        {src: './data/img/photoSite/projet4/photo1.JPG'}, 
        {src: './data/img/photoSite/projet4/photo2.JPG'},
        {src: './data/img/photoSite/projet4/photo3.JPG'}
      ],      description: "Description du projet : Initiation a Javascript, réalisation d'un caroussel en javascript, découverte des fonctions et écouteurs d'évènements", 
      type: 'Javascript', 
      url: 'https://jordanklashi.github.io/Projet-5/',
      code: 'https://github.com/JordanKlashi/Projet-5'  
    },
    { 
      id:4,
      title: 'Créez une page web dynamique avec Javascript', 
      img:[ 
        {src: './data/img/photoSite/projet5/photo1.JPG'}, 
        {src: './data/img/photoSite/projet5/photo2.JPG'},
        {src: './data/img/photoSite/projet5/photo3.JPG'}
      ],      description: "Description du projet : Réalisation d'un site pour une photographe en javascript, communiquer avec une API Resfull, création d'une page de connexion utilisateur fonctionnel, créez une modale sur laquelle on ajoute dynamiquement des photos sur le site", 
      type: 'Javascript',
      url: 'https://jordanklashi.github.io/Projet-6/',
      code: 'https://github.com/JordanKlashi/Projet-6'  
    },
    { 
      id:5,
      title: 'Planifiez le développement du site de votre client', 
      img:[ 
        {src: './data/img/photoSite/projet6/photo1.JPG'}, 
        {src: './data/img/photoSite/projet6/photo2.JPG'},
        {src: './data/img/photoSite/projet6/photo3.JPG'},
      ],
      description: "Description du projet : Mise en situation en entreprise, présentation de la planification, présentation de la solution technique, présentation de la veille, spécifications techniques ", 
      type: 'SEO',
      url: 'https://jordanklashi.github.io/Projet-7/',
      code: 'https://github.com/JordanKlashi/Projet-7', 
    },
    { 
      id:6,
      title: 'Créez une application web de location immobilière avec React', 
      img:[ 
        {src: './data/img/photoSite/projet7/photo1.JPG'}, 
        {src: './data/img/photoSite/projet7/photo2.JPG'},
        {src: './data/img/photoSite/projet7/photo3.JPG'}
      ],      description: "Description du projet : Réalisation complet d'un site en React, découverte des composant réutilisable, React-router-dom, les props  ", 
      type: 'React', 
      url: 'https://jordanklashi.github.io/Projet-8-/',
      code: 'https://github.com/JordanKlashi/Projet-8-' 
    },
    { 
      id:7,
      title: "Optimisez le référencement d'un site de photographe", 
      img:[ 
        {src: "./data/img/photoSite/projet8/photo1.JPG"}, 
        {src: './data/img/photoSite/projet8/photo2.JPG'},
        {src: './data/img/photoSite/projet8/photo3.JPG'}
      ],      description: "Description du projet : Découverte du SEO, listez les optimisations réalisables, optimisez les performances du site, optimisez le SEO technique, ajoutez le référencement local et réseaux sociaux, optimisez l'accessibilités du site, générer des rapport finaux constatant de l'optimisation ", 
      type: 'SEO', 
      url: 'https://jordanklashi.github.io/Projet-9/',
      code: 'https://github.com/JordanKlashi/Projet-9' 
    },
    { 
      id:8,
      title: "Débuggez le site d'une agence d'événementiel", 
      img:[ 
        {src: './data/img/photoSite/projet9/photo1.JPG'}, 
        {src: './data/img/photoSite/projet9/photo2.JPG'},
        {src: './data/img/photoSite/projet9/photo3.JPG'}
      ],      description: 'Description du projet : Découverte des outils de débogage, react developper tools, créez des tests unitaire, présentation des erreurs et des solutions apportés', 
      type: 'React',
      url: 'https://jordanklashi.github.io/Debuggez-une-application-React.JS-main/' ,
      code: 'https://github.com/JordanKlashi/Debuggez-une-application-React.JS-main' 
    },
    { 
      id:9,
      title: "Implémentez le front-end d'une application bancaire avec React", 
      img:[ 
        {src: './data/img/photoSite/projet10/photo1.JPG'}, 
        {src: './data/img/photoSite/projet10/photo2.JPG'},
        {src: './data/img/photoSite/projet10/photo3.JPG'}
      ],      description: "Description du projet : Réalisation complet d'un site en React-Redux, travailler avec une base de données Mongodb, faire des call API, utilisations des hook, découverte des actions, des reducers, du toolkit Thunk", 
      type: 'React', 
      url: 'https://jordanklashi.github.io/project-11/',
      code: 'https://github.com/JordanKlashi/project-11',
    },
  ];

  const [currentStartIndex, setCurrentStartIndex] = useState(0);




    const goToPrevious = () => {
      setCurrentStartIndex(currentIndex => {
        const newIndex = currentIndex - 1;

        return newIndex < 0 ? (projectsData.length - 1) : newIndex;
      });
    };
  
    const goToNext = () => {
      setCurrentStartIndex(currentIndex => {
        const newIndex = currentIndex + 2;
        return newIndex >= projectsData.length ? 0 : currentIndex + 1;
      });
    };

  return (
      <div className="content">
        <div className="content-style">
          <div className="website">
            <h2 className="website-title">Mes projets</h2>
            <div className="carousel-controls">
              <FontAwesomeIcon icon={faChevronLeft} onClick={goToPrevious} />
          <div className="website-card">
            {projectsData.slice(currentStartIndex, currentStartIndex + 3).map((project, index) => (
              <div
                key={project.id}
                className={`imgtest ${index === 1 ? 'middle' : ''}`} 
                onClick={() => onProjectSelect(project)}
              >
                <div>Projet {project.id +1}</div>
                <img src={project.img[0].src} alt="Project Logo" />
                <div>{project.type}</div>
              </div>
            ))}
          </div>
          <FontAwesomeIcon icon={faChevronRight} onClick={goToNext} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Website;