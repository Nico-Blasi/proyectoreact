import ItemList from "../itemlist/ItemList"
import { Text, Grid } from "@chakra-ui/react"
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { db } from "../../firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = (props) => {

    const { categoryId } = useParams();
    const [product, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        const productsCollection = collection(db, 'products')
        if (categoryId) {
            const queryFilter = query(productsCollection, where('category', '==', categoryId))
            getDocs(queryFilter)
                .then(res=>setProducts(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }else{
            getDocs(productsCollection)
                .then(res=>setProducts(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }
    }, [categoryId])

    return(
        <>
            {!loading
            ?
            <Grid templateColumns='repeat(5, 1fr)' p='0 200px' gap={6}>
                <ItemList product={product} />
            </Grid>
            :
            <Text>Cargando...</Text>
            }
        </>
    )
}

export default ItemListContainer