import AnimatedText from "../animation/animation"

function presentation() {

    const Logo = [
        {
            img: "./data/img/logoContact/gith.png",
            url: "https://github.com/JordanKlashi"
        },
        {
            img: "./data/img/logoContact/link.png",
            url: "https://www.linkedin.com/in/jordan-verbreuk-2b19852a4/"
        }
    ]

    return (
            <div className='presentation'>
            <div className='presentation-info'>
                <div className='presentation-info_sub'>
                    <AnimatedText text="Boonjour, je m'appelle Jordan" speed={50}  />
                    <AnimatedText text="Jee suis Développeur Web." speed={50} delay={1500}/>
                </div>
                <div className='presentation-profil'></div>
                
            </div>
            <div className='presentation-tags'>
                <div className="presentation-tags_contact">
                    {Logo.map((logo, index) =>
                    <a key={index} href={logo.url}><img src={logo.img} alt={logo.url}/></a>
                    
                    )}
                    
                </div>
            </div>
            </div>
    )
}
export default presentation