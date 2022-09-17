import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar/NavBar"
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemCount from './components/itemcount/ItemCount';
import Item from './components/item/Item';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <>
    <NavBar />
    <ChakraProvider>
      <ItemListContainer greeting="Bienvenido a mi intento de eComerce! :)" />
      <ItemCount initial={1} stock={10} onAdd={() => {}} />
      <Item />
    </ChakraProvider>
    </>
  )
}

export default App;
