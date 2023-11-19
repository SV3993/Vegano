import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import SignUp from './screens/SignUp';
import { CartProvider } from './components/ContextReducer';
import MyOrders from './screens/MyOrders';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<SignUp/>}></Route>
            <Route exact path="/myOrder" element={<MyOrders/>}></Route>
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
