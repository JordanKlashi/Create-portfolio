import Presentation from '../components/presentation/presentation.jsx';
import Website from '../components/website/website.jsx';
import videoSrc from "../img/backgroundvivi.mp4"
import About from "../components/about/about.jsx";


function Home() {


    return (




   
        <div className='video-background'>
            <video id='background-video' src={videoSrc} autoPlay muted loop></video>
            <div className='container'>
                <Presentation />
                {/* <About />  */}
                {/* <Website /> */}
            </div>            
        </div>

    );
}

export default Home;