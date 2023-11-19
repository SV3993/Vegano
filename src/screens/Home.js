import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
// import Corousal from '../components/Corousal'

export default function Home() {

  const [search,setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "apllication/json"
      }
    });
    response = await response.json();
    // console.log(response[0],response[1]);
    setFoodItem(response[0]);
    setFoodCat(response[1]);

  };

  useEffect(() => {
    loadData();
  }, [])



  return (
    <div>
      <div><Navbar /></div>
      {/* <div><Corousal /></div> */}

      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain" }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/900×300/?pizza" className="d-block w-100" style={{ "height": "539px", "filter": "brightness(39%)", "objectFit": "cover" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900×300/?burger" className="d-block w-100" style={{ "height": "539px", "filter": "brightness(39%)", "objectFit": "cover" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900×300/?cake" className="d-block w-100" style={{ "height": "539px", "filter": "brightness(39%)", "objectFit": "cover" }} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="carousel-caption d-none d-md-block">
          <div className="d-flex justify-content-center" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  value={search} onChange={(e)=>{
              setSearch(e.target.value)
            }} />
            {/* <button className=" btn btn-primary me-md-2" type="submit">Search</button> */}
          </div>
        </div>
      </div>


      <div className='container m-3'>
        {foodCat.length !== 0 ? (
          foodCat.map((data) => (
            <React.Fragment key={data._id}>
              <div className='fs-3 m-3'>{data.CategoryName}</div>
              <hr />
              {foodItem.length !== 0 ? (
                <div className='row'>
                  {foodItem
                    .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                    .map((filterItems) => (
                      <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                        <Card foodItem={filterItems} options={filterItems.options}></Card>
                      </div>
                    ))}
                </div>
              ) : (
                <div>No Such Data</div>
              )}
            </React.Fragment>
          ))
        ) : (
          <div>Hello World No</div>
        )}
      </div>
      <div><Footer></Footer></div>
    </div>
  )
}

