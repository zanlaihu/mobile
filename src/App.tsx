
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Lottery from './module/Lottery';
import MobileHome from './pages/home';


function App() {
  return (
    <Routes>
      <Route path='/mobile' element={<MobileHome />}></Route>
      <Route path='/mobile/lottery' element={<Lottery />}></Route>
    </Routes>
  );
}

export default App;
