import React from 'react'
import { StyledDiv } from './Checkout.stc'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from './../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import Button from './../forms/Button'
import Item from './Item'




const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default function Checkout({ }){
  const history = useHistory()
  const { cartItems, total } = useSelector(mapState)

  const error = 'You have no items in your cart.'

  return (
    <StyledDiv>
      <h1>
        Checkout
      </h1>

      <div className="cart">
        {cartItems.length > 0 ? (
          <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <table className="checkoutHeader" border="0" cellPadding="10" cellSpacing="0">
                <tbody>
                  <tr>
                    <th>
                      Product
                    </th>
                    <th>
                      Description
                    </th>
                    <th>
                      Quantity
                    </th>
                    <th>
                      Price
                    </th>
                    <th>
                      Remove
                    </th>
                  </tr>
                </tbody>
              </table>
            </tr>
            <tr>
              <table border="0" cellSpacing="0" cellPadding="0">
                <tbody>
                  {cartItems.map((item, pos) => {
                    return (
                      <tr key={pos}>
                        <td>
                          <Item {...item} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </tr>
            <tr>
              <table algin="right" border="0" cellSpacing="0" cellPadding="10">
                <tr algin="right">
                  <td>
                    <h3>
                      Total: ${total}
                    </h3>
                  </td>
                </tr>
                <tr>
                  <table border="0" cellPadding="10" cellSpacing="0">
                    <tbody>
                      <tr>
                        <td>
                          <Button onClick={() => history.goBack()}>
                            Continue Shopping
                          </Button>
                        </td>
                        <td>
                          <Button>
                            Checkout
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </tr>
              </table>
            </tr>
          </tbody>
        </table>
        ) : (
          <p>
            {error}
          </p>
        )}
      </div>
      </StyledDiv>
  )
}