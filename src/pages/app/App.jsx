import './App.scss'
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
    
   
    <section className="section">

      <h1>Seja bem vindo ao APP</h1>

      <Link to='/contato'> <button>Ir para contato</button></Link>
      <Link to="/formulario"> <button>Ir para formulário</button> </Link>

    </section>
    
    
    
    </div>
  );
}
