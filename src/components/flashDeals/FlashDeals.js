import React from "react"
import FlashCard from "./FlashCard"
import Data from "../Data"
import "./style.css"

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='containe' style={{position:"relative"}}>
          <div className='heading f_flex'>
            
            <h1 style={{ marginLeft:"10px", marginTop:"28px"}}>Flash Deals</h1>
            
          </div>
          <FlashCard Data={Data} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
