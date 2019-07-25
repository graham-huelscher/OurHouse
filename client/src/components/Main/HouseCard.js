import React from 'react'

const HouseCard = (props) => (
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-5">
        <div class="card">
            <img src="placeholder.png" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.id}</h5>
                <p class="card-text">This is where the property details would go</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
    </div>

)

export default HouseCard