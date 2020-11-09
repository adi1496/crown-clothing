export const addItemToCart = (cartItems, newCartItem) => {
  const existingCartItems = cartItems.find(item => item.id === newCartItem.id);
  if(existingCartItems) {
    return cartItems.map(item => {
      if(item.id === newCartItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      }else {
        return item;
      }
    })
  }

  return [...cartItems, {...newCartItem, quantity: 1}];
}