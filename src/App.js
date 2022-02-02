import './css/App.css';
import Accordions from './css/components/Accordions';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NotFound from './css/components/Notfound';
import Users from './css/components/Users';

function App() {
  return (
    <Router>
    <div className="details-box">
    <Routes>
        <Route path='/' element={<Accordions/>} />
        <Route path='/users' element={<Users/>} />
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
