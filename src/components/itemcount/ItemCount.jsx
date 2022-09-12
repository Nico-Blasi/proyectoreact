import {useState} from 'react'

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)
    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > initial && setCount(count - 1)

    return (
        <>
        <h3>ItemCount</h3>
        <div>
            <button onClick={decrease}>-</button>
            <text>{count} </text>
            <button onClick={increase}>+</button>
            <button>Agregar al carrito</button>
        </div>
        </>
    )
}

export default ItemCount