import { useState } from "react";
import './index.scss';

export default function VarEstado() {
    const [contador, setContador] = useState(0);
    const [descricao1, setDescricao1] = useState('Titulo');
    const [cor, setCor] = useState("");

    const [tituloButao, settituloButao] = useState('Titulo');
    const [inputValor, setinputValor] = useState("");

    function digitarinput(e) {

        setinputValor(e.target.value);

    }

    function mudarTitulo(e) {

        let novovalor = e.target.value;
        setDescricao1(novovalor);

    }

    function tituloclick() {

       settituloButao(inputValor);

    }

    function mudarCor(e) {

        let novacor = e.target.value;
        setCor(novacor);

    }

    function mais() {

        if (contador < 100) {
            setContador(contador + 1);
        }

    }

    function menos() {

        if (contador > 0) {
            setContador(contador - 1);
        }

    }

    function reset() {

        setContador(0);

    }

    return (
        <div className="corpo" style={{ backgroundColor: cor }}> 
            
            <section className='secao'>
                    <h1>CONTADOR</h1>
                <div className='Container'>
                    <button onClick={mais}> + </button>
                    {contador}
                    <button onClick={menos}> - </button>
                </div>

                <br />

                <button onClick={reset}>reset</button>
                
            </section>

            <section className="secao">
                <h1> {descricao1} </h1>
                <input type="text" onChange={mudarTitulo} />
            </section>

            <section className="secao">
                <h1>A cor selecionada é {cor}</h1>

                <input type="color" onChange={mudarCor} />

            </section>

            <section className="secao">

                <h1>{tituloButao}</h1>

                <input type="text" onChange={digitarinput}/>
                <button onClick={tituloclick}>Mudar Titulo</button>


            </section>

        </div>
    );
}