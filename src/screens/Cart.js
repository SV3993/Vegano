import React from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function Cart() {

    let data = useCart();
    let dispatch = useDispatchCart();
    if (data.length === 0) {
        return (
            <div>
                <div className='m-5 w-100 text-center fs-3'>The Card Is Empty </div>
            </div>
        )
    }

    const handleCheckOut = async (req, res) => {
        let userEmail = localStorage.getItem("userEmail");
        const response = await fetch("http://localhost:5000/api/orderData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                order_data: data,
                email: userEmail,
                Order_date: new Date().toDateString()
            })
        })
        if (response) {
            dispatch({ type: "DROP" });
        }
    }



    let totalPrice = data.reduce((total, food) => total + food.price, 0);
    return (
        <div>
            <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md' style={{ borderRadius: "3px" }}>
                <table className='table table-hover table-bordered' >
                    <thead className='bg-success text-white fs-4'>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Quantity</th>
                            <th scope='col'>Option</th>
                            <th scope='col'>Amount</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((food, index) => (
                            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#E0E0E0" : "#F5F5F5" }}>
                                <th scope='row'>{index + 1}</th>
                                <td>{food.name}</td>
                                <td>{food.qty}</td>
                                <td>{food.size}</td>
                                <td>₹{food.price.toFixed(2)}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger p-1"
                                        onClick={() => { dispatch({ type: "REMOVE", index: index }) }}
                                    >
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div><h1 className='fs-2 ' style={{ color: "bisque" }}>Total Price: ₹{totalPrice.toFixed(2)}</h1></div>
                <button
                    className='btn btn-success mt-3'
                    style={{
                        backgroundColor: "bisque",
                        color: "black",
                        transition: 'background-color 0.3s ease, color 0.3s ease',
                    }}
                    onClick={handleCheckOut}
                    onMouseOver={(e) => e.target.style.backgroundColor = "#5f8569"}
                    onMouseOut={(e) => e.target.style.backgroundColor = "bisque"}
                >
                    Check Out
                </button>

            </div>
        </div>
    )
}

