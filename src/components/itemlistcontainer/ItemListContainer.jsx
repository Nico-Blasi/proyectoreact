import ItemList from "../itemlist/ItemList"
import { Text, Grid } from "@chakra-ui/react"
import { products } from "../../utils/products"
import { customFetch } from "../../utils/customFetch"
import {useState, useEffect} from 'react'
import { Form, useParams } from "react-router-dom"
import { db } from "../../firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = (props) => {

    const { id } = useParams();
    const [product, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {category} =useParams()

    useEffect(() => {

        const productsCollection = collection(db, 'products')
        // const procesadores = query(productsCollection, where('category', '==', 'procesadores'))
        // const memoriasram = query(productsCollection, where('category', '==', 'memoriasram'))
        // const placasmadre = query(productsCollection, where('category', '==', 'placasmadre'))
        // const placasdevideo = query(productsCollection, where('category', '==', 'placasdevideo'))
        // const perifericos = query(productsCollection, where('category', '==', 'perifericos'))
        getDocs(productsCollection)
        .then((data)=>{
            const lista = data.docs.map((product)=>{
                return{
                    ...product.data(),
                    id: product.id
                }
            })
            setProducts(lista)
        })
        .finally(()=>{
            setLoading(false);
        })
    }, [category])

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