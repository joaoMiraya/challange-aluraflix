import icon from '/images/icon.svg';
import { Link } from 'react-router-dom';

function Logotipo() {
    return (
        <>
            <Link to={"/"}><img src={icon} alt="Aluraflix" /></Link>
        </>
    )
}


export default Logotipo;