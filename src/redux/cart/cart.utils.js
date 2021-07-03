 export const existingCartIem = ({ 
    prevCartItem,
    nextCartItem,
 }) => {
    return prevCartItem.find(
        cartItem => cartItem.documentId === nextCartItem.documentId
    )
 }
 
 
 export const handleAddToCart = ({ 
     prevCartItem,
     nextCartItem
 }) => {
     const quantityIncrement = 1
     const cartItemExists = existingCartIem({ prevCartItem, nextCartItem })

     if(cartItemExists){
         return prevCartItem.map(cartItem => 
            cartItem.documentId === nextCartItem.documentId
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantityIncrement
            } : cartItem
        )
     }
    
    return [
        ...prevCartItem,
        {
            ...nextCartItem,
            quantity: quantityIncrement
        }
    ]
 }

 export const handleRemoveCartItem = ({
    prevCartItems,
    cartItemToRemove
  }) => {
    return prevCartItems.filter(item => item.documentId !== cartItemToRemove.documentId);
  }
  
  export const handleReduceCartItem = ({
    prevCartItems,
    cartItemToReduce
  }) => {
    const existingCartItem = prevCartItems.find(cartItem =>
      cartItem.documentId === cartItemToReduce.documentId);
  
    if (existingCartItem.quantity === 1) {
      return prevCartItems.filter(
        cartItem => cartItem.documentId !== existingCartItem.documentId
      );
    }
  
    return prevCartItems.map(cartItem =>
      cartItem.documentId === existingCartItem.documentId ?
      {
        ...cartItem,
        quantity: cartItem.quantity - 1
      } : cartItem)
  }