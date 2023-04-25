import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SideBar from './components/SideBar'
import './stylesheet/Main.scss'
import Dashboard from "./pages/Dashboard"
import Driver from "./pages/Driver"
import Trajectory from "./pages/Trajectory"
import Vehicule from "./pages/Vehicule"
import Clients from './pages/Clients';
import SchoolDetail from './pages/SchoolDetail';
import Leases from './pages/Leases';
import ParcAuto from './pages/ParcAuto';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <SideBar />
      <div className="content">
      
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/driver' element={<Driver />}/>
          <Route path='/trajectory' element={<Trajectory />}/>
          <Route path='/vehicule' element={<Vehicule />}/>
          <Route path='/client' element={<Clients />}/>
          <Route path='/leases' element={<Leases />} />
          <Route path='/parcauto' element={<ParcAuto />} />
        </Routes>
      
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
