export function getTotals() {
  return {
    type: 'GET_TOTALS',
    server: true
  };
}

export function setTotals(totals) {
  return {
    type: 'SET_TOTALS',
    totals
  };
}
