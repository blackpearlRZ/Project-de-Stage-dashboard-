import { useSelector } from 'react-redux'
import colis from '../../assets/colis.png'
import envoi from '../../assets/envois.png'
import envoiArchive from '../../assets/total.png'
import './showResults.css'
export default function ShowResults() {
    const Coliss = useSelector(state => state.userData)
    const totalAmount = Coliss.reduce((sum, item) => {
        return sum + (item.amountCrbt || 0);
    }, 0);
    console.log(Coliss)
  return (
    <div className='container'>
        <div className="items">
            <div>
                <h4>Nb. Colis affiche</h4>
                <h3>{Coliss.length}</h3>
            </div>
            <img src={colis} alt="" />
        </div>
        <div className="items">
        <div>
                <h4>Total envois de la periode</h4>
                <h3>{Coliss.length}</h3>
            </div>
            <img src={envoi} alt="" />
        </div>
        <div className="items">
        <div>
                <h4>Total CRBT</h4>
                <h3>{totalAmount} MAD</h3>
            </div>
            <img src={envoiArchive} alt="" />
        </div>
    </div>
  )
}
