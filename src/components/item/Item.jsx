import { VStack, Button, Text, Image, Link } from "@chakra-ui/react"

const Item = ({product}) => {
    
    console.log(product)

    return (

        <div>Item</div>

        // <VStack boxShadow='lg' p='6' rounded='md' bg='white' m="15px" minWidth="275px">
        //     <Image src={product.image} alt={product.title} w="100px" />
        //     <Text>{product.title}</Text>
        //    <Text>${product.precio}</Text>
        //     <Button colorScheme='red' size='xs'>
        //         <Link>Ver Detalle</Link>
        //     </Button>
        // </VStack>
    )
}

export default Item