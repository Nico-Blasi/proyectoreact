import ItemList from "../itemlist/ItemList"
import { Grid } from "@chakra-ui/react"
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { db } from "../../firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = (props) => {

    const { category } = useParams();
    const [product, setProducts] = useState([])

    
    useEffect(() => {
        const productsCollection = collection(db, 'products')
        if (category) {
            const queryFilter = query(productsCollection, where('category', '==', category))
            getDocs(queryFilter)
            .then(res=>setProducts(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }else{
            getDocs(productsCollection)
            .then(res=>setProducts(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }
    }, [category])
    
    
    return(
        <>
            <Grid templateColumns='repeat(5, 1fr)' p='0 200px' gap={6}>
                <ItemList product={product} />
            </Grid>
        </>
    )
}

export default ItemListContainer