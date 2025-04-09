import amana from '../../assets/amana.png'
import './Authentification.css'
export default function Authentification({courriel , setCourriel,password,setPassword,handleLoging}) {
  return (
    <div className='authentification_container'>
        <img src={amana} alt="" />
        <div className='authentification_item'>
            <h4>Bienvenue sue le portail des clients Amana</h4>
            <p>Connexion</p>
            <form className='authentif_form'>
                <div className='authentif_form_items'>
                    <label htmlFor="courriel">Courriel</label>
                    <input type="email" id='courriel' value={courriel} onChange={() => setCourriel(e.target.value)}/>
                </div>
                <div className='authentif_form_items' > 
                    <label htmlFor="pwd">Mot de passe</label>
                    <input type="password"  value={password} onChange={() => setPassword(e.target.value)}/>
                </div>
                <div className='A_links_container'>
                    <div className='A_links'>
                        <input type="checkbox"/>
                        <p>Se souvenir de moi</p>
                    </div>
                    <a href="#">Mot de passe oublie?</a>
                </div>
                <button onClick={(e) => handleLoging(e)}>Connexion</button>
            </form>
        </div>
    </div>
  )
}
