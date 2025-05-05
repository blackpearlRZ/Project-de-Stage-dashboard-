export default function filterData(ColisData, filters) {
  if (!Array.isArray(ColisData)) return [];

  return ColisData.filter(colis => {
    if (filters.codeEnvoi && !colis.codeBordereau?.toLowerCase().includes(filters.codeEnvoi.toLowerCase())) {
      return false;
    }

    if (filters.tele && !colis.telDest?.toLowerCase().includes(filters.tele.toLowerCase())) {
      return false;
    }

    if (filters.dateDepotD && colis.dateDepot < filters.dateDepotD) {
      return false;
    }
    if (filters.dateDepotA && colis.dateDepot > filters.dateDepotA) {
      return false;
    }

    if (filters.statusVal !== 'Tout statut' && colis.libelle?.toUpperCase() !== filters.statusVal.toUpperCase()) {
      return false;
    }

    if (filters.distination !== 'all' && colis.libville?.toUpperCase() !== filters.distination.toUpperCase()) {
      return false;
    }

    if (filters.dateStatusD && colis.dateLastStatus < filters.dateStatusD) {
      return false;
    }
    if (filters.dateStatusA && colis.dateLastStatus > filters.dateStatusA) {
      return false;
    }

    if (filters.paiement !== 'all') {
      const isPaid =(colis.paye == null); 
      if ((filters.paiement === 'vir CRBT effectue' && !isPaid) || 
          (filters.paiement === 'vir CRBT non effectue' && isPaid)) {
        return false;
      }
    }

    if (filters.Vir !== 'CRBT') {
      const hasCRBT = (colis.amountCrbt !== null); 
      if ((filters.Vir === 'A-CRBT' && !hasCRBT) || 
          (filters.Vir === 'S-CRBT' && hasCRBT)) {
        return false;
      }
    }

    
    if (filters.datepaiementD && colis.datePaiement < filters.datepaiementD) {
      return false;
    }
    if (filters.datepaiementA && colis.datePaiement > filters.datepaiementA) {
      return false;
    }

    return true;
  });
}