import "./AdresPage.css"


import svg01 from "../../assets/svg/contact01.svg"
import icon02 from "../../assets/svg/contactIcon02.svg"
import icon03 from "../../assets/svg/contactheart03.svg"
import icon04 from '../../assets/svg/contactuser04.svg'
import icon05 from "../../assets/svg/contactsign05.svg"
function AdressPage() {
    return (
        <div className="contact">
            <div className="contact-p">
                <h1>Home</h1>
                <img src={svg01} alt="img" />
                <h1>My Account</h1>
                <img src={svg01} alt="img" />
                <p>Personal Info</p>
            </div>
            <div className="contacts">

                <div className="contact-left">
                    <div className="contact-colors">
                        <div className="contact-color">
                            <h4>Hello Jhanvi</h4>
                        </div>
                    </div>
                    <p>Welcome to your Account</p>


                    <div className="contact-orders">
                        <div className="contact-logos">
                            <img src={icon02} alt="img" />
                            <h2>My orders</h2>
                        </div>

                        <div className="contact-logos">
                            <img src={icon03} alt="img" />
                            <h2>Wishlist</h2>
                        </div>

                        <div className="contact-my-logos">
                            <div className="line"></div>
                            <img src={icon04} alt="img" />
                            <h2>My info</h2>
                        </div>

                        <div className="contact-logos">
                            <img src={icon05} alt="img" />
                            <h2>Sign out</h2>
                        </div>
                    </div>
                </div>



                <div className="contact-right">
                    <div className="contact-right-text">
                        <h1>My Info</h1>
                        <p>Contact Details</p>
                    </div>

                    <div className="contact-infos">
                        <div className="contact-inputs">
                            <p> Your Name</p>
                            <input type="name " placeholder="First Name" />
                        </div>
                        <div className="contact-inputs">
                            <p>Last Name*</p>
                            <input type="name " placeholder="Last Name" />
                        </div>
                    </div>


                    <div className="contact-infos">
                        <div className="contact-inputs">
                            <p> Country / Region*</p>
                            <input type="name " placeholder="Country / Region" />
                        </div>
                        <div className="contact-inputs">
                            <p>Company Name</p>
                            <input type="name " placeholder="Company (optional)" />
                        </div>
                    </div>

                    <div className="contact-infos">
                        <div className="contact-inputs">
                            <p> Street Address*</p>
                            <input type="name " placeholder="House number and street name" />
                        </div>
                        <div className="contact-inputs">
                            <p>Apt, suite, unit</p>
                            <input type="name " placeholder="apartment, suite, unit, etc. (optional)" />
                        </div>
                    </div>

                    <div className="contact-infos">
                        <div className="contact-inputs">
                            <p> City*</p>
                            <input type="name " placeholder="Town / City" />
                        </div>
                        <div className="contact-inputs">
                            <p>State*</p>
                            <input type="name " placeholder="State" />
                        </div>
                    </div>

                    <div className="contact-infos">
                        <div className="contact-inputs">
                            <p> Phone*</p>
                            <input type="name " placeholder="Phone" />
                        </div>
                        <div className="contact-inputs">
                            <p>Postal Code*</p>
                            <input type="name " placeholder="Postal Code    " />
                        </div>
                    </div>

                    <div className="contact-big">
                        <p>Delivery Instruction</p>
                        <input type="name" placeholder="Delivery Instruction" />
                    </div>
                    <div className="contact-chek">
                        <div className="chekbox">
                            <input type="checkbox" />
                            <p>Set as default shipping address</p>
                        </div>
                        <div className="chekbox">
                            <input type="checkbox" />
                            <p>Set as default billing address</p>
                        </div>
                    </div>
                    <button className="save">Save</button>
                    <button className="cansel">Cancel</button>

                </div>


            </div>
        </div>
    );
}

export default AdressPage;
