const refreshShowsHistories = showsHistories => {
  return {
    type: "refreshShowsHistories",
    showsHistories:  showsHistories
  }
}

export { 
  refreshShowsHistories,
}