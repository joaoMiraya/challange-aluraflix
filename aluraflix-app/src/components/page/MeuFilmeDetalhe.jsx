import { useNavigate, useParams } from "react-router-dom";
import db from '../../database/db.json';
import axios from "axios";


function MeuFilmeDetalhe() {

    const navigate = useNavigate();
    const { id } = useParams();

    const filme = db.filmes?.find(filme => filme.id == id);
    console.log(filme);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/filmes/${id}`);
            alert("Filme excluído com sucesso");
            navigate('/')
        } catch (error) {
            console.error("Erro ao excluir o objeto:", error);
        }
    };

    return (

        <>
            <div className="flex flex-col items-center">
                <img src={filme?.link_imagem} alt={filme?.title} />
                <h2 className="text-white text-4xl font-semibold">{filme?.title}</h2>
                <p className="text-white">{filme?.descricao}</p>
            </div>
            <div className="flex justify-end pr-12">
                <button onClick={handleDelete} className="text-red-400 hover:bg-red-400 hover:text-white transition-all duration-300 rounded-md border-2 border-red-400 py-3 px-8">Excluir</button>
            </div>
        </>
    )
}

export default MeuFilmeDetalhe;