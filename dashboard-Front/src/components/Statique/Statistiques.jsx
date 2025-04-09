import FiltersForm from "../formulaires/filtersForm"
import './statistiques.css'

export default function Statistiques() {
  return (
    <div className="statistiques_container">
      <h3>Mes Statistiques</h3>
      <FiltersForm/>
      <h3>4 103 Colis /
      5 368 885,01 MAD</h3>
      <div className="charts_container">
        <div className="charts_items">
          <h3>Detail des status</h3>
        </div>
        <div className="charts_items">
          <h3>Statut des Paiements</h3>
        </div>
        <div className="charts_items">
          <h3>Statut des envois</h3>
        </div>
        <div className="charts_items">
          <h3>Line chart</h3>
        </div>
        <div className="charts_items">
          <h3>Map chart</h3>
        </div>
      </div>
    </div>
  )
}
