import axios from 'axios';
import { createContext, useState, useEffect } from 'react';




const useFilme = createContext();

// Crie um provedor para o contexto
export const FilmeProvider = ({ children }) => {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWUyYWQ0NjBmN2RlOTczMDBlYmRiMjNlMTc1M2Y5NiIsInN1YiI6IjY0ZjIxMTZkY2FhNTA4MDE0YzhjM2VlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UU5E8vhtAKkA4M_MnwtHIvbm8h6VVJWPF9inVUvwaWw'
            }
        };
        const fetchFilmes = async () => {
            await axios.get('https://api.themoviedb.org/3/movie/popular', options)
                .then(response => setFilmes(response.data.results))
                .catch(err => console.error(err));
        }
        fetchFilmes();
    }, [])



    return (
        <useFilme.Provider value={filmes}>
            {children}
        </useFilme.Provider>
    );
};

export default useFilme;