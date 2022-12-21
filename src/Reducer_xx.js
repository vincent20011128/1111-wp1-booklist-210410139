const Reducer_xx = (state, action) => {
    if(action.type === 'SHOW_ALERT') {
        return {...state,alert: action.payload}
    }
    if (action.type === "REMOVE_ITEM") {
        const filteredCart = state.cart.filter( (item) => item.id !== action.payload);
        return { ...state, cart: filteredCart };
      }
}

export default Reducer_xx;
