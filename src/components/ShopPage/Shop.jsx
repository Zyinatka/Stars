import './Shop.css'

import Img1 from "../../assets/png/01.png"
import img2 from "../../assets/png/02.png"
import img3 from "../../assets/png/03.png"
import img4 from "../../assets/png/04.png"
import img5 from "../../assets/png/05.png"
function Shop() {
    return (
        <div className='images'>

            <div className='images-1'>
                <img src={Img1} alt="img" />
                <div className='image-texts'>
                    <p>T-shirt / Tops</p>
                    <h1>Spring<br />
                        Value Package</h1>
                    <h5>cool / colorful / comfy</h5>
                    <button><h2>Shop Now</h2></button>
                </div>
            </div>

            <div className='images-2'>
                <div className='images-image'>
                    <img src={img3} alt="img" />
                    <img src={img2} alt="img" />
                </div>
                <div className='images-texts'>
                    <h1> WE MADE YOUR EVERYDAY <br/>
                        FASHION BETTER!</h1>
                    <p>In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</p>
                    <button><h2>Shop Now</h2></button>
                </div>
            </div>
            
            <div className='images-3'>
                <img src={img4} alt="img" />
                <div className='image-texts4'>
                    <p>Jeans/ T-shirt</p>
                    <h1>Spring<br />
                        Value Package</h1>
                    <h5>cool / colorful / comfy</h5>
                    <button><h2>Shop Now</h2></button>
                </div>
            </div>

            <div className='images-4'>
                <img src={img5} alt="img" />
                <div className='image-texts4'>
                    <p>Dress</p>
                    <h1>Spring<br />
                        Value Package</h1>
                    <h5>cool / colorful / comfy</h5>
                    <button><h2>Shop Now</h2></button>
                </div>
            </div>
        </div>
    );
}
export default Shop;

