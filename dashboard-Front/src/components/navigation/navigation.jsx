import { Link } from "react-router-dom"
import './navigation.css'
export default function Navigation() {
  return (
    <div>
        <ul className="navigation_link">
            <li><Link to='/MesStatistique' onClick={() => setOpen(false)}>Mes Statistiques</Link></li>
            <li><Link to='/Envoi' onClick={() => setOpen(false)}>Mes envois</Link></li>
            <li><Link to='/EnvoiArchive' onClick={() => setOpen(false)}>Mes envois archives</Link></li>
            <li><Link to='/DemandeModification' onClick={() => setOpen(false)}>Mes demandes de modification</Link></li>
        </ul>
    </div>
  )
}
