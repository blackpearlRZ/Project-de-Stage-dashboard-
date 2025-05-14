import { useSelector } from 'react-redux'
import colis from '../../assets/colis.png'
import envoi from '../../assets/envois.png'
import envoiArchive from '../../assets/total.png'
import './showResults.css'
import api from '../axios'
import { useState , useEffect} from 'react'

export default function ShowResults() {
    // const Coliss = useSelector(state => state.userData)
    // const totalAmount = Coliss.reduce((sum, item) => {
    //     return sum + (item.amountCrbt || 0);
    // }, 0);
    const [ColisInfo,setColisInfo] = useState([])
    const fetchUserData = async() =>{
        try{
          const response = await api.post("/API_PART", {
            dateTag : 'DATE_TAG',
            ip : 'IP_ADDRESS'
          })
          //console.log("reponse :",response)
          const flattenedArray = [];
          for (const key in response) {
            if (Array.isArray(response[key])) {
              flattenedArray.push(...response[key]);
            }
          }
          setColisInfo(flattenedArray)
        
        }catch(err){
          console.error('API request failed :',err)
        }
      }
    
      useEffect(()=> {
        fetchUserData()
      },[])
      const totalAmount = ColisInfo.reduce((sum, item) => {
        return sum + (item.amountCrbt || 0);
    }, 0);
  return (
    <div className='container'>
        <div className="items">
            <div>
                <h4>Nb. Colis affiche</h4>
                <h3>{ColisInfo.length}</h3>
            </div>
            <img src={colis} alt="" />
        </div>
        <div className="items">
        <div>
                <h4>Total envois de la periode</h4>
                <h3>{ColisInfo.length}</h3>
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
