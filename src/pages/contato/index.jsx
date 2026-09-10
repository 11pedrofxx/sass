import './index.scss'
import {Link } from 'react-router-dom'

export default function Contato() {

    return(

        <div className='Pagina-contato'>

        <section>
            <h1>Pagina de contato</h1>
            <h2>Entre em contato conosco:</h2>
            <h2>43214321441</h2>
            <Link to="/">Voltar</Link>
        </section>

        </div>

    )

}