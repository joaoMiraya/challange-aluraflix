import db from '../../database/db.json';
import { Link } from 'react-router-dom';


function MeusFilmes() {

    const categorias = {};
    db.filmes.forEach(filme => {
        if (!categorias[filme.categoria_video]) {
            categorias[filme.categoria_video] = [];
        }
        categorias[filme.categoria_video].push(filme);
    });
    if (!db.filmes.length) {
        return <div><h1 className='text-white text-center text-3xl'>Você ainda não possue nenhum filme cadastrado</h1></div>
    }
    return (

        <div className='flex justify-start px-24 h-screen'>
            <div className='text-white flex flex-col gap-2'>
                {Object.keys(categorias).map((categoria) => {
                    return (
                        <div key={categoria}>
                            <h1 className='text-4xl font-bold my-6 text-center'>{categoria}</h1>
                            <div className='flex gap-4'>
                                {categorias[categoria].map(filme => {
                                    return (
                                        <Link to={`/meus-filmes/${filme.id}`} key={filme.id}>
                                            <div className='flex flex-col gap-2 items-center border-blue-400 border-solid border-2 p-2'>
                                                <img className='w-[12rem]' src={filme?.link_imagem} alt={filme?.title} />
                                                <h1 className='text-white text-2xl '>{filme.title}</h1>
                                                <p className='text-white'>{filme?.descricao}</p>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default MeusFilmes;