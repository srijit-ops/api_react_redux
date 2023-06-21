import React from 'react'

function Card(props) {
  return (
    <div className='card col-2'>
        <img src='https://img.freepik.com/free-icon/user_318-159711.jpg' alt='user_img'/>
        <h2>John Doe</h2>
        <div className="d-flex">
        <i class="fa-regular fa-envelope"></i>
        <h6>email</h6>
        </div>
        <div className="d-flex">
        <i class="fa-regular fa-phone"></i>
        <h6>phone</h6>
        </div>
        <div className="d-flex">
        <i class="fa-solid fa-link"></i>
        <h6>website</h6>
        </div>
        <div className="d-flex">
        <i class="fa-regular fa-building"></i>
        <h6>company</h6>
        </div>
    </div>
  )
}

export default Card