import { useContext } from "react";
import useFilme from "../../hooks/useFilme";
import { Link } from "react-router-dom";



function Filmes() {


    const filmes = useContext(useFilme)



    return (
        <>
            <h1 className="md:text-5xl text-2xl text-white font-bold mt-12 text-center">Veja todos os filmes</h1>
            <div className="flex justify-center py-12 flex-wrap gap-6">
                {filmes.map((filme) => {
                    return (
                        <Link to={`/filme/${filme.id}`} key={filme.id} className="w-[18rem] flex flex-col items-center gap-2">
                            <img className="w-[16rem] rounded-lg drop-shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer" src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.tittle} />
                            <p className="text-white text-center">{filme.title}</p>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}


export default Filmes;