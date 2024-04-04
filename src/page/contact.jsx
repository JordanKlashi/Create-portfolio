function Contact() {

const information = [
    {
        img : "./data/img/logoContact/pdf.png",
        title: "Mon cv",
        url: "./data/CV/CV_Verbreuk_Jordan.pdf"
    },
    {
        img: "./data/img/logoContact/github.png",
        title: "Mon Github",
        url: "https://github.com/JordanKlashi"
    },
    {
        img: "./data/img/logoContact/Linkedin.png",
        title: "Mon linkedin",
        url: "https://www.linkedin.com/in/jordan-verbreuk-2b19852a4/"
    },
    {
        img: "./data/img/logoContact/mail.png",
        title: "Mon mail",
        url: "mailto:verbreukjordan@gmail.com" 
    }
]
    return(
        <div className="contact">
            <div className="contact-box">
                {information.map((info, index) =>  
                <div key={index} className="contact-box_sub">
                    <img className="contact-box_logo" src={info.img} alt={info.title}/>
                    <a href={info.url}>{info.title}</a>                  
                </div>
                  )}
            </div>
       </div>
    )
}
export default Contact