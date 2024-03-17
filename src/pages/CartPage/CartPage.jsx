import React from 'react';
import "./CartPage.css";
import Left from './CartImg/left-stroke.png';
import Rectangle1 from './CartImg/Rectangle1.png'
import Rectangle2 from './CartImg/Rectangle2.png'
import Rectangle3 from './CartImg/Rectangle3.png'
import Quantity1 from './CartImg/quantity1.png'
import Quantity2 from './CartImg/quantity2.png'
import Deletecon from './CartImg/deletecon.png'

const CartPage = () => {
  return (
    <div className="cart-page">
      <div className="container">
         <div className="frame-356">
           <p className='frame-356-p'>Home <img src={Left} alt="" /> Add To Cart</p>
           <p>Please fill in the fields below and click place order to complete your purchase!<br/>
           Already registered? <span>Please login here</span></p>
         </div>

      </div>


      <div className="cart-products">

        <div className="cart-products-nav">
          <ul>
            <li>Product Details</li>
            <li className='nav-li'>Price</li>
            <li>Quantity</li>
            <li>shipping</li>
            <li>subtotal</li>
            <li>action</li>
          </ul>
        </div>

        <div className="cart-products-in">
          <div className="container">
          <div className="card-products-inner card">  
          <div className="products-h6">
             <img src={Rectangle1} alt="" />
             <div className="products-h5">
                <h6>Blue Flower Print Crop Top</h6>
                  <p>Color : Yellow</p>
                  <p>Size : M</p>
             </div>
            
            </div>
            <p>$29.00</p>
            <img src={Quantity1} alt="" />
            <p>FREE</p>
            <p>$29.00</p>
            <img src={Deletecon} alt="" />
          </div>
            <hr />
          <div className="card-products-inner card-2">
          <div className="products-h6">
            <img src={Rectangle2} alt="" />
            <div className="products-h5">
              <h6>Levender Hoodie</h6>
              <p>Color : Levender</p>
              <p>Size : M</p></div>
              
            </div>
            <p>$29.00</p>
            <img src={Quantity2} alt="" />
            <p>FREE</p>
            <p>$29.00</p>
            <img src={Deletecon} alt="" />
          </div>
<hr />
          <div className="card-products-inner card-3">
          <div className="products-h6">
              <img src={Rectangle3} alt="" />
              <div className="products-h5">
                <h6>Black Sweatshirt</h6>
                <p>Color : Black</p>
                <p>Size : XXL</p>
            </div>
              
            </div>
            <p>$29.00</p>
            <img src={Quantity2} alt="" />
            <p>FREE</p>
            <p>$29.00</p>
            <img src={Deletecon} alt="" />
          </div>

        </div>
        </div>
      </div>

    <div className="sub-total">
     
      <div className="discount">
        <h6>Discount Codes</h6>
        <p>Enter your coupon code if you have one</p>
           <div className="discount-btn">
           <input type="text" />
           <button>Apply Coupon</button>
           </div>
        
        <button className='discount-btn2'>Continue Shopping</button>

      </div>

      <div className="proceed">
           <div className="proceed-inner">
            <p> Sub Total<span>$513.00</span></p>
            <p> Shipping<span>$5.00</span></p>
            <p> Grand Total <span>$518.00</span></p>
            </div>
           <hr/>
           <button>Proceed To Checkout</button>
      </div>
    </div>
    </div>

  );
};

export default CartPage;