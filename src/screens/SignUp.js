import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SignUp() {

    const [credentials, setcredentials] = useState({ name: "", location: "", email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/CreateUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.location })
        });
        const json = await response.json();
        console.log(json);
        if (!json.success) {
            alert('Enter Valid Credentials');
        }
    };

    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value });
    }


    return (
        <>
            <div style={{ marginBottom: "3em" }}>
                <Navbar />
            </div>
            <div className='container w-50 p-3' style={{ backgroundColor: "bisque", border: "6px solid", borderRadius: "39px" }}>
                <form onSubmit={handleSubmit} style={{display:"block",fontWeight:"900",margin:"auto"}}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" name='location' value={credentials.location} onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to={"/login"} className='m-3 btn btn-success'>Already A User</Link>
                </form>
            </div>
            <div style={{ position: "absolute", bottom: "0px", left: "0px", right: "0px" }}>
                <Footer />
            </div>
        </>
    )
}
