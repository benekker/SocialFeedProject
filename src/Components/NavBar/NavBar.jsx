import './NavBar.css';
import cactus from "./NavBarAssets/icons8-cactus-64.png"

const NavBar = (props) =>{
    return (
        <nav className="navbar">
            <h1 className='header' >Social
                <small className="text-muted">Feed</small>
            </h1>
            <img className='cactusLogo' src={cactus} alt='cactus logo' />
        </nav>
    );
}
export default NavBar;