import React from "react";
import Utama from "./components/utama";
import { Link } from "react-router-dom";
import Footer from "./components/footer";

class App extends React.Component{
  render(){
    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <div class="container-fluid mx-5">
            <a Link to="/" class="navbar-brand text-light">
              <h3>UrBook</h3>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item mx-2">
                  <Link to="/" class="nav-link active text-light">Beranda</Link>
                </li>
                <li class="nav-item mx-2">
                  <Link to="/tentangsaya" class="nav-link active text-light">Tentang Saya</Link>
                </li>
                <li class="nav-item mx-2">
                  <Link to="/karya" class="nav-link active text-light">Karya</Link>
                </li>
                <li class="nav-item mx-2">
                  <Link to="/kontak" class="nav-link active text-light">Kontak</Link>
                </li>
                <li class="nav-item mx-2">
                  <Link to="/gallery" class="nav-link active text-light">Gallery</Link>
                </li>
                <li class="nav-item mx-2">
                  <Link to="/pegawai" class="nav-link active text-light">Daftar Pegawai</Link>
                </li>
              </ul>
              {/* <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-primary" type="submit">Search</button>
              </form> */}
            </div>
          </div>
        </nav>
      <div>
        <span class="mt-5"><Utama /></span>
      </div>
      <footer>
        <div><Footer /></div>
      </footer>
    </div>
    )
  }
}

export default App;
