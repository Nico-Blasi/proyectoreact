import ItemList from "../itemlist/ItemList"
import { Text, Grid } from "@chakra-ui/react"
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
            {!loading
            ?
            <Grid templateColumns='repeat(5, 1fr)' p='0 200px' gap={6}>
                <ItemList listProduct={listProduct} />
            </Grid>
            :
            <Text>Cargando...</Text>
            }
        </>
    )
}

export default ItemListContainer