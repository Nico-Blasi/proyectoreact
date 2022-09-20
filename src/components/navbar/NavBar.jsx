import { Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, IconCar } from "./NavBar.elements"
import {FaReact} from "react-icons/fa";
import CartWidget from "../cartwidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
        <Container>
            <Wrapper>
                <LogoContainer>
                    <Link to={'/'}>
                        <FaReact></FaReact>
                    </Link>
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
                    <Link to={'/cart'}>
                        <CartWidget></CartWidget>
                    </Link>
                </IconCar>
            </Wrapper>
        </Container>
        </>
        )
}

export default NavBar