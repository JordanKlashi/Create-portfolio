import { NavLink } from "react-router-dom"


function footer() {


    return(
        <footer className="footer-background">
        <div className="footer-card" >
            <div className="footer-link">
                <NavLink className="footer-list_link" to="/Create-portfolio/">Accueil</NavLink>
                <NavLink className="footer-list_link" to="/Create-portfolio/Contact">Contact</NavLink>
            </div>
        </div>
        </footer>
    )
}

export default footer