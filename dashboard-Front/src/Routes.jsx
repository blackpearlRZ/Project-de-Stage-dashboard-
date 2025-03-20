import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import Layout from "./components/Layout/layout";
import Statistiques from "./components/Statique/Statistiques";
import Envoi from "./components/Envoi/Envoi";
import EnvoiArchive from "./components/EnvoiArchive/EnvoiArchive";
import DemandeModification from "./components/DemandeModification/DemandeModification";
export default function Routers() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/MesStatistique" element={<Statistiques />} />
        <Route path="/Envoi" element={<Envoi />} />
        <Route path="/EnvoiArchive" element={<EnvoiArchive />} />
        <Route path="/DemandeModification" element={<DemandeModification />} />
    </Routes>
    </BrowserRouter>
  )
}
