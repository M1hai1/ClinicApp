import './App.css';
import Main from './Pages/Main/Main';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Mail from './Components/Mail/Mail';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import Doctors from './Pages/Doctors/Doctors';
import Service from './Pages/Service/Service';
import Contacts from './Pages/Contacts/Contacts';
import UpButton from './Components/UpButton/UpButton';
import ModalError from './Components/Modal/ModalError/ModalError';



function App() {
  return (
    <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/about/*' element={<About/>}/>
            <Route path='/doctors/*' element={<Doctors/>}/>
            <Route path='/service/*' element={<Service/>}/>
            <Route path='/contacts/*' element={<Contacts/>}/>
          </Routes>
        <Mail/>
        <UpButton/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
