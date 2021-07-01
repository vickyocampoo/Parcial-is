import logo from './logo.jpeg';
import logoig from './logoig.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <img src={logo} alt=" " />
        <p>
         Hola, somos Rotoria Indumentaria. En nuestro perfil 
         podes encontrar ropa deportiva de hombre y de mujer.
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/rotoria_indumentaria/"
          target="_blank"
          rel="noopener noreferrer"
        > 
         parcial 3 is
         <img src={logoig} className="App-link img" alt=" " /> 
        </a>
      </header>
    </div>
  );
}

export default App;
