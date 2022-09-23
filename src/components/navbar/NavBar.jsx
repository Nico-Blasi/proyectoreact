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
                            <Link to="category/procesadores">
                                PROCESADORES
                            </Link>
                        </MenuItemLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuItemLink>
                            <Link to="category/memoriasram">
                                MEMORIAS RAM
                            </Link>
                        </MenuItemLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuItemLink>
                            <Link to="category/placasmadre">
                                PLACAS MADRES
                            </Link>
                        </MenuItemLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuItemLink>
                            <Link to="category/placasdevideo">
                                PLACAS DE VIDEO
                            </Link>
                        </MenuItemLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuItemLink>
                            <Link to="category/perifericos">
                                PERIFERICOS
                            </Link>
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