import React, { useState } from 'react'
import './header.css'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Header() {
     const [open,setOpen] = useState(false)
  return (
    <div className='header-bar'>
        <div className='menu'>
            <FaBars 
            size={25} 
            className="cursor-pointer text-blue-600" 
            onClick={() => setOpen(!open)} 
            />
            <div className={`sidebar ${open ? 'open' : ''}`}>
                <ul className="space-y-2">
                <li><Link to='/MesStatistiques' onClick={() => setOpen(false)}>Mes Statistiques</Link></li>
                <li><Link to='/Envoi' onClick={() => setOpen(false)}>Mes envois</Link></li>
                <li><Link to='/EnvoiArchive' onClick={() => setOpen(false)}>Mes envois archives</Link></li>
                <li><Link to='/DemandeModification' onClick={() => setOpen(false)}>Mes demandes de modification</Link></li>
                </ul>
            </div>
            <div  className='profil-info'>
                <h4>Bienvenue : User Demo</h4>
                <h4>Profile : USER DEMO</h4>
            </div>
        </div>
        <img className='amana-logo' src="./amana.png" alt="" />
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAAXNSR0IArs4c6QAABLBJREFUaEPtmWmoV0UYxn8ilZYkiGFKaplLSSB+SCq3RGzFNG2hCMVWi9JQQcTSD4mFVB8qyiUVcoEWxUy0Eipb0LIirDAXEBVFVKhEJEmzeWT+l+O558yZOXP+3svFFy5yvfMuz5l33nned1rRgqRVC8LCBTDNdTfrtTM3AoOAgUDHFPijwLfAd8DWKj9MlWDGAuOA4cBlnkEeBz4DlgEfe+rkLosF0xqYAMwGrooMZg8wC1hh7J0pYysGzEhgHnBdGccOnd+AiTYNg0yXAdPOpsXoIE/hi+cDzwMnfVVDwXQzh3oj0NvXQeS6n8wOjQD+9LETAuZa4KsKzoZPXMk124GhwJEiRV8wXW0O69+mkN9tqf/L5dwHzKXAz0CfpkCR8LnJZMatsWCW2PLbxFjOup8JzM0LpGhndPg+bw4obAyngBuAHVkxucC0tUox50QFY4ulLZcA/czHuQUYHPGBRINElRqJC8wLwEslnf4KPGh+VImypL/5wh8BPUraF3VandbNA9MeOGhueB3+UBEtUbB/Fyh2AQS6Q6gD+5H6+oJ5ElhQwolURgFrPXWfABZ6rk0vuwn4PvmfeTvzdcm83gtcHRicmLMvy06afsMwg8lFYJRizsvJEewik57a1RBZZwrE3SEKdu3O9N2XtTNiw75pko5hDvBiYGCvAlMDdWrLOwGHa79kgZnhupgKnL4JTAoM7G3g6UCd2nI1gl+4wMTc+N8Y40MCA/sBUJtdRtT3NBSqrJ35ALi/jGWrozZhv6d+L0C5X1bOSessMKuAMWWtA2qqfNPmfeCBCF+LgcddaabhwiMRDqT6KLC0wMZ04JVIP4pVQ5SzkrUz79gePNIPHwIqCDpHNdF9crOtXnfEOjBjrLeA51xgxMfEy6oU0RYRzarbbU1zGvhj1s48bMc9VYKpl637AJ3x3DTT6CiP7dYrqLJ2u5vzuc8FRn8TY+5c0sM/gFrcQ8AB0x3+m7JzkR2KXGnvpDYl/exKp20e0dRFFMqxRP1FTZYDxzwDvBwYD0wDdD+FyGtWr0EnD4w6QTFnX3nXMtgTvgqpdRosqoqGXAnXA38k7bg6TS30mcioJxGYKmQKoC9eJJtt+33OOheYxzyCfD2C8eYF7MMN7wXWpA0UTWd2m7myJpl5ootPTxJVyp3AeodBvekMyPp7ERgN3b50GD5tD7CeIaoQURPtjJ5KskT+NOHRhLORFIGRgk+/ocOr21ivYmXkCsMQXjZsW6ntEjV+YsqZ4gNG8zONZ4veYTSNEbVQWVdf7yNq0Z+x9KloEqQZ3DCXUR8w0termCqI7+vYJ+ZCWwn8aMqtzl1SxM+U8w8Bd/kgtiMpXRfO8ZUvGPnsaW92zbtC5RfTil8MNJp1eRjaZt9JC1M4BIz8aoyknvsajyCqWKKdva0ej0214JTn75lzdE8V0TpsaC4mmpPmdrkqoTuTNKTWWg+0rnuoDF7txrPpaaWPoRgwsi8G/JStRpphxYjok5rChv4k1FgsmKQ/VScx4NsDgtDkdINN208D9DKXVgkm6UBDbVU/ve2I2quk/2de4DSL1o8aKj0YqVJVJvUCU1mAIYYugAn5Wudz7f+G47E0p8zQogAAAABJRU5ErkJggg=="/>
    </div>
  )
}
