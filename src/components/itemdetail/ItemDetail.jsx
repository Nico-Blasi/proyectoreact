import { Center, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"
import ItemCount from "../itemcount/ItemCount"

const ItemDetail = ({listProduct}) => {

    const {image, title, precio} = listProduct
    
    return(
        <Center boxShadow='lg' p='6' rounded='md' bg='white' m='20px auto'>
            <Image src={image} w='200px' />
            <VStack maxWidth='500px' align='left' mx='15px'>
                <HStack>
                    <Heading>{title}</Heading>
                </HStack>
                <Text className='bold' fontSize='2x1'>${precio}</Text>
            </VStack>
        </Center>
    )
}

export default ItemDetail