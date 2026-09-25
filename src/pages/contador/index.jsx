import { useState } from "react";
import './index.scss';

export default function Contador() {

    const[contador, setcontador] = useState(0);

    function mais() {

        if (contador < 100) {

            setcontador(contador + 1)

        }

    }

    function menos() {

     if (contador > 0) {
        setcontador(contador - 1)
        }

    }
    

    function reset() {

        setcontador(0)

    }


    return(


        <div>
            
            <section className='secao'>
            
            <h1>CONTADOR</h1>
            <div className='Container' >
                <button onClick={mais} > + </button>
                
                  {contador}

                <button onClick={menos} > - </button>

            </div>

            <br />

            <button onClick={reset}>reset</button>
            

        </section>
            

        </div>

    )

}

