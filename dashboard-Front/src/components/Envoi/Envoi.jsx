import { useState } from "react";
import FiltersForm from "../formulaires/filtersForm";
import './Envoi.css';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import api from "../axios";
import filterData from "../Statique/filterData";

export const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export default function Envoi() {
  const [ColisInfo, setColisInfo] = useState([])
  const filters = useSelector(state => state.filters)
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalPages = Math.ceil(ColisInfo.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = ColisInfo.slice(startIndex, endIndex);
  
  const fetchUserData = async() =>{
    try {
      const query = {
        dateTag: '1970-01-01 00:00:00',
        ip: '192.168.8.119',
        
      };
  
      const response = await api.post("/command", query);
      const filterDataArray = filterData(response.data, filters)
      if(ColisInfo.length == 0){
        setColisInfo(response.data)
      }else if(filterDataArray.length !== 0){
        setColisInfo(filterDataArray)
      }
      
    }catch(err){
      console.error('API request failed :',err)
    }
  }
  console.log(ColisInfo)
  
  useEffect(()=> {
    fetchUserData()
  },[filters])

  function goToPage(page) {
    setCurrentPage(page);
  }
  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5;

    buttons.push(
      <button
        key={1}
        onClick={() => goToPage(1)}
        disabled={currentPage === 1}
      >
        1
      </button>
    );

    if (currentPage > maxVisibleButtons - 1) {
      buttons.push(<span key="start-ellipsis">...</span>);
    }

    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    if (currentPage <= maxVisibleButtons - 1) {
      end = maxVisibleButtons;
    } else if (currentPage >= totalPages - (maxVisibleButtons - 2)) {
      start = totalPages - (maxVisibleButtons - 1);
    }

    for (let i = start; i <= end; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          disabled={currentPage === i}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages - (maxVisibleButtons - 2)) {
      buttons.push(<span key="end-ellipsis">...</span>);
    }

    if (totalPages > 1) {
      buttons.push(
        <button
          key={totalPages}
          onClick={() => goToPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          {totalPages}
        </button>
      );
    }
        return buttons;
      };
      const totalAmount = ColisInfo.reduce((sum, item) => {
        return sum + (item.amountCrbt || 0);
    }, 0);

  return (
    <div className="Envoi_container">
      <h3>Mes Envois</h3>
      <FiltersForm />
      <h3>{ColisInfo.length} Colis / {totalAmount} MAD</h3>
      <table border={1}>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Code envoi</th>
            <th>Date depot</th>
            <th>Destination</th>
            <th>Status</th>
            <th>Date status</th>
            <th>CRBT</th>
            <th>Destinataire</th>
            <th>Tel destinatire</th>
            <th>Adresse</th>
            <th>Date paiement</th>
            <th>Tel livreur</th>
            <th>paye</th>
            <th>Poids</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Use currentItems instead of ColisInfo! */}
          {currentItems.map((colis, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td>{colis.codeBordereau}</td>
              <td>{formatDate(colis.dateDepot)}</td>
              <td>{colis.libville}</td>
              <td>{colis.libelle}</td>
              <td>{formatDate(colis.dateLastStatus)}</td>
              <td>{colis.amountCrbt} MAD</td>
              <td>{colis.destNom}</td>
              <td>{colis.telDest}</td>
              <td>{colis.destAdress1}</td>
              <td>{formatDate(colis.datePaiement)}</td>
              <td>{colis.telLivreur}</td>
              <td>{colis.datePaiement == null ? <><input type="checkbox" checked={false}/></> :<><input type="checkbox" checked={true}/></>}</td>
              <td>{colis.poidsReel}Kg</td>
              <td>action</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button 
          onClick={() => goToPage(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        {renderPaginationButtons()}
        <button 
          onClick={() => goToPage(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}