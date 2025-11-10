import React from 'react'
import MenuStore from './MenuStore'
import phoneImg from '../Images/phone.jpeg'
import speakerImg from '../Images/speaker.jpg'
import watchImg from '../Images/watch.jpeg'

const items = [
  { id: 'phone', img: phoneImg, name: 'Phone', alt: 'phone', price: 199 },
  { id: 'speaker', img: speakerImg, name: 'Speaker', alt: 'speaker', price: 129 },
  { id: 'watch', img: watchImg, name: 'Watch', alt: 'watch', price: 249 },
]

function Menu() {
  return (
    <div>
      <h1>Online Shopping</h1>
      <div className="cards">
        {items.map((item) => (
          <MenuStore
            key={item.id}
            img={item.img}
            name={item.name}
            alt={item.alt}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu


// import React from 'react'
// import MenuStore from './MenuStore'
// import phoneImg from '../Images/phone.jpeg'
// import speakerImg from '../Images/speaker.jpg'
// import watchImg from '../Images/watch.jpeg'

// const items = [
//   { id: 'phone', img: phoneImg, name: 'Phone', alt: 'phone', price: 199 },
//   { id: 'speaker', img: speakerImg, name: 'Speaker', alt: 'speaker', price: 129 },
//   { id: 'watch', img: watchImg, name: 'Watch', alt: 'watch', price: 249 },
// ]

// function Menu() {
//   return (
//     <div>
//       <h1>Online Shopping</h1>
//       <div className="cards">
//         {items.map((item) => (
//           <MenuStore
//             key={item.id}
//             img={item.img}
//             name={item.name}
//             alt={item.alt}
//             price={item.price}
//             id={item.id}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Menu