import { useState } from 'react';
import './index.scss'

export default function Calculadora() {

    const [result, setresult] = useState(0);
    const [n1, setn1] = useState(0);
    const [n2, setn2] = useState(0);

    const [boolean, setboolean] = useState(false);

    function somar() {

        let soma = Number(n1) + Number(n2);
        setresult(soma);

    }

    function multiplicar() {

        let multiplicar = Number(n1) * Number(n2);
        setresult(multiplicar);

    }

    function dividir() {

        let dividir = Number(n1) / Number(n2);
        setresult(dividir);

    }

    function subtrair() {

        let subtrair = Number(n1) - Number(n2);
        setresult(subtrair);

    }

    function alterar(e) {

    let novovalor = e.target.checked;
    setboolean(novovalor);
    
    }

    return(

        <div className='pagina calculadora'>

        <section className='secao'>

        <h1>CALCULADORA</h1>
        <div className='inputs'>

        <input type="number" value={n1} onChange={(e) => setn1(e.target.value)} />
        <input type="number" value={n2} onChange={(e) => setn2(e.target.value)}/>

        </div>

        <div> = </div>

        <h2> {result} </h2>

        <button onClick={somar} > somar </button>
        <button onClick={subtrair} > subtrair </button>
        <button onClick={multiplicar} > multiplicar </button>
        <button onClick={dividir} > dividir </button>

        </section>

        <section className='secao'>

        <h1>Você gosta de programar? {boolean ? 'sim' : 'não'} </h1>
        <input type="checkbox" checked={boolean} onChange={alterar}/>

        </section>
        

        </div>


    );
    
}