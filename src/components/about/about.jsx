function About() {
  const texts = [       
    {     
        t:"Bienvenue,",
    },
    {      
        t:"Je me présente, Jordan, Developpeur web. Je vous accueille dans ma batcave, c'est ici que je présente tous les projets que j'ai pu effectuer lors de ma formation. Ces projets visent à vous renseigner sur mes compétences actuelles.",
    },      
    {
        t:"J'ai effectivement commencé par la base, le HTML, ce qui m'a permis de comprendre les rouages principaux du frontend, accompagné de son meilleur ami le CSS. J'ai ainsi découvert la joie des animations et du style.",
    },
    {      
        t:"J'ai ensuite enchaîné sur mon premier langage de programmation, Javascript. Ce langage m'a énormément passionné, j’ai été séduit par toutes les fonctionnalités qu'il apportait.",
    },
    {      
        t:"Finalement, je me suis arrêté sur React, et pour moi qui ai adoré Javascript, ça a été un virage assez simple : c'est tout simplement un mélange de HMTL & Javascript où les possibilités sont infinies. ",
    },
    {      
        t:"Je continue de faire des veilles technologiques test pour améliorer mes compétences et en découvrir de nouvelles. Je suis une personne passionnée de son métier et adore relever de nouveau défis."
    }  
];

  return (
      <div className="content">
          <div className="about">
            <h3>A propos de moi</h3>
              <div className='about-text'>
                  {texts.map((text, i) => (
                    <p className='about-text_anim'>{text.t}</p>
                ))}
              </div>
          </div>
      </div>
  );
}

export default About;
             