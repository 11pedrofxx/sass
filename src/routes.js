import './pages/app/App.scss'
import Contato from './pages/contato/index.jsx';
import App from './pages/app/App.jsx';
import NotFound from './pages/NotFound/index.jsx';
import Formulario from './pages/formulario/index.jsx';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Contador from './pages/contador/index.jsx';

export default function Routess() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/contato" element={<Contato />} />
                <Route path='/formulario' element={<Formulario />} />
                <Route path='/contador' element={<Contador/>} />
 
                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    )
}