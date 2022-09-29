import { Button, Center, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import ItemCount from "../itemcount/ItemCount"
import { useState } from "react"

const ItemDetail = ({listProduct}) => {

    const {image, title, precio, descripcion} = listProduct

    const [isAdded, setIsAdded] = useState(false)

    const onAdd = () => {
        setIsAdded(true)
    }
    
    return(
        <Center boxShadow='lg' p='6' rounded='md' bg='white' m='20px auto'>
            <Image src={image} w='200px' />
            <VStack maxWidth='500px' align='left' mx='15px'>
                <HStack>
                    <Heading>{title}</Heading>
                </HStack>
                <Text className='bold' fontSize='3xl'>${precio}</Text>
                <Text fontSize='xs'>{descripcion}</Text>
                {
                    isAdded ?
                    <NavLink to={"/cart"}>
                        <Button colorScheme='orange' size='sm'>Ir al Carrito</Button>
                    </NavLink>
                    :
                    <ItemCount initial={1} stock={10} onAdd={onAdd} />
                }
            </VStack>
        </Center>
    )
}

export default ItemDetail