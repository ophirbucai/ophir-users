import './AppRouter.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Map from './pages/Map/Map';

const AppRouter = () => {
  return (
      <div className="AppRouter">
        <Router>
          <Routes>
              <Route exact path='/:userId' element={<Home />} />
              <Route path='/map/:geo' element={<Map />} />
          </Routes>
        </Router>
      </div>
  )
};

export default AppRouter;
