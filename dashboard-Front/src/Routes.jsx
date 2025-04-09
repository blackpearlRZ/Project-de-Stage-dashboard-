import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import Statistiques from "./components/Statique/Statistiques";
import Envoi from "./components/Envoi/Envoi";
import EnvoiArchive from "./components/EnvoiArchive/EnvoiArchive";
import DemandeModification from "./components/DemandeModification/DemandeModification";
import { Navigate } from "react-router-dom";
export default function Routers() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to='/MesStatistique'/>} />
        <Route path="/MesStatistique" element={<Statistiques />} />
        <Route path="/Envoi" element={<Envoi />} />
        <Route path="/EnvoiArchive" element={<EnvoiArchive />} />
        <Route path="/DemandeModification" element={<DemandeModification />} />
      </Routes>
  )
}
