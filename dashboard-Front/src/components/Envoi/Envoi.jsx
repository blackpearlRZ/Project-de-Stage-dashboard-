import FiltersForm from "../formulaires/filtersForm"
import './Envoi.css'

export default function Envoi() {
  return (
    <div className="Envoi_container">
      <h3>Mes Envois</h3>
      <FiltersForm/>
      <h3>4 103 Colis /
      5 368 885,01 MAD</h3>
      <table border={1}>
        <thead>
          <th><input type="checkbox"/></th>
          <th>Code envoi</th>
          <th>Date depot</th>
          <th>Destination</th>
          <th>Status</th>
          <th>Date status</th>
          <th>CRBT</th>
          <th>Destinataire</th>
          <th>Tel destinatire</th>
          <th>Adresse</th>
        </thead>
      </table>
    </div>
  )
}
