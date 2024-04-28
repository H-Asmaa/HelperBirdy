
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Queue from "./pages/Queue";
import Donate from './pages/Donate';
import Login from './pages/Login';
import Signup from './pages/Signup';
import News from './pages/News';

const App = () => {
  return (
		<div>
	
			<Routes>
        <Route path='/' element={<Home />} />
        <Route path='/queue' element={<Queue />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/news' element={<News/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App
