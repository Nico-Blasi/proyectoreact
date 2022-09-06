import { Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink } from "../NavBar.elements"
import {FaReact} from "react-icons/fa";

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
            </Wrapper>
        </Container>
        </>
        )
}

export default NavBar