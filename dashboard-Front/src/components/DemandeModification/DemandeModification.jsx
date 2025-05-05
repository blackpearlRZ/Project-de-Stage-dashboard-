import FiltersForm from "../formulaires/filtersForm"
import { useState } from "react";

export default function DemandeModification() {
  const [ColisInfo, setColisInfo] = useState([])
     const [itemsPerPage, setItemsPerPage] = useState(10);
      const totalPages = Math.ceil(ColisInfo.length / itemsPerPage);
      const [currentPage, setCurrentPage] = useState(1);
    
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const currentItems = ColisInfo.slice(startIndex, endIndex);
  
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
  return (
    <div>
      <div className="EnvoiArchive_container">
            <h3>Mes envois archives</h3>
            <FiltersForm/>
            <table>
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
    </div>
  )
}
