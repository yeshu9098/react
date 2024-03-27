import './App.css';
// import Header from './components/Header';
// import Poster from './components/Poster';
// import About from './components/About'
// import Menu from './components/Menu'
// import Contact from './components/Contact';
// import Footer from './components/Footer';
import { Hook, NewHook } from './components/Hook';

function App() {

  const changeName = "Update"

  return (
    <>
    {/* <Header/>
    <Poster/>
    <About/>
    <Menu/>
    <Contact/>
    <Footer/> */}
    <Hook button={changeName}/>
    <NewHook button={changeName}/>
    </>
   
  );
}

export default App;
