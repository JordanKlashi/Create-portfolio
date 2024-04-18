import { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Presentation from '../components/presentation/presentation.jsx';
import Website from '../components/website/website.jsx';
import videoSrc from "../img/backgroundvivi.mp4";
import About from "../components/about/about.jsx";
import Project from '../components/project/project.jsx';
import Modal from "../components/modal/modal.jsx";
import Stack from "../components/stack/stack.jsx";

function Home() {
    const [content, setContent] = useState('');
    const [selectedProject, setSelectedProject] = useState(null);

    const showProject = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setContent("Website");
        setSelectedProject(null);
    };

    return (
        <div className="container">
            <h1 className='body-title'>Portfolio Verbreuk Jordan Développeur Web</h1>
        <div className='video-background'>
            <video id='background-video' src={videoSrc} autoPlay muted loop></video></div> 
            
                <div className="sidebar">
                        <Presentation setContent={setContent} content={content}/>
                </div>
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={content}
                        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                        classNames="fade"
                    >
                    <>
                            {content === "About" && <About />}
                            {content === "Website" && <Website onProjectSelect={showProject} />}
                            {content === "Stack" && <Stack />}
                    </>
                    </CSSTransition>
                </SwitchTransition>
                
                <Modal isOpen={selectedProject !== null} onClose={handleCloseModal}>
                    {selectedProject && <Project project={selectedProject} />}
                </Modal>
               
        </div>
        
    );
}

export default Home;