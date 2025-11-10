import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from './CartContext'

function MenuStore(props) {
  const { addToCart } = useContext(CartContext)
  const navigate = useNavigate()

  const handleAdd = () => {
    addToCart({ id: props.id || props.name, name: props.name, img: props.img, price: props.price })
  }

  const handleBuyNow = () => {
    addToCart({ id: props.id || props.name, name: props.name, img: props.img, price: props.price })
    navigate('/cart')
  }

  return (
    <div className="contact-card">
      <img src={props.img} alt={props.alt} />
      <label>{props.name}</label>
      <label>Cost: ${props.price}</label>
      <div style={{ marginTop: 8 }}>
        <button id="buy" onClick={handleBuyNow}>Buy Now</button>
        <button id="cart" onClick={handleAdd} style={{ marginLeft: 8 }}>Add to cart</button>
      </div>
    </div>
  )
}

export default MenuStore