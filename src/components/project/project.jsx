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
    onImage,
  } = project;

  return (  
    <div itemScope itemType="https://schema.org/CreativeWork" className="project-detail">
      <h3 itemProp="about" className="project-title">{title}</h3>
      <span className="tag">{type}</span>
      <div itemProp="exampleOfWork" className="project-images">
        <a href={onImage} target="_blank" rel="noopener noreferrer">
          <img src={img[1].src} alt={`Project ${title} 2`} />
        </a>
      </div>
      <p itemProp="abstract" className="project-description">{description}</p>
      <div itemProp="usageInfo" className="project-tags">
        <a itemProp="exampleOfWork" className="link" href={url} target="_blank" rel="noopener noreferrer"><img className="imgWebsite" src={LogoSite} alt="Site"/></a>
        <a itemProp="codeRepository" className="link" href={code} target="_blank" rel="noopener noreferrer"><img className="imgCode" src={LogoCode} alt="Code"/></a>
      </div>
    </div>
  );
};

export default Project;