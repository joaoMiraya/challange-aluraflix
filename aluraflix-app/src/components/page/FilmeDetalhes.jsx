import { useContext } from "react";
import { useParams } from "react-router-dom";
import useFilme from "../../hooks/useFilme";

function FilmeDetalhes() {

    const { id } = useParams();
    const filmes = useContext(useFilme);

    const filme = filmes?.find(filme => filme.id == id);
    console.log(filme);

    return (

        <>
            <div className=" md:flex-row md:items-start md:h-screen flex-col justify-center items-center flex ">
                <img src={`https://image.tmdb.org/t/p/w500${filme?.backdrop_path}`} alt={filme?.title} className="w-screen md:w-1/2  object-contain z-0 " />
                <div className="w-full px-6 mt-16">
                    <h1 className="text-white text-5xl font-semibold text-center">{filme?.title}</h1>
                    <p className="text-white text-center my-4">{filme?.overview}</p>
                    <div className="flex justify-between w-full my-6">
                        <p className="text-white ">Data de lançamento: </p>
                        <p className="text-white items-center">{filme?.release_date} </p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default FilmeDetalhes;