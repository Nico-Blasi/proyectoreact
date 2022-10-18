import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar/NavBar"
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';
import ItemCount from './components/itemcount/ItemCount';
import Item from './components/item/Item';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/cart/Cart';
import { CartContextProvider } from './context/CartContext';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <CartContextProvider>
      <NavBar />
      <ChakraProvider>
        <Routes>
          <Route path='/' element={<ItemListContainer /> } />
          <Route path='/category/:category' element={<ItemListContainer /> } />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          <Route path='/category/:category/product/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </ChakraProvider>
    </CartContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App;
