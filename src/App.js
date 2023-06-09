import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Layout from './Layout';
import Room from './Room';

function App() {
  return (
		<BrowserRouter>
					<Routes>                                                                        
						<Route path="/" element={<Home/>}/>
						<Route path="/signup" element={<SignUp/>}/>
						<Route path="/login" element={<Login/>}/>
				</Routes>                    
		</BrowserRouter>
  );
}

export default App;
