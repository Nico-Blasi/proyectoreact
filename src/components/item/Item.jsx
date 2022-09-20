import { VStack, Button, Text, Image, Link } from "@chakra-ui/react"

const Item = ({image, precio, title}) => {

    return (
         <VStack boxShadow='lg' p='6' rounded='md' bg='white' m="15px" maxWidth="275px">
            <Image src={image} alt={title} w="100px" />
            <Text>{title}</Text>
            <Text>${precio}</Text>
            <Button colorScheme='red' size='xs'>
                <Link>Ver Detalle</Link>
            </Button>
         </VStack>
    )
}

export default Item