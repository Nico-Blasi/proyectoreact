import { Text } from "@chakra-ui/react"
import { products } from "../../utils/products"
import { customFetch } from "../../utils/customFetch"
import {useState, useEffect} from 'react'
import ItemDetail from "../itemdetail/ItemDetail"

const ItemDetailContainer = () => {

    const [ListProduct, setListProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProduct(res.find(item => item.id === 1))
            })
    }, [])

    
    return(
        <>
            {!loading
            ?
            <ItemDetail listProduct={ListProduct} />
            :
            <Text>Cargando...</Text>}
        </>
    )
}

export default ItemDetailContainer