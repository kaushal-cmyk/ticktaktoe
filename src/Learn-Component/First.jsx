import React from 'react'

export const First = () => {

    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
      ];


      let showItem = products.map((item, i)=> {
        return (
            <li>
                {item.title}
            </li>
        )
      })


      const product = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
      ];

      let showProduct = product.map((value, i)=> {

        return (
        <li style = {{
            color: value.isFruit ? 'magenta': "darkgreen"
        }}>
            {value.title}
        </li>)
      })


  return (
    <div>
        {/* {showItem} */}
        {showProduct}
    </div>
  )
}
