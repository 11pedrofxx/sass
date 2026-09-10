import './App.scss'
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
    
    <h1>São Paulo</h1>
    <img src="/assets/images/saopaulo.jfif" alt=""></img>
    <i class="fa-solid fa-s"></i>
    <Link to="/contato">Contato</Link>
    <Link to="/formulario">Formulário</Link></div>
  );
}
