import { Button, Text, VStack } from '@chakra-ui/react'
import {useState} from 'react'

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)
    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > initial && setCount(count - 1)

    return (
        <VStack>
            <Button variant='ghost' colorScheme='red' size='sm' onClick={decrease}>-</Button>
            <Text>{count} </Text>
            <Button variant='ghost' colorScheme='red' size='sm' onClick={increase}>+</Button>
            <Button colorScheme='red' size='sm'>Agregar al carrito</Button>
        </VStack>
    )
}

export default ItemCount