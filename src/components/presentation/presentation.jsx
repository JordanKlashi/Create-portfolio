
function Presentation({ setContent, content }) {

    const Logo = [
        {
            img: "./data/img/logoContact/gith.png",
            url: "https://github.com/JordanKlashi"
        },
        {
            img: "./data/img/logoContact/link.png",
            url: "https://www.linkedin.com/in/jordan-verbreuk-2b19852a4/"
        },
        {
            img: "./data/img/logoContact/mail.png",
            url: "mailto:verbreukjordan@gmail.com"
        }
    ];
    const isActive = (section) => content === section ? 'active' : '';

    return (
        <>
            <div className='presentation'>
                <div className='presentation-tags'>
                    <h2>Me contacter</h2>
                    <div className="presentation-tags_contact">
                        {Logo.map((logo, index) =>
                            <a target="_blank" rel="noopener noreferrer" key={index} href={logo.url}><img src={logo.img} alt={logo.url} /></a>
                        )}
                    </div>
                </div>
                <div className='presentation-info'>
                    <div className='presentation-info_sub'>
                        <p className='presentation-info_sub-p1'>Bonjour, je m'appelle Jordan</p>
                        <p className='presentation-info_sub-p2'>Je suis Développeur Web<span className="presentation-info_sub_anim">_</span></p>
                    </div>
                    <div className='presentation-profil'></div>
                </div>

                <div className='Header'>
                    <div className={`presentation-try ${isActive('About')}`}>
                        <div className="presentation-tiret"></div>
                        <button className='presentation-btn' onClick={() => setContent("About", "about-anchor")}>Présentation</button>
                    </div>
                    <div className={`presentation-try ${isActive('Website')}`}>
                        <div className="presentation-tiret"></div>
                        <button className='presentation-btn' onClick={() => setContent("Website", "website-anchor")}>Mes projets</button>
                    </div>
                    <div className={`presentation-try ${isActive('Stack')}`}>
                        <div className="presentation-tiret"></div>
                        <button className='presentation-btn' onClick={() => setContent("Stack", "stack-anchor")}>Mes compétences</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Presentation;