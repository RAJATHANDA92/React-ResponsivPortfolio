import React from 'react'

function Contact() {
  return (
    <>
    <div className="about">
    <h1 className="p-span">Contact</h1>
    <br />
    <div className="row">
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
        <h5 className="card-title"><i class="fa-sharp fa-solid fa-phone"></i></h5>
        <p className="card-text">8410081757</p>
        </div>
        </div>
      </div>
      <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
        <h5 className="card-title"><i class="fa-solid fa-envelope"></i></h5>
        <p className="card-text">rajathanda92@gmail.com</p>
        </div>
        </div>
      </div>
      <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
        <h5 className="card-title"><i class="fa-brands fa-square-whatsapp"></i></h5>
        <p className="card-text">8410081757</p>
        </div>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Contact