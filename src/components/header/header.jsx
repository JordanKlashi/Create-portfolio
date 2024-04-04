import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <h1 className="title">Portfolio Verbreuk Jordan</h1>
        <div className="Link">

          <NavLink to="/Create-portfolio/" className="Link_Accueil">
            Accueil
          </NavLink>
          
          <NavLink to="/Create-portfolio/Contact" className="Link_Apropos">
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
export default Header;
