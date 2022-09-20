import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar/NavBar"
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';
import ItemCount from './components/itemcount/ItemCount';
import Item from './components/item/Item';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <ChakraProvider>
        <ItemListContainer greeting="Bienvenido a mi intento de eComerce! :)" />
        <ItemDetailContainer />
        <ItemCount initial={1} stock={10} onAdd={() => {}} />
        <Item />
      </ChakraProvider>
    </BrowserRouter>
    </>
  )
}

export default App;
