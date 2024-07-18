function About() {
  const texts = [       
    {     
        t:"Bienvenue dans ma batcave !",
    },
    {      
        t:"Depuis toujours, je suis passionné par l'informatique et j'ai toujours voulu devenir développeur. Cependant, ma situation familiale compliquée plus jeune ne me permettait pas de reprendre l'école. Mon aventure dans le développement a véritablement débuté lors de mon passage chez Conduent. C'est là que j'ai découvert l'univers passionnant de la tech, qui m'a poussé à me tourner vers ce métier. En intégrant Conduent, j'ai réalisé que mon rêve de devenir développeur était encore possible. Désirant devenir un acteur à part entière de ce domaine, j'ai entrepris une formation intensive qui m'a conduit à maîtriser plusieurs technologies.",
    },      
    {
        t:"Tout a commencé avec les bases : le HTML et le CSS. Ensemble, nous avons exploré l'univers des animations et du style, ouvrant ainsi les portes de la créativité. Puis, j'ai découvert ma première langue de programmation : JavaScript. Ce langage m'a captivé par ses fonctionnalités variées et ses possibilités infinies, chaque ligne de code représentant une nouvelle aventure. Ensuite, la transition vers React a été naturelle pour moi, car il marie harmonieusement HTML et JavaScript, offrant des possibilités illimitées de création. Mon parcours ne s'est pas arrêté là : étant un fervent fan de JavaScript, je me suis tourné vers Node.js et Express.js, ce qui m'a permis de créer des applications web complètes, de la base de données à l'interface utilisateur. Parallèlement, j'ai également exploré Angular, un autre framework puissant qui m'a aidé à créer des applications front-end dynamiques et performantes."
    },
    {
        t:"Suite à ma formation initiale, j'ai entrepris une auto-formation intensive sur le framework Next.js. Ce framework m'a permis de créer des applications web performantes et évolutives, tout en me familiarisant avec les concepts de SSR (Server-Side Rendering) et de SSG (Static Site Generation). J'ai eu l'opportunité de mettre en pratique ces compétences lors d'un stage au sein d'une entreprise de ma région. Mon rôle était de dynamiser leur page existante sous WordPress, et j'étais libre de choisir les technologies à utiliser. Ayant récemment appris Next.js, c'est tout naturellement que j'ai opté pour ce framework. En parfaite autonomie, j'ai mené ce projet à bien, démontrant ainsi ma capacité à m'adapter rapidement et à appliquer de nouvelles compétences dans un contexte réel.",
    },
    {
        t:"Suite à ce stage, j'ai repris les recherches d'emploi et je continue de créer des projets personnels. Le dernier en date est une application de gestion de tâches en React et Node.js, développée pour répondre à mes besoins personnels et à ceux de mon entourage. Je m'améliore jour après jour en effectuant des revues de code sur mes anciens projets, les mettant à jour ou recréant de nouveaux éléments. Je me tiens également informé des nouvelles technologies, telles que la sortie de React 19, et j'explore les fonctionnalités d'Angular et d'autres outils innovants. Ma soif de connaissance et ma passion pour le développement ne cessent de croître.",
    },
    {
        t:"Je suis prêt à apporter cette passion et ces compétences à une nouvelle équipe, et je suis convaincu que mon parcours unique et ma détermination feront de moi un atout précieux pour votre entreprise. N'hésitez pas à me contacter pour discuter de la manière dont je pourrais contribuer à vos projets et rejoindre votre équipe."
    }
];


  return (
      <div className="content">
          <div className="about">
            <h3>Présentation</h3>
              <div className='about-text' id="about-anchor">
                  {texts.map((text, i) => (
                    <p key={i} className='about-text_anim'>{text.t}</p>
                ))}
              </div>
              <span className="about_update">Updated 18/07/2024</span>
          </div>
      </div>
  );
}

export default About;
             