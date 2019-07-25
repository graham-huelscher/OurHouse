import React from 'react'

const HouseCard = (props) => (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-5">
        <div className="card">
            <img src="placeholder.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.id}</h5>
                <p className="card-text">{props.userSearch}</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
    </div>

)

export default HouseCard