import React from 'react'

export default function Corousal() {
    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain"}}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900×300/?pizza" className="d-block w-100" style={{ "maxHeight": "739px", "filter": "brightness(39%)","objectFit":"cover" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×300/?burger" className="d-block w-100" style={{ "maxHeight": "739px", "filter": "brightness(39%)","objectFit":"cover" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×300/?cake" className="d-block w-100" style={{ "maxHeight": "739px", "filter": "brightness(39%)","objectFit":"cover" }} alt="..." />
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
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className=" btn btn-primary me-md-2" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
