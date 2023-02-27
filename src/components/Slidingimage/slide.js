import React from 'react'
import "../Slidingimage/slide.css"

import Mens from "../../assets/picture.png"
import Mens1 from "../../assets/picture7.png"
import Mens2 from "../../assets/picture2.png"
import Mens3 from "../../assets/picture3.png"
import Mens4 from "../../assets/picture1.png"
import Mens5 from "../../assets/picture4.png"
import Mens6 from "../../assets/picture5.png"
import Mens7 from "../../assets/picture6.png"


export default function slide() {
  return (
<div id="carouselExampleInterval" class="carousel slide" data-mdb-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-mdb-interval="5">
      <img src={Mens} class="d-block w-100"
        alt="#" style={{height:"400px"}} />
    </div>
    <div class="carousel-item" data-mdb-interval="5">
      <img src={Mens1} class="d-block w-100" alt="#"  style={{height:"400px"}}/>
    </div>
    <div class="carousel-item" data-mdb-interval="1">
      <img src={Mens2} class="d-block w-100"
        alt="#"  style={{height:"400px"}} />
    </div>
    <div class="carousel-item" data-mdb-interval="2">
      <img src={Mens3} class="d-block w-100"
        alt="#"   style={{height:"400px"}}/>
    </div>
    <div class="carousel-item" data-mdb-interval="3">
      <img src={Mens4} class="d-block w-100"
        alt="#"  style={{height:"400px"}}/>
    </div>
    <div class="carousel-item" data-mdb-interval="4">
      <img src={Mens5} class="d-block w-100"
        alt="#"  style={{height:"400px"}}/>
    </div>
    <div class="carousel-item" data-mdb-interval="5">
      <img src={Mens6} class="d-block w-100"
        alt="#"  style={{height:"400px"}} />
    </div>
    <div class="carousel-item" data-mdb-interval="6">
      <img src={Mens7} class="d-block w-100"
        alt="#"  style={{height:"400px"}}/>
    </div>
  </div>
  <button class="carousel-control-prev" data-mdb-target="#carouselExampleInterval" type="button"
    data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" data-mdb-target="#carouselExampleInterval" type="button"
    data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}
