import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FilmeProvider } from '../hooks/useFilme.jsx';

import App from '../App.jsx'
import Home from '../components/page/Home.jsx';
import FilmeDetalhes from '../components/page/FilmeDetalhes.jsx';
import AddFilme from '../components/page/AddFilme.jsx';
import MeusFilmes from '../components/page/MeusFilmes.jsx';
import MeuFilmeDetalhe from '../components/page/MeuFilmeDetalhe.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <FilmeProvider>
      <Routes>

        <Route path='/' element={<App />}>

          <Route path='/' element={<Home />} />
          <Route path='/filme/:id' element={<FilmeDetalhes />} />
          <Route path='/novo-filme' element={<AddFilme />} />
          <Route path='/meus-filmes' element={<MeusFilmes />} />
          <Route path='/meus-filmes/:id' element={<MeuFilmeDetalhe />} />

        </Route>
      </Routes>
    </FilmeProvider>
  </BrowserRouter>
)
