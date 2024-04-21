function About() {
  const texts = [       
    {     
        t:"Bienvenue dans ma batcave !",
    },
    {      
        t:"Je vous invite à découvrir les projets qui ont jalonné mon parcours de formation. Chaque projet est le reflet de mes compétences actuelles.",
    },      
    {
        t:"Tout a commencé avec les bases : le HTML. C'est là que j'ai plongé dans les rouages du frontend, accompagné de son fidèle compagnon, le CSS. Ensemble, nous avons exploré l'univers des animations et du style, ouvrant ainsi les portes de la créativité.",
    },
    {      
        t:"Puis est venu le temps de ma première langue de programmation : Javascript. Ce langage m'a captivé par ses fonctionnalités variées et ses possibilités infinies. Chaque ligne de code était une nouvelle aventure, une opportunité de créer quelque chose de nouveau et d'utile.",
    },
    {      
        t:"Enfin, j'ai découvert React. Pour quelqu'un qui adore Javascript, ce fut une transition naturelle. React m'a offert un terrain de jeu où HTML et Javascript se marient harmonieusement, ouvrant la voie à des possibilités illimitées de création.",
    },
    {      
        t:"Mais mon parcours ne s'arrête pas là. Je suis constamment en quête de nouvelles connaissances et de défis excitants. Mon prochain défi ? Maîtriser PHP, un langage puissant qui ouvre les portes du développement côté serveur."
    },
];

  return (
      <div className="content">
          <div className="about">
            <h3>Présentation</h3>
              <div className='about-text'>
                  {texts.map((text, i) => (
                    <p key={i} className='about-text_anim'>{text.t}</p>
                ))}
              </div>
          </div>
      </div>
  );
}

export default About;
             