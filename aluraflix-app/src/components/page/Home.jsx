import Banner from "../utils/Banner";
import { useContext, useEffect, useState } from "react";
import useFilme from "../../hooks/useFilme";
import Filmes from "../utils/Filmes";


function Home() {
    const filmes = useContext(useFilme)
    const [topThree, setTopFive] = useState([]);


    useEffect(() => {
        // Função para selecionar aleatoriamente 3 filmes do array
        const selectRandomFilmes = () => {
            if (filmes.length < 3) {
                // Se houver menos de 3 filmes disponíveis, não faça nada
                return;
            }
            const selectedFilmes = [];
            const usedIndices = [];

            while (selectedFilmes.length < 3) {
                const randomIndex = Math.floor(Math.random() * filmes.length);

                if (!usedIndices.includes(randomIndex)) {
                    selectedFilmes.push(filmes[randomIndex]);
                    usedIndices.push(randomIndex);
                }
            }
            setTopFive(selectedFilmes);
        };
        selectRandomFilmes();
    }, [filmes]);


    return (

        <>
            <Banner topThree={topThree} />
            <section>
                <Filmes />
            </section>
        </>
    )
}


export default Home;