import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs,faCode,faDisplay,faPeopleGroup } from '@fortawesome/free-solid-svg-icons';


function Stack() {
  const Stacks = [
    {
        title: "Référencement",
        description: "Optimisation de votre site pour les moteurs de recherche afin d'améliorer sa visibilité et d'attirer un trafic ciblé, en utilisant les dernières techniques et outils SEO.",        fa: faCrosshairs
    },
    {
        title: "Front-End",
        description: "Expertise en développement d'interfaces utilisateur élégantes et responsives avec HTML et CSS. Création d'expériences utilisateur dynamiques et performantes en utilisant JavaScript, la bibliothèque React et le framework Next.js.",        fa: faDisplay
    },
    {
        title: "Back-End",
        description: "Développement de l'architecture serveur avec Node.js et Express pour créer des applications web robustes, évolutives et sécurisées. Intégration de bases de données, gestion des APIs RESTful et optimisation des performances pour une expérience utilisateur fluide.",        fa: faCode
    },
    {
        title: "Développeur Agile",
        description: "Expérience approfondie avec les méthodologies Agile, facilitant une collaboration efficace en équipe pour une livraison rapide et de qualité des projets.",        fa: faPeopleGroup
    }

  ];

  return (
      <div className="content">
          <div className="stack">
              <h2 className='stack-title'>Mes compétences</h2>
              <div>                
                <div className='stack-board' id="stack-anchor">
                {Stacks.map((comp, index) => 
                    <div itemScope itemType='https://schema.org/Occupation' className='stack-card' key={index} >
                    <h3 itemProp='qualifications' className='stack-card_title'>{comp.title}</h3>
                    <FontAwesomeIcon className='stack-card_Fa' icon={comp.fa} alt={comp.title} />
                    <p itemProp='skills'>{comp.description}</p>
                    </div>
                )}
                </div>
              </div>
          </div>
      </div>
  );
}

export default Stack;
             