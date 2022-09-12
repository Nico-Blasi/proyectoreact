import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar/NavBar"
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemCount from './components/itemcount/ItemCount';

const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Bienvenido a mi intento de eComerce! :)" />
    <ItemCount initial={1} stock={9} onAdd={() => {}} />
    </>
  )
}

export default App;
