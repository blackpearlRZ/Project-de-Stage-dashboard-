import {useState, useEffect, useRef} from 'react'
import './filtersForm.css'
import { useDispatch, useSelector } from 'react-redux';
export default function FiltersForm() {
    const status = ['Tout statut',"A récupèrer au guichet",'En transit','Envoi retourné','Echec livraison,à récupèrer','En cours de livraison','Envoi livré','Déposé','2ème présentation']
    const [cities, setCities] = useState([]);
    const dispatch = useDispatch()
    const filters = useSelector(state => state.filters)

    useEffect(() => {

        fetch("https://countriesnow.space/api/v0.1/countries/cities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country: "Morocco" }),
        })
        .then((res) => res.json())
        .then((data) => setCities(data.data || []))
        .catch((err) => console.error("Error fetching cities:", err));
    }, []);
    const formRef = useRef(null)
    function resetFilters(e) {
        e.preventDefault()
        dispatch({
            type : "RESET_FITERS"
        })
      }
      function handleChange (name,value){
        dispatch({
            type : "SET_FILTERS",
            payload : {
                [name] : value
            }
        })
      }
    return (
    <div>
        <form className='filter_form' ref={formRef}>
            <div>
                <div className="form">
                    <button><svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                    <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
                <input className="input" placeholder="Code envoi" required="" type="text" value={filters.codeEnvoi} onChange={(e) => handleChange('codeEnvoi' , e.target.value)}/>
                <button className="reset" type="reset">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                </div>
                <div className="form">
                    <button>
          <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
              <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
      </button>
      <input className="input" placeholder="Tel destinatair" required="" type="text" value={filters.tele} onChange={(e) => handleChange('tele' , e.target.value)}/>
      <button className="reset" type="reset">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
      </button>
                </div>
            </div>
            <div>
                <h4>Date dépôt</h4>
                <label >Du: <input className='filter_input' type="date"  value={filters.dateDepotD} onChange={(e) => handleChange('dateDepotD' , e.target.value)} /></label>
                <label >Au: <input className='filter_input' type="date" value={filters.dateDepotA} onChange={(e) => handleChange('dateDepotA' , e.target.value)}/></label>
            </div>
            <div>
                <select className='filter_input' value={filters.statusVal} onChange={(e) => handleChange('statusVal' , e.target.value)}>
                    {status.map((s , i) => (
                        <option key={i} value={s}>{s}</option>
                    ))}
                </select>
                <select className='filter_input' value={filters.distination} onChange={(e) => handleChange('distination' , e.target.value)}>
                    <option value="all">Tout distination</option>
                    {cities.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                    ))}
                </select>
            </div>
            <div>
                <h4>Date status</h4>
                <label >Du: <input className='filter_input' type="date" value={filters.dateStatusD} onChange={(e) => handleChange('dateStatusD' , e.target.value)}/></label>
                <label >Au: <input className='filter_input' type="date" value={filters.dateStatusA} onChange={(e) => handleChange('dateStatusA' , e.target.value)} /></label>
            </div>
            <div>
                <select className='filter_input' name="paiement" value={filters.paiement} onChange={(e) => handleChange('paiement' , e.target.value)}>
                    <option value="all">paiement</option>
                    <option value="effectue">vir CRBT effectue</option>
                    <option value="noneffectue">vir CRBT non effectue</option>
                </select>
                <select className='filter_input' value={filters.Vir} onChange={(e) => handleChange('Vir' , e.target.value)}>
                    <option value="CRBT">CRBT</option>
                    <option value="A-CRBT">avec CRBT</option>
                    <option value="S-CRBT">Sans CRBT</option>
                </select>
            </div>
            <div>
                <h4>Date paiement</h4>
                <label >Du: <input className='filter_input' type="date" value={filters.datepaiementD} onChange={(e) => handleChange('datePaiementD' , e.target.value)}/></label>
                <label >Au: <input className='filter_input' type="date"  value={filters.datepaiementA} onChange={(e) => handleChange('datePaiementA' , e.target.value)}/></label>
            </div>
            <div>
                <button className="btn btn-primary" onSubmit={() => resetFilters()}>
                <span className="btn-txt">Reset Filters</span>
                <img className='kbd' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAAx1JREFUWEfFlk+IlWUUxn+PZGKWkq7ChDQNtBFJ3GitMksQF+lCEgkXKsHEpJYuTFFsECRLxqkBEyQJXUSiiSj0x4WgrkSItEVB0h/JhQaWIkE+vSfeG3fuvPd+d2bCOfDxwfee7zzn33POK0ZQNILYDAvc9tOSLg81gCGB2x4HHAGuSnrjvoHbngl8DswA9t03cNsrgY+AiDzkF+Ac8BNwHjgl6a92M9F22m2/AHxZYfgW8DGwS9L1KifaBg9DtlcAB4GHsuFfgZ+BecADdWAR/ZuSPmjlwKDAswMdwDFgOtAjaX1uwJeAVcDLdYB7sxMuOTFo8OzAI8ChqHWA1xu2PTs142Eg3iF9kjr/N/CaIdsdkr5tNGx7DHAGWJDPOiX1NeoNKfKqRsrZeRwIxyYAN1Kmpkr6o/7fYYHblqRiPbMD29N7RwZ8TdL+YYPbXgvEMzc12Q9RY0nvFNL/aNILRowNmkp6cVjgtt9OtOoupD4ciG7vJ7ZPAkuAe8B4SbdrCoNKu+3g9+9piDzYpO4LJF1o6P53gbfyt7mSLg0V/Hng6xYNt0nSngbwNcCB/G2RpK+K4Jkid/Nhr6SuBkNBnZjlzeR1SR82/BP7IHgf0i8zA9Ju+8c0n5/ISyJq1VjDWCaTm6DPkvRdA/jm1HC787dJKaCbTdNuO9KyEPhe0lMF8GiqTwrg3ZK2FfRPA4tT3f+UFJPxPylFHuMyZnLIPEkXCwbnp4vE6rTXn8lU+1TS8YLeROA3YHQ4LOnVKvDw7hrwcOxoSc+2qHHLI9vvARuz0hxJ37QEj0Pb7wMbsuI2SSVeVwE/B5yFf++JZyRFKftJkee2pwBxMazVaEAXt0K2HSWJrq/t/YWSYtFUg+foo9NjOtWkB9hZ362FGj8G9ALL684GULZ21nLC2X4lD4jane0O8Fma6ScSZ7+ILZVnQ6R0HbA0OTiqDjhuMl3Nlk/leLX9ZNxY8nxut/eC61tKDKhsuBKC7aDVVmBZEw/+BmJGHJB0tB0vKyMv1DVKMCvxNjIyLXP4Ssz8Vv1QcmbQ4O1E1K7OiIL/A5PxBC9ib6v3AAAAAElFTkSuQmCC"/>                </button>
            </div>
        </form> 
    </div>
    )
}
