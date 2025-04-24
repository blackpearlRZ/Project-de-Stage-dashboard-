export default function filterData(ColisData, filters) {
  if (!Array.isArray(ColisData)) return [];

  return ColisData.filter(colis => {
    // Filter by codeEnvoi (partial match)
    if (filters.codeEnvoi && !colis.codeBordereau?.toLowerCase().includes(filters.codeEnvoi.toLowerCase())) {
      return false;
    }

    // Filter by telephone (partial match)
    if (filters.tele && !colis.telDest?.toLowerCase().includes(filters.tele.toLowerCase())) {
      return false;
    }

    // Filter by date depot range
    if (filters.dateDepotD && colis.dateDepot < filters.dateDepotD) {
      return false;
    }
    if (filters.dateDepotA && colis.dateDepot > filters.dateDepotA) {
      return false;
    }

    // Filter by status (exact match, ignore if 'Tout statut')
    if (filters.statusVal !== 'Tout statut' && colis.libelle?.toUpperCase() !== filters.statusVal.toUpperCase()) {
      return false;
    }

    // Filter by destination (exact match, ignore if 'all')
    if (filters.distination !== 'all' && colis.libville?.toUpperCase() !== filters.distination.toUpperCase()) {
      return false;
    }

    // Filter by date status range
    if (filters.dateStatusD && colis.dateLastStatus < filters.dateStatusD) {
      return false;
    }
    if (filters.dateStatusA && colis.dateLastStatus > filters.dateStatusA) {
      return false;
    }

    // Filter by paiement status
    if (filters.paiement !== 'all') {
      const isPaid =(colis.paye == null); // Assuming this is a boolean
      if ((filters.paiement === 'vir CRBT effectue' && !isPaid) || 
          (filters.paiement === 'vir CRBT non effectue' && isPaid)) {
        return false;
      }
    }

    // Filter by CRBT type
    if (filters.Vir !== 'CRBT') {
      const hasCRBT = (colis.amountCrbt == null); // Assuming this is a boolean
      if ((filters.Vir === 'A-CRBT' && !hasCRBT) || 
          (filters.Vir === 'S-CRBT' && hasCRBT)) {
        return false;
      }
    }

    // Filter by payment date range
    if (filters.datepaiementD && colis.datePaiement < filters.datepaiementD) {
      return false;
    }
    if (filters.datepaiementA && colis.datePaiement > filters.datepaiementA) {
      return false;
    }

    // If all filters passed
    return true;
  });
}