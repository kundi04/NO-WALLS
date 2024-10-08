import NowallsLogo from "../assets/images/NoWallsLogo.png";
import '../App.css';

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">
            <img src={NowallsLogo} alt="Nowalls Logo" style={{ width: '150px' }} />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a href="#svc_sec" className="nav-links">Services</a>
              </li>
              <li className="nav-item">
                <a href="#mail" className="nav-links">Subscribe</a>
              </li>
              <li className="nav-item">
                <a href="#Get-in-touch" className="nav-links">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
