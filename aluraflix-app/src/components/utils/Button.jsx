import { Link } from "react-router-dom";


function Button() {

    return (

        <>
            <Link to={"/novo-filme"}><button className="border-2 border-solid border-white hover:bg-[#FFFFFF30] py-2 px-4 text-white font-semibold">Novo Filme</button></Link>
        </>
    )
}

export default Button;