import { VStack, Button, Text, Image, Link } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const Item = ({image, precio, title, id}) => {

    return (
         <VStack boxShadow='lg' p='6' rounded='md' bg='white' m="15px" maxWidth="275px">
            <Image src={image} alt={title} w="100px" />
            <Text>{title}</Text>
            <Text>${precio}</Text>
            <Button colorScheme='red' size='xs'>
                <NavLink to={`product/${id}`}>
                    <Link>Ver Mas</Link>
                </NavLink>
            </Button>
         </VStack>
    )
}

export default Item