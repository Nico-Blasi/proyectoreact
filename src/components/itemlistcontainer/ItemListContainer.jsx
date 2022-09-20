import ItemList from "../itemlist/ItemList"
import { Text } from "@chakra-ui/react"
import { products } from "../../utils/products"
import { customFetch } from "../../utils/customFetch"
import {useState, useEffect} from 'react'

const ItemListContainer = (props) => {

    const [listProduct, setListProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProduct(res)
            })
    }, [])

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