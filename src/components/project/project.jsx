import LogoSite from "../../img/LogoSite.png"; 
import LogoCode from "../../img/github.png"; 


const Project = ({ project }) => {
  const {
    title, 
    description, 
    type, 
    url,
    img, 
    code,
  } = project;

  return (  

    <div className="project-detail">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div onClick={() => url} className="project-images">
        {img.map((image, index) => (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer">
          <img src={image.src} alt={`Project ${title} ${index + 1}`} />
        </a>
        ))}
      </div>
      <div className="project-tags">
        <span className="tag">{type}</span>
        <a className="link" href={url} target="_blank" rel="noopener noreferrer"><img src={LogoSite} alt="Site"/></a>
        <a className="link" href={code} target="_blank" rel="noopener noreferrer"><img src={LogoCode} alt="Code"/></a>
      </div>
    </div>
  );
};

export default Project;