import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs,faCode,faDisplay,faPeopleGroup } from '@fortawesome/free-solid-svg-icons';


function Stack() {
  const Stacks = [
    {
        title: "Référencement",
        description: "Optimisation de votre site pour les moteurs de recherche afin d'améliorer sa visibilité et d'attirer un trafic ciblé, en utilisant les dernières techniques et outils SEO.",        fa: faCrosshairs
    },
    {
        title: "Développement Web",
        description: "Conception et développement de sites web dynamiques et performants, de simples pages HTML/CSS à des applications web complexes en utilisant des frameworks modernes.",        fa: faCode
    },
    {
        title: "Multi-Plateforme",
        description: "Création de sites web réactifs qui offrent une expérience utilisateur fluide sur tous les appareils, des desktops aux smartphones, en assurant un design élégant et fonctionnel.",        fa: faDisplay
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
                <div className='stack-board'>
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
             