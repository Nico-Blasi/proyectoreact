import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar/NavBar"
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';

const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Bienvenido a mi intento de eComerce! :)" />
    </>
  )
}

export default App;
