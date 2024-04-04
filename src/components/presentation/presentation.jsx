import AnimatedText from "../animation/animation"

function presentation() {

    const Logo = [
        {
            img: "./data/img/logoContact/github.png",
            url: "https://github.com/JordanKlashi"
        },
        {
            img: "./data/img/logoContact/linkedin.png",
            url: "https://www.linkedin.com/in/jordan-verbreuk-2b19852a4/"
        }
    ]

    return (
        <div className="sidebar">
            <div className='presentation'>
            <div className='presentation-info'>
                <div className='presentation-info_sub'>
                    <AnimatedText text="Boonjour, je m'appelle Verbreuk Jordan" speed={100} />
                    <AnimatedText text="Jee suis Développeur Web." speed={100} />
                </div>
                <div className='presentation-profil'></div>
                
            </div>
            <div className='presentation-tags'>
                <p>A propos</p>
                <p>Projet</p>
                <div className="presentation-tags_contact">
                    {Logo.map((logo, index) =>
                    <a key={index} href={logo.url}><img src={logo.img} alt={logo.url}/></a>
                    
                    )}
                    
                </div>
            </div>
            </div>
        </div>
    )
}
export default presentation