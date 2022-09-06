import { Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, IconCar } from "./NavBar.elements"
import {FaReact} from "react-icons/fa";
import CartWidget from "../cartwidget/CartWidget";

const NavBar = () => {
    return (
        <>
        <Container>
            <Wrapper>
                <LogoContainer>
                    <FaReact></FaReact>
                </LogoContainer>

                <Menu>
                    <MenuItem>
                        <MenuItemLink>
                            PRODUCTOS
                        </MenuItemLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuItemLink>
                            NOSOTROS
                        </MenuItemLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuItemLink>
                            CONTACTANOS
                        </MenuItemLink>
                    </MenuItem>
                </Menu>

                <IconCar>
                    <CartWidget></CartWidget>
                </IconCar>
            </Wrapper>
        </Container>
        </>
        )
}

export default NavBar