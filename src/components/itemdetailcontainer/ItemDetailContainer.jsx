import { Text } from "@chakra-ui/react"
import { products } from "../../utils/products"
import { customFetch } from "../../utils/customFetch"
import {useState, useEffect} from 'react'
import ItemDetail from "../itemdetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [ListProduct, setListProduct] = useState({})
    const [loading, setLoading] = useState(true)
    
    const {id} = useParams()

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProduct(res.find(item => item.id === parseInt(id)))
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