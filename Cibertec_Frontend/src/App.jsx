import RegistroEstudiantes from './Estudiantes/formulario/RegistroEstudiantes';
import Header from './Header/Header';
import Lista from './Estudiantes/Lista/Lista'
import Footer from './Footer/Footer';
import Home from './Home/home';
import './App.css';
import { Route, Routes } from 'react-router-dom'


function App() {
// console.log(Hola);
  return (
  <>
  
      <Header />
      
     
      <Footer></Footer>

     <Routes>
      <Route path='/reg/estudiantes' element={<RegistroEstudiantes></RegistroEstudiantes>} ></Route>
      <Route path="/" element={<Home/>} />
      <Route path="/lista" element={<Lista />} />
     </Routes>
  </>
      
   
  );
}
export default App;