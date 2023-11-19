import React, { useState } from 'react'
import {
    Link,
    useNavigate
} from "react-router-dom";
import Cart from '../screens/Cart';
import Modal from '../screens/Modals';
import { useCart } from './ContextReducer';

export default function Navbar() {

    const [cartView, setCartView] = useState(false);
    const items = useCart();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/");
    }


    return (
        <div >
            <nav className="navbar navbar-expand navbar-light fs-3" style={{ "backgroundColor": "#020119" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-2 fst-italic" style={{ display: "block", color: "#bdc7d9", fontWeight: "900", textShadow: "rgb(255, 0, 0) 3px 9px 3px", margin: "auto", marginRight: "39px", padding: "auto" }} to="/">Vegano</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto"  >
                            <li className="nav-item me-3">
                                <Link className="nav-link active fs-5" style={{ "color": "white", "font-weight": "900" }} aria-current="page" to="/">Home</Link>
                            </li>

                            {(localStorage.getItem("authToken"))
                                ? <li className="nav-item me-3">
                                    <Link className="nav-link active fs-5" style={{ "color": "white", "font-weight": "900" }} aria-current="page" to="/myOrder">Orders</Link>
                                </li>
                                : ""
                            }
                        </ul>
                        {!(localStorage.getItem("authToken")) ?
                            <div className='d-flex'>
                                <Link className="btn bg-white m-1" to="/login">Login</Link>
                                <Link className="btn bg-white m-1" to="/signup">SignUp</Link>
                            </div>
                            :
                            <div className='d-flex'>
                                <div className="btn bg-white m-1" onClick={() => setCartView(true)} >
                                    MyCart <span className="badge badge-danger" style={{ backgroundColor: "red" }}>{items.length}</span>
                                </div>
                                {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
                                <div className="btn bg-white m-1" onClick={handleLogout}  >Logout
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}