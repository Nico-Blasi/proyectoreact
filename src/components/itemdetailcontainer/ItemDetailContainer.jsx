import { Text } from "@chakra-ui/react"
import {useState, useEffect} from 'react'
import ItemDetail from "../itemdetail/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/firebase";
import { collection, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        const productCollection = collection(db, "products");
        const refDoc = doc(productCollection, id);
        getDoc(refDoc)
          .then((result) => {
            setProduct({
              id: result.id,
              ...result.data(),
            });
          })
          .finally(() => {
            setLoading(false);
          });
      }, [id]);

    
    return(
        <>
            {!loading
            ?
            <ItemDetail product={product} />
            :
            <Text>Cargando...</Text>}
        </>
    )
}

export default ItemDetailContainer