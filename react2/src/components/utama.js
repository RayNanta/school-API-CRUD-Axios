import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Beranda from "./beranda";
import TentangSaya from "./tentangsaya";
import Karya from "./karya";
import Kontak from "./kontak";
import Pegawai from './Pegawai';
import Gallery from "../pages/Gallery";

const Utama = () => {
  return(
    <Routes>
        <Route path="/" exact element={<Beranda/>} />
        <Route path="/tentangsaya" exact element={<TentangSaya/>} />
        <Route path="/karya" exact element={<Karya/>} />
        <Route path="/kontak" exact element={<Kontak/>} />
        <Route path="/gallery" exact element={<Gallery/>} />
        <Route path="/pegawai" exact element={<Pegawai/>} />
    </Routes>
  )
}

export default Utama;
