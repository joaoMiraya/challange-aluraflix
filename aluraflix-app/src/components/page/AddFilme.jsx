import { useRef, useState } from "react";
import { idGenerator } from "../../javascript/idGenerator";
import axios from 'axios';
import db from '../../database/db.json';


function AddFilme() {

    const [title, setTitle] = useState('');
    const [linkVideo, setLinkVideo] = useState('');
    const [linkImagem, setLinkImagem] = useState('');
    const [descricaoVideo, setDescricaoVideo] = useState('');
    const [categoriaVideo, setCategoriaVideo] = useState('');
    const [secureCode, setSecureCode] = useState(idGenerator());

    //RESPONSÁVEL POR ADICIONAR/REMOVER A CLASSE AOS INPUTS
    const inputRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    const handleOnFocus = (index) => {
        inputRefs[index].current.classList.add("borderClass");
    };
    const handleOnBlur = (index) => {
        inputRefs[index].current.classList.remove("borderClass");
    };

    const resetForm = () => {
        setTitle('')
        setLinkVideo('')
        setLinkImagem('')
        setCategoriaVideo('')
        setDescricaoVideo('')
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newFilme = {
            id: db.filmes.length + 1,
            title: title,
            link_video: linkVideo,
            link_imagem: linkImagem,
            descricao: descricaoVideo,
            categoria_video: categoriaVideo,
            secure_code: secureCode,
        };
        await axios.post("http://localhost:3000/filmes", newFilme)
            .then((response) => {
                alert('Filme adicionado')
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            })
        resetForm();
    };



    return (

        <>
            <div className="md:px-24 px-16 ">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2 ">

                        <div className=" relative flex flex-col">
                            <label className="text-gray-200 text-sm absolute pl-4" htmlFor="title">Titulo</label>
                            <input
                                required
                                ref={inputRefs[0]}
                                className={` outline-none pt-[18px] text-gray-300 pl-4 bg-[#53585D] rounded-sm`}
                                type="text"
                                id="title"
                                name="title"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                onFocus={() => handleOnFocus(0)}
                                onBlur={() => handleOnBlur(0)}
                            />
                        </div>

                        <div className=" relative flex flex-col">
                            <label className="text-gray-200 text-sm absolute pl-4" htmlFor="linkVideo">Link do video</label>
                            <input
                                required
                                ref={inputRefs[1]}
                                className={` outline-none pt-[18px] text-gray-300 pl-4 bg-[#53585D] rounded-sm`}
                                type="text"
                                id="linkVideo"
                                name="linkVideo"
                                onChange={(e) => setLinkVideo(e.target.value)}
                                value={linkVideo}
                                onFocus={() => handleOnFocus(1)}
                                onBlur={() => handleOnBlur(1)}
                            />
                        </div>

                        <div className=" relative flex flex-col">
                            <label className="text-gray-200 text-sm absolute pl-4" htmlFor="linkImagem">Link da imagem do video</label>
                            <input
                                required
                                ref={inputRefs[2]}
                                className={` outline-none pt-[18px] text-gray-300 pl-4 bg-[#53585D] rounded-sm`}
                                type="text"
                                id="linkImagem"
                                name="linkImagem"
                                onChange={(e) => setLinkImagem(e.target.value)}
                                value={linkImagem}
                                onFocus={() => handleOnFocus(2)}
                                onBlur={() => handleOnBlur(2)}
                            />
                        </div>

                        <div className=" relative flex flex-col">
                            <label className="text-gray-200 text-sm absolute pl-4" htmlFor="categoriaVideo">Escolha uma categoria</label>
                            <input
                                required
                                ref={inputRefs[3]}
                                className={` outline-none pt-[18px] text-gray-300 pl-4 bg-[#53585D] rounded-sm`}
                                type="text"
                                id="categoriaVideo"
                                name="categoriaVideo"
                                onChange={(e) => setCategoriaVideo(e.target.value)}
                                value={categoriaVideo}
                                onFocus={() => handleOnFocus(3)}
                                onBlur={() => handleOnBlur(3)}
                            />
                        </div>
                        <div className=" relative flex flex-col">
                            <label className="text-gray-200 text-sm absolute pl-4" htmlFor="descricao">Descrição do filme</label>
                            <textarea
                                ref={inputRefs[4]}
                                className={` outline-none pt-[18px] text-gray-300 pl-4 bg-[#53585D] rounded-sm`}
                                name="descricao"
                                id="descricao"
                                cols="30"
                                rows="05"
                                onChange={(e) => setDescricaoVideo(e.target.value)}
                                value={descricaoVideo}
                                onFocus={() => handleOnFocus(4)}
                                onBlur={() => handleOnBlur(4)}
                                required
                            ></textarea>
                        </div>

                        <div className=" relative flex flex-col">
                            <label className="text-gray-200 text-sm absolute pl-4" htmlFor="secureCode">Código segurança <span className="text-[12px] hidden md:inline">{'(Gerado automaticamente)'}</span></label>
                            <input
                                required
                                className={` outline-none pt-[18px] text-gray-300 pl-4 bg-[#53585D] rounded-sm`}
                                type="text"
                                id="secureCode"
                                name="secureCode"
                                readOnly
                                onChange={(e) => setSecureCode(e.target.value)}
                                value={secureCode}

                            />
                        </div>
                        <div className="flex gap-4 mt-2">
                            <button type="submit" className=" bg-[#2A7AE4] text-white font-semibold py-3 rounded-sm px-6"> Salvar </button>
                            <button onClick={resetForm} className=" bg-gray-300 font-semibold rounded-sm px-6">Limpar</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}


export default AddFilme;