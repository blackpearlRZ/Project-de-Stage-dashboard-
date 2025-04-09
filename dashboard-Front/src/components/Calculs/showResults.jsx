import colis from '../../assets/colis.png'
import envoi from '../../assets/envois.png'
import envoiArchive from '../../assets/total.png'
import './showResults.css'
export default function ShowResults() {
  return (
    <div className='container'>
        <div className="items">
            <div>
                <h4>Nb. Colis affiche</h4>
                <h3>0</h3>
            </div>
            <img src={colis} alt="" />
        </div>
        <div className="items">
        <div>
                <h4>Total envois de la periode</h4>
                <h3>0</h3>
            </div>
            <img src={envoi} alt="" />
        </div>
        <div className="items">
        <div>
                <h4>Total CRBT</h4>
                <h3>0,0 MAD</h3>
            </div>
            <img src={envoiArchive} alt="" />
        </div>
    </div>
  )
}
