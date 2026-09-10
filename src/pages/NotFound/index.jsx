import './index.scss';
import { Link } from 'react-router-dom';

export default function NotFound() {

    return(

        <div className="Pagina-notfound">


        
            <section>
                <h1>A pagina que vc está procurando não existe ou foi removida</h1>
                <Link to="/"><button>Voltar para a pagina inicial</button></Link>
            </section>

            <img src="/assets/images/notfound.jpg" alt="" />


        </div>

    )

}