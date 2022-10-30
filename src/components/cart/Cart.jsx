import { Button, Center, HStack, Image, Text, VStack } from "@chakra-ui/react"
import { addDoc, collection } from "firebase/firestore"
import { useCartContext } from "../../context/CartContext"
import { db } from "../../firebase/firebase"
import Formulario from "../formulario/Formulario"

const Cart = () => {

    const {cartList, totalPrice, removeProduct, cleanCart,} = useCartContext()
    
    return(
        <Center>
            <VStack>
                {cartList.map(prod =>
                    <HStack key={prod.id} boxShadow='lg' p='6' rounded='md' spacing={10} bg="white">
                        <Image src={prod.image} w="100px"></Image>
                        <Text as="b">{prod.title}</Text>
                        <Text as="b">{prod.quantity}</Text>
                        <Button colorScheme='orange' size='sm' onClick={() => removeProduct(prod.id)}>x</Button>
                    </HStack>
                    )}
                    {cartList.length === 0 ?
                    <Text>Tu carrito esta vacio</Text>
                    :
                    <>
                    <Text>Total: ${totalPrice()}</Text>
                    <Formulario />
                    <Button colorScheme='orange' size='sm' onClick={cleanCart}>Vaciar carrito</Button>
                    </>
                }
            </VStack>
        </Center>
    )
}

export default Cart