import './index.scss';
import { Link } from 'react-router-dom';

export default function NotFound() {

    return(

        <div className="Pagina-notfound">
            <h1>Pagina não encontrada</h1>
            <Link to="/">Voltar</Link>
        </div>

    )

}