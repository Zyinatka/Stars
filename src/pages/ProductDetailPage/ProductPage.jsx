import React from 'react'
import './Product.css'

import o1 from '../../assets/image/detailimg01.png'
import o2 from '../../assets/image/detailimg02.png'
import o3 from '../../assets/image/detailimg03.png'
import  vec01 from '../../assets/svg/detailsvec.svg'
import  sizexs from '../../assets/svg/sizeXs.svg'
import sizes from '../../assets/svg/sizeS.svg'
import  sizeM from '../../assets/svg/sizeM.svg'
import sizel from '../../assets/svg/sizeL.svg'
import sizexl from '../../assets/svg/sizeXl.svg'
import arroy from '../../assets/svg/arroy.svg'
import  simularimg from '../../assets/image/Rectangle25.png'
import  vec02 from '../../assets/svg/detailimgvec01.svg'
import  like from '../../assets/svg/detailwishlist.svg'
import red from '../../assets/svg/red.svg'
import yellow from '../../assets/svg/yellow.svg'
import black from '../../assets/svg/black.svg'
import pink  from '../../assets/svg/pink.svg'
import cart from '../../assets/svg/cart.svg'
import st from '../../assets/svg/st.svg'
import massage from '../../assets/svg/massage.svg'


const ProductPage = () => {
  
  return (
    <div className="product">
      <div className="top">
        <div className="product_img">
        <img src={o1} alt="" />
        <img src={o3} alt="" />
        <img src={o2} alt="" />
      </div>
      <div className="product_text">
        <div className="shop1">
          <h4>Shop</h4>
          <img src={vec01} alt="" />
          <h4>Women</h4>
          <img src={vec01} alt="" />
          <h4>Top</h4>
        </div>
       <h2>Raven Hoodie With 
        Black colored Design</h2>
         <div className="raiting">
         <div className='stars'>
          <p><img src={st} alt="" />3.5</p>
           <p><img src={massage} alt="" />120 comment</p>
          </div> 

         </div>
         <div className="select">
          <div className='guide'>
            <h6 className='guidep'>Select Size</h6>
           <h6>Size Guide</h6>
           <img src={arroy} alt="" />

          </div>
           
          <div className="size">
            
            <img src={sizexs} alt="" />
            <img src={sizes} alt="" />
            <img src={sizeM} alt="" />
            <img src={sizel} alt="" />
            <img src={sizexl} alt="" />
          </div>
         </div>
         <div  className="colors">
          <h4>Colours Available </h4>
        <div className='colors_dis'>
          <img src={black} alt="" />
          <img src={yellow} alt="" />
          <img src={pink} alt="" />
          <img src={red} alt="" />
          
        </div>
         </div>
         <div className="add-to-cart">
          <button className='addcart'> <img src={cart} alt="" />Add to cart</button>
          <button className='addprice'>$63.00</button>
         </div>
      </div>
      </div>

      <div className='simular'>
        <h2><img src={vec02} alt="" />Similar Products</h2>
        <div className='simular-grid'>
           <div className='simular-product'>
           <img className='wish' src={like} alt="" />
          <img src={simularimg} alt="" />
          <div className='simular-title'>
            <div className='title'>
              <h2>White T-Shirt</h2>
              <p>Priya’s  Brand</p>
              </div>
            <div className='price'>
              <h2>$13.00</h2>
            </div>
          </div>
        </div>
        <div className='simular-product'>
        <img className='wish' src={like} alt="" />
          <img src={simularimg} alt="" />
          <div className='simular-title'>
            <div className='title'>
              <h2>White T-Shirt</h2>
              <p>Priya’s  Brand</p>
              </div>
            <div className='price'>
              <h2>$13.00</h2>
            </div>
          </div>
        </div>
        <div className='simular-product'>
        <img className='wish' src={like} alt="" />
          <img src={simularimg} alt="" />
          <div className='simular-title'>
            <div className='title'>
              <h2>White T-Shirt</h2>
              <p>Priya’s  Brand</p>
              </div>
            <div className='price'>
              <h2>$13.00</h2>
            </div>
          </div>
        </div>
        <div className='simular-product'>
        <img className='wish' src={like} alt="" />
          <img src={simularimg} alt="" />
          <div className='simular-title'>
            <div className='title'>
              <h2>White T-Shirt</h2>
              <p>Priya’s  Brand</p>
              </div>
            <div className='price'>
              <h2>$13.00</h2>
            </div>
          </div>
        </div>
        <div className='simular-product'>
        <img className='wish' src={like} alt="" />
          <img src={simularimg} alt="" />
          <div className='simular-title'>
            <div className='title'>
              <h2>White T-Shirt</h2>
              <p>Priya’s  Brand</p>
              </div>
            <div className='price'>
              <h2>$13.00</h2>
            </div>
          </div>
        </div> 
        <div className='simular-product'>
        <img className='wish' src={like} alt="" />
          <img src={simularimg} alt="" />
          <div className='simular-title'>
            <div className='title'>
              <h2>White T-Shirt</h2>
              <p>Priya’s  Brand</p>
              </div>
            <div className='price'>
              <h2>$13.00</h2>
            </div>
          </div>
        </div> 
        <div className='simular-product'>
        <img className='wish' src={like} alt="" />
          <img src={simularimg} alt="" />
          <div className='simular-title'>
            <div className='title'>
              <h2>White T-Shirt</h2>
              <p>Priya’s  Brand</p>
              </div>
            <div className='price'>
              <h2>$13.00</h2>
            </div>
          </div>
        </div> 
        <div className='simular-product'>
        <img className='wish' src={like} alt="" />
          <img src={simularimg} alt="" />
          <div className='simular-title'>
            <div className='title'>
              <h2>White T-Shirt</h2>
              <p>Priya’s  Brand</p>
              </div>
            <div className='price'>
              
              <h2>$13.00</h2>
            </div>
          </div>
        </div>  

      </div>
      
    </div>
       
      
    </div>
  )
}
         
export default ProductPage 
