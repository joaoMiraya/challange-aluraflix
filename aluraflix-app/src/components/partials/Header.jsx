import { Link } from "react-router-dom";
import Button from "../utils/Button";
import Logotipo from "../utils/Logotipo";

function Header() {

    return (

        <>
            <header className="bg-black p-4">
                <nav className="flex justify-between items-center">

                    <Logotipo />

                    <div className="flex gap-4">
                        <Button />
                        <Link to={"/meus-filmes"}><button className="border-2 border-solid border-white hover:bg-[#FFFFFF30] py-2 px-4 text-white font-semibold">Meus Filmes</button></Link>
                    </div>

                </nav>
            </header>
        </>
    )
}


export default Header;