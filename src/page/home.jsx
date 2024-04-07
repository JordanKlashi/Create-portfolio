import Presentation from '../components/presentation/presentation.jsx';
import Website from '../components/website/website.jsx';
import videoSrc from "../img/backgroundvivi.mp4"
import About from "../components/about/about.jsx";
import { useState } from 'react';
import Project from '../components/project/project.jsx';


function Home() {
    const [content, setContent] = useState('About');
    const [selectedProject, setSelectedProject] = useState(null);

    // Fonction pour afficher un projet spécifique
    const showProject = (project) => {
        setSelectedProject(project);
        setContent("Project");
    };

    // Retour à l'affichage des projets
    const backToProjects = () => {
        setContent("Website");
        setSelectedProject(null); // Réinitialiser le projet sélectionné
    };
    return (
        <div className='video-background'>
            <video id='background-video' src={videoSrc} autoPlay muted loop></video>
            <div className='container'>
                <div className="sidebar">
                    <div className='sidebar-inner'>
                        <Presentation />
                        <div className='Header'>
    <div className='presentation-try'>
        <div className="presentation-tiret"></div>
        <button className='presentation-btn' onClick={() => setContent("About")}>A propos</button>
    </div>
    <div className="presentation-try">
        <div className="presentation-tiret"></div>
        <button className='presentation-btn' onClick={() => setContent("Website")}>Projet</button>
    </div>
</div>

                    </div>
                </div>
                {
                    content === "About" && <About />
                }
                {
                    content === "Website" && <Website onProjectSelect={showProject} />
                }
                {
                content === "Project" && selectedProject && (
                    <>
                        <button className='back-button' onClick={backToProjects}>Retour aux Projets</button>
                        <Project project={selectedProject} />
                    </>
                )
            }
            </div>
        </div>

    );
}

export default Home;