import Presentation from '../components/presentation/presentation.jsx';
import Website from '../components/website/website.jsx';
import videoSrc from "../img/backgroundvivi.mp4"
import About from "../components/about/about.jsx";
import { useState, useEffect } from 'react';
import Project from '../components/project/project.jsx';
import Modal from "../components/modal/modal.jsx";
import CursorLight from '../components/cursorlight/cursorlight.jsx';

function Home() {
    const [content, setContent] = useState('About');
    const [selectedProject, setSelectedProject] = useState(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e) => {
          setCursorPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateCursorPosition);
    
        return () => window.removeEventListener('mousemove', updateCursorPosition);
      }, []);


    const showProject = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setContent("Website");
        setSelectedProject(null); 
    };

    const isActive = (section) => content === section ? 'active' : '';

    return (
        <div className='video-background'>
            <CursorLight position={cursorPosition} />
            <video id='background-video' src={videoSrc} autoPlay muted loop></video>
            <div className='container'>
                <div className="sidebar">
                    <div className='sidebar-inner'>
                        <Presentation />
                        <div className='Header'>
                            <div className={`presentation-try ${isActive('About')}`}>
                                <div className="presentation-tiret"></div>
                                <button className='presentation-btn' onClick={() => setContent("About")}>A propos</button>
                            </div>
                            <div className={`presentation-try ${isActive('Website')}`}>
                                <div className="presentation-tiret"></div>
                                <button className='presentation-btn' onClick={() => setContent("Website")}>Mes projets</button>
                            </div>
                        </div>
                    </div>
                </div>
                {content === "About" && <About />}
                {content === "Website" && <Website onProjectSelect={showProject} />}
                
                <Modal isOpen={selectedProject !== null} onClose={handleCloseModal}>
                    {selectedProject && <Project project={selectedProject} />}
                </Modal>
            </div>
        </div>
        
    );
}

export default Home;