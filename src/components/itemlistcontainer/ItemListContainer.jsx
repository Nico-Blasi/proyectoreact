import ItemList from "../itemlist/ItemList"
import { Text } from "@chakra-ui/react"
import { products } from "../../utils/products"
import { customFetch } from "../../utils/customFetch"
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => {

    const [listProduct, setListProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {category} =useParams()

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                if (category) {
                    setLoading(false)
                    setListProduct(res.filter(prod => prod.category === category))
                }else {
                    setLoading(false)
                    setListProduct(res)
                }
            })
    }, [category])

    return(
        <>
            <h1>{props.greeting}</h1>
            
            {!loading
            ?
            <ItemList listProduct={listProduct} />
            :
            <Text>Cargando...</Text>
            }
        </>
    )
}

export default ItemListContainer