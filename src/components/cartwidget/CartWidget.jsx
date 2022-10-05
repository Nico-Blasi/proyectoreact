import { Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {

    const {totalQuantity} = useCartContext()

    return(
        <NavLink to={"/cart"}>
            <FaShoppingCart/>
            <Text className="badge" fontSize='xs'>{totalQuantity()}</Text>
        </NavLink>
    )
}

export default CartWidget