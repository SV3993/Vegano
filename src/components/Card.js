import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';


export default function Card(props) {

    let data = useCart();
    let dispatch = useDispatchCart();
    let options = props.options;
    let printOptions = Object.keys(options[0]);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");
    const priceRef = useRef();
    useEffect(() => {
        setSize(priceRef.current.value);
    }, [])
    let finalPrice = qty * parseInt(options[0][size]);
    const handleAddToCart = async () => {

        let food = [];
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item; 
                break;
            }
        }
        if (food.size !== 0 && food.size === size) {
            await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
            return;
        }
        else if (food.size !== 0 && food.size !== size) {
            await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size });
            return;
        }// console.log(data);
        
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size });
    }
    return (
        <div className='container'>
            <div>
                <div className="card mt-3 rounded border border-5" style={{ "width": "18rem", "maxHeight": "360px", "backgroundColor": "#936f6e", "color": "white" }}>
                    <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ "height": "150px", "objectFit": "fill" }} />
                    <div className="card-body">
                        <h5 className="card-title" style={{ marginLeft: "29px" }}>{props.foodItem.name}</h5>
                        {/* <p className="card-text">Some quick example.</p> */}
                        <div className='container w-100 '>
                            <select className="m-1 h-100 bg-info rounded" onChange={(e) => setQty(e.target.value)}>
                                {
                                    Array.from(Array(6), (e, i) => {
                                        return (
                                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                                        )
                                    })
                                }
                            </select>

                            <select className="m-1 h-100 bg-info rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                                {printOptions.map((data) => {
                                    return <option key={data} value={data}>{data}</option>
                                })}
                            </select>
                            <div className='d-inline h-100 fs-5 '>Rs.{finalPrice}/-</div>
                            <hr></hr>
                            <div className='btn btn-primary' onClick={handleAddToCart}>Add To Cart</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
