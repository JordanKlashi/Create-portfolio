import React, { useState  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Website = ({ onProjectSelect }) => {
  const projectsData  = [
    { 
      id:9,
      title: "Implémentez le front-end d'une application bancaire avec React", 
      img:[ 
        {src: './data/img/photoSite/projet10/photo1.png'}, 
        {src: './data/img/photoSite/projet10/photo2.png'}
      ],
      onImage:"https://jordanklashi.github.io/project-11/",      
      description: "Projet : Site complet en React-Redux, utilisation de MongoDB, appels d'API, hooks, actions, reducers, et toolkit Thunk.", 
      type: 'React', 
      url: 'https://jordanklashi.github.io/project-11/',
      code: 'https://github.com/JordanKlashi/project-11',
    },
    { 
      id:0,
      title: 'Mes premiers pas sur le langage HTML', 
      img:[ 
        {src: "./data/img/photoSite/projet1/photo1.png"}, 
        {src: "./data/img/photoSite/projet1/photo2.png"},
      ],
      onImage:'https://jordanklashi.github.io/Projet-2/',
      description: "Découverte du HTML : Amélioration d'un site existant en ajoutant une section membres et des boutons pour les nouveaux horaires.", 
      type: 'HTML', 
      url: 'https://jordanklashi.github.io/Projet-2/',
      code: 'https://github.com/JordanKlashi/Projet-2' 
    },
    { 
      id:1,
      title: "Créez la page d'agence de voyage en HMTL & CSS", 
      img:[ 
        {src: './data/img/photoSite/projet2/photo1.png'}, 
        {src: './data/img/photoSite/projet2/photo2.png'},
        {src: './data/img/photoSite/projet2/photo3.png'}
      ],
      onImage:'https://jordanklashi.github.io/Projet-3/',
      description: "Approfondissement HTML/CSS : Configuration de l'environnement de développement, découpage de la maquette, intégration du header, formulaire de recherche, filtres, cartes, conteneurs, footer, adaptation responsive et vérification de la qualité du code.", 
      type: 'HTML', 
      url: 'https://jordanklashi.github.io/Projet-3/',
      code: 'https://github.com/JordanKlashi/Projet-3' 
    },
    { 
      id:2,
      title: "Créez l'interface d'un site mobile avec des animations SCSS", 
      img:[ 
        {src: './data/img/photoSite/projet3/photo1.png'}, 
        {src: './data/img/photoSite/projet3/photo2.png'},
        {src: './data/img/photoSite/projet3/photo3.png'}
      ],
      onImage:"https://jordanklashi.github.io/Projet-4/index.html",      
      description: "Initiation à Sass : Configuration de l'environnement, intégration de la version mobile, animations et vérification de la qualité du code.",
      type: 'HTML',
      url: 'https://jordanklashi.github.io/Projet-4/index.html',
      code: 'https://github.com/JordanKlashi/Projet-4'  
    },
    { 
      id:3,
      title: 'Mes premiers pas sur le langage Javascript', 
      img:[ 
        {src: './data/img/photoSite/projet4/photo1.png'}, 
        {src: './data/img/photoSite/projet4/photo2.png'},
        {src: './data/img/photoSite/projet4/photo3.png'}
      ],
      onImage:"https://jordanklashi.github.io/Projet-5/",      
      description: "Initiation à JavaScript : Création d'un carrousel, exploration des fonctions et des écouteurs d'événements.", 
      type: 'Javascript', 
      url: 'https://jordanklashi.github.io/Projet-5/',
      code: 'https://github.com/JordanKlashi/Projet-5'  
    },
    { 
      id:4,
      title: 'Créez une page web dynamique avec Javascript', 
      img:[ 
        {src: './data/img/photoSite/projet5/photo1.png'}, 
        {src: './data/img/photoSite/projet5/photo2.png'},
        {src: './data/img/photoSite/projet5/photo3.png'}
      ],
      onImage:"https://jordanklashi.github.io/Projet-6-Frontend/",      
      description: "Projet : Site pour photographe en JavaScript, communication avec API RESTful, création d'une page de connexion utilisateur fonctionnelle, ajout dynamique de photos via une modale.", 
      type: 'Javascript',
      url: 'https://jordanklashi.github.io/Projet-6-Frontend/',
      code: 'https://github.com/JordanKlashi/Projet-6'  
    },
    { 
      id:5,
      title: "Planifiez le développement d'un site", 
      img:[ 
        {src: './data/img/photoSite/projet6/photo1.png'}, 
        {src: './data/img/photoSite/projet6/photo2.png'}
      ],
      onImage:"./data/doc/gestion de projet 7.pdf",
      description: "Projet en entreprise : Planification, solution technique, veille technologique, spécifications techniques.", 
      type: 'Gestion de projet',
      url: './data/doc/gestion de projet 7.pdf',
      code: 'https://github.com/JordanKlashi/Projet-7', 
    },
    { 
      id:6,
      title: 'Créez une application web de location immobilière avec React', 
      img:[ 
        {src: './data/img/photoSite/projet7/photo1.png'}, 
        {src: './data/img/photoSite/projet7/photo2.png'}
      ],
      description: "Projet : Site complet en React, utilisation de composants réutilisables, React Router DOM, utilisation des props, animations, carrousel.", 
      type: 'React',
      onImage:"https://jordanklashi.github.io/Projet-8-/", 
      url: 'https://jordanklashi.github.io/Projet-8-/',
      code: 'https://github.com/JordanKlashi/Projet-8-' 
    },
    { 
      id:7,
      title: "Optimisez le référencement d'un site de photographe", 
      img:[ 
        {src: "./data/img/photoSite/projet8/photo1.png"}, 
        {src: './data/img/photoSite/projet8/photo2.png'}
      ],
      onImage:"./data/doc/Lighthouse Report Viewer.pdf",      
      description: "Projet SEO : Optimisations SEO, performances du site, référencement local et sur les réseaux sociaux, accessibilité améliorée, rapports finaux d'optimisation.", 
      type: 'SEO', 
      url: 'https://jordanklashi.github.io/Projet-9/',
      code: 'https://github.com/JordanKlashi/Projet-9' 
    },
    { 
      id:8,
      title: "Débuggez le site d'une agence d'événementiel", 
      img:[ 
        {src: './data/img/photoSite/projet9/photo1.png'}, 
        {src: './data/img/photoSite/projet9/photo2.png'}
      ],
      onImage:"https://jordanklashi.github.io/Projet-10/",      
      description: "Projet : Utilisation d'outils de débogage (React Developer Tools), création de tests unitaires, présentation des erreurs et solutions apportées.", 
      type: 'React',
      url: 'https://jordanklashi.github.io/Projet-10/' ,
      code: 'https://github.com/JordanKlashi/Debuggez-une-application-React.JS-main' 
    }
  ];

  const [currentStartIndex, setCurrentStartIndex] = useState(1);
  const [ProjectOnTop, setProjectOnTop] = useState(projectsData.slice(0, 3));

  const updateProjectsToShow = (newIndex) => {
    // Calcule les indices des projets à afficher
    const firstIndex = newIndex - 1 < 0 ? projectsData.length - 1 : newIndex - 1;
    const secondIndex = newIndex;
    const thirdIndex = (newIndex + 1) % projectsData.length;
  
    // Met à jour le tableau des projets à mettre en avant
    const tab = [projectsData[firstIndex], projectsData[secondIndex], projectsData[thirdIndex]];
  
    // Mise à jour de l'état pour les projets à afficher
    setProjectOnTop(tab);
  };
  
  const goToPrevious = () => {
    setCurrentStartIndex((currentIndex) => {
      const newIndex = currentIndex - 1 < 0 ? projectsData.length - 1 : currentIndex - 1;
      updateProjectsToShow(newIndex);
      return newIndex;
    });
  };
  
  const goToNext = () => {
    setCurrentStartIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % projectsData.length;
      updateProjectsToShow(newIndex);
      return newIndex;
    });
  };
  return (
      <div className="content">
          <div className="website">
            <h2 className="website-title">Mes projets</h2>
            <div className="carousel-controls">              
              <FontAwesomeIcon icon={faChevronLeft} onClick={() => goToPrevious()} />
          <div className="website-card">
            {ProjectOnTop.map((project, index) => (
              <div
                key={project.id}
                className={`imgtest ${index === 1 ? 'middle' : ''}`} 
                onClick={() => onProjectSelect(project)}
              >
                <img src={project.img[0].src} alt="Project Logo" />
                <p>PROJET {project.id +1}</p>
                <div>{project.type}</div>

              </div>
            ))}
          </div>
          <FontAwesomeIcon icon={faChevronRight} onClick={() => goToNext()} />
        </div>
      </div>
    </div>
  );
};

export default Website;