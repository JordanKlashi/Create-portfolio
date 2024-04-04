import Profilphoto from "../../img/profil.png";
import Collapse from "../animation/Collapse";

function about() {
    return(
    <div className="content">
      <div className="content-style">
        <div className="about">
          <img src={Profilphoto} alt="Verbreuk Jordan" />
          <div className="about-collapse">
          <Collapse btnText={"Anecdote"} text={"Nous y voilà, ce moment ou je vous raconte mon parcours, J'ai toujours été passionnées par le développement, j'en ai pour souvenir, ce tout premier bout de code écris sur un blocnote qui me servait a lancer des milliers de page web, juste créer pour embêter mes amies."} />
          <Collapse btnText={"Parcours scolaire"} text={"Au niveau du parcours scolaire, ma seconde passion étant le sport, je me suis dirigés tout naturellement sur une formation d'educateur sportif,une fois le CESS en poche, j'ai continuer sur une spécialisation Educateur(bac+2) "} />
          <Collapse btnText={"Langue secondaire"} text={"Une fois le diplôme en poche, je décide de partir voyager, visiter le monde, je choisis l'Australie, grâce a ce voyage j'améliore grandement mon anglais, de retour en Belgique j'ai une super opportunités de travailler dans l'événementiel pour la base de l'OTAN."} />
          <Collapse btnText={"La vente"} text={ "après une année je me réoriente, je décide de partir dans la vente, ça me réussis, au bout d'un an je passe responsable magasin, seul soucis je suis a 2 heures de ma famille et mes proches. après 2 ans en tant que responsable, je décide de tenter l'aventure en France."} />
          <Collapse btnText={"Arrivé en France"} text={"Une fois arrivé en France, je décide de retourner dans ma première passion, l'informatique, ça tombe bien je trouve une opportunités pour grosse entreprise dans ma région, je fais donc du conseil client sur des appareils informatiques, je commence par les téléphones et me retrouve très rapidement sur tout les appareils de la marque,je deviens même au bout d'une année superviseur technique, je fais la liaison entre les ingénieurs et les problèmes client."} />
          <Collapse btnText={"Ma réorientation"} text={"après 3 ans les conditions changent, les valeurs ne me correspondent plus, mais j'aime toujours autant l'informatique, je prend donc ma première pause, sur ses 10 dernières années,"} />
          <Collapse btnText={"Mon Credeau"} text={"Je compte devenir un developpeur confirmé, je suis passionné et rien ne pourra m'arrêter maintenant que j'en ai la certitude."} />
          </div>
          {/* <p>J'ai toujours été passionnées par l'informatique en règle général,
             depuis mon plus jeune âge je m'amusais a créer des bouts de code qui servait
              juste a lancer une page internet des milliers de fois, ce qui avait pour unique but d'embêter mes amies,
              entre temps la vie a suivis son cours, diplômé Educateur, j'aime le contact social,
              mais ce métier aussi beau soit-il, ne correspond pas a mes attentes, 
              je décide de garder ce côtés social mais cette fois-ci dans la vente,
              je m'y sens bien mais il me manque quelque chose, je décide de reprendre le chemin,
              je me dirige vers le conseil mais cette fois-ci en relation avec l'informatique, 
              et je finis par me rendre compte que ce qui me passionne c'est certes aidés les personnes,
              mais c'est surtout de régler des problématiques, alors au début j'assiste mais je deviens
              rapidement un bon élément et je régle les problèmes plus complexes qui nécessite de 
              communiquer avec les ingénieurs d'une multinationale américaine, et depuis ce moment 
              l'informatique ne m'a plus jamais quittés, j'adore ce que je fais, mais j'en veux plus,
              je me rends compte de mon erreur et décide de repartir dans ce que j'ai toujours 
              voulu faire au fond de moi, l'informatique, </p> */}
        </div>
      </div>  
    </div>
      
)}
  

export default about