export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      const newStateAfterDelete = {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id != action.payload
        ),
      };
      updateLocalStorage(newStateAfterDelete.transactions);
      return newStateAfterDelete;

    case "ADD_TRANSACTION":
      const newStateAfterAdd = {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
      updateLocalStorage(newStateAfterAdd.transactions);
      return newStateAfterAdd;
    default:
      return state;
  }
};

function updateLocalStorage(transactions) {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}
