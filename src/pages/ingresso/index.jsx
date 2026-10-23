import './index.scss'
import Cabecalho from '../../componentes/cabecalho'
import { useState } from 'react';

export default function Ingressos () {
    
    const [Ingressos, setIngressos] = useState('')
    const [Meia, setMeia] = useState(false)
    const [Cupom, setCupom] = useState('')
    const [ValorTot, setValorTot] = useState('')

    let valor_ingresso = 50;

    function calcular () {
        
        let valor = Ingressos * valor_ingresso
        if (Meia === true) {
            valor = valor / 2
        }

        if (Cupom === 'QUERO50') {

            valor = valor * 0.05

        }

        else if(Cupom === 'QUERO20') {

            valor = valor * 0.20

        }

        setValorTot(valor)
    }

    return(

        <div className='pagina-ingresso'>
            
            <Cabecalho nome='Calcular Ingresso'/>

            &nbsp;

            <section>

                <label htmlFor=""> Quantidade </label>
                <input type="text" value={Ingressos} onChange={e => setIngressos(e.target.value)} />

                <label htmlFor=""> Meia entrada</label>
                <input type="checkbox" value={Meia} onChange={e => setMeia(e.target.checked)}/>

                <label htmlFor="">CUPOM</label>
                <input type="text" value={Cupom} onChange={e => setCupom(e.target.value)}/>

                <button onClick={calcular}>Calcular</button>

                <div>
                    <h1> {ValorTot} </h1>
                </div>

            </section>

        </div>

    );

}