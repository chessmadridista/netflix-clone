import { Link } from "react-router-dom";

function NetflixLogo(): JSX.Element {
    return (
        <Link to='/'>
            <img
                src="src/assets/netflix logo.png" alt="Netflix logo" width={170}
                style={{position: 'absolute', top: '3vh', left: '3vw', zIndex: 1}}
            />    
        </Link>

    );
}

export default NetflixLogo;