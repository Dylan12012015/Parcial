import { Clientes } from './componentes/Clientes'
import equipo from './assets/Equipo-de-entrenadores-del-entrenador-personal-Oriol-22.webp'
import two from './assets/Two_people_in_a_gym_using_BOSU_balls.jpg'
import logo from './assets/429d631659a11a9eb666b103d811470a.jpg'
import clienteFoto from './assets/depositphotos_61589307-stock-photo-fitness-instructor-assisting-young-woman.jpg'
import images from './assets/images.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        
        <div class="container">
            <div class="row">
                <nav class="navbar">
                    <h1>
                      <img src={logo} width='120px'></img>
                    </h1>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                          <a class="navbar-brand" href="#">Inicio</a>
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                              <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Nosotros</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#">Planes</a>
                              </li>
                              <li class="nav-item dropdown">
                                <a class="nav-link" href="#">Metodologia</a>
                                <ul class="dropdown-menu">
                                  <li><a class="dropdown-item" href="#">Action</a></li>
                                  <li><a class="dropdown-item" href="#">Another action</a></li>
                                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#">Equipamiento</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#">Staff</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#">Contacto</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </nav>
                </nav>
            </div>
        </div>
        <div class="row">
            <div class="raya"></div>
        </div>
    </header>
    <main>
        <div class="row text-center" id="slogan"></div>
        <div class="row text-black" id="nuestrosCursos">
            <div class="container">
                <div class="row text-center" id="recomendacion">
                    <h2>Nuestros clientes son los mas importntes para nosotros, ellos te contaran como es nuestro servicio.</h2>
                </div>
                <div class="row text-center" id='cliente'>
                    <div class="col" id="nadadora">
                        <img src={clienteFoto} id="forma" alt=""></img>
                        <Clientes id="textito" nombre="juan" texto="Zombie ipsum reversus ab viral inferno, nam rick grimes malum Zombie ipsum reversus ab viral inferno, nam rick grimes malum"></Clientes>
                    </div>
                    <div class="col" id="nadadora">
                        <img src={clienteFoto} id="forma" alt=""></img>
                        <Clientes id="textito" nombre="sofia" texto="Zombie ipsum reversus ab viral inferno, nam rick grimes malum Zombie ipsum reversus ab viral inferno, nam rick grimes malum"></Clientes>
                    </div>
                    <div class="col" id="nadadora">
                        <img src={clienteFoto} id="forma" alt=""></img>
                        <Clientes id="textito" nombre="pedro" texto="Zombie ipsum reversus ab viral inferno, nam rick grimes malum Zombie ipsum reversus ab viral inferno, nam rick grimes malum"></Clientes>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" id="nosotros">
            <div class="container">
                <div class="row py-5">
                    <div class="col-6">
                        <img src={equipo} width="500px" margin-left="300px" alt=""></img>
                    </div>
                    <div class="col-6" padding-right= '300px'>
                        <img src={two} margin-left="300px" width="700px" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <div class="row" id="contactanos">
            <div class="container">
                <div class="row py-5">
                    <div class="col-6 text-white" id="alec">
                        <p>Direccion: el viva  ||  Telefono: 7678934521  ||  Email: gymviva@gmail.com</p>
                        <p id='abajo'>Zombie ipsum reversus ab viral inferno, nam rick grimes malum</p>
                    </div>
                    <div class="col-6 text-center">
                        <img src={images} id='face' alt=""></img>
                        <img src={images} id='face' alt=""></img>
                        <img src={images} id='face' alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
