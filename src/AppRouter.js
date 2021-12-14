import './AppRouter.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

const AppRouter = () => {
  return (
      <div className="AppRouter">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
        </Router>
      </div>
  )
};

export default AppRouter;
