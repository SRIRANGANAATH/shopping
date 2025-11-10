import React, { useContext } from 'react'
import { CartContext } from './CartContext'

function Buynow() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext)

  if (!cart || cart.length === 0) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Your cart is empty</h2>
      </div>
    )
  }

  const total = cart.reduce((s, it) => s + (it.price || 0) * (it.qty || 1), 0)

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Cart</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cart.map((it) => (
          <li key={it.id} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
            <img src={it.img} alt={it.name} style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 6 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700 }}>{it.name}</div>
              <div>Price: ${it.price} × {it.qty}</div>
            </div>
            <div>
              <button onClick={() => removeFromCart(it.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 12, fontWeight: 700 }}>Total: ${total}</div>
      <div style={{ marginTop: 8 }}>
        <button onClick={clearCart}>Clear cart</button>
      </div>
    </div>
  )
}

export default Buynow