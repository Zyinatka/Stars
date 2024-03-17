import "./Contact.css"

import svg01 from "../../assets/svg/contact01.svg"
import icon02 from "../../assets/svg/contactIcon02.svg"
import icon03 from "../../assets/svg/contactheart03.svg"
import icon04 from '../../assets/svg/contactuser04.svg'
import icon05 from "../../assets/svg/contactsign05.svg"

function Contact() {
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
                        <p> Your Name</p>
                        <div className="contact-infos-display">
                            <h1>Jhanvi Shah</h1>
                            <h1>Change</h1>
                        </div>
                        <div className="contact-line"></div>
                    </div>

                    <div className="contact-infos">
                        <p> Email Address</p>
                        <div className="contact-infos-display">
                            <h1>Jhanvi@gmail.com</h1>
                            <h1>Change</h1>
                        </div>
                        <div className="contact-line"></div>
                    </div>

                    <div className="contact-infos">
                        <p> Phone Number</p>
                        <div className="contact-infos-display">
                            <h1>8980252445</h1>
                            <h1>Change</h1>
                        </div>
                        <div className="contact-line"></div>
                    </div>

                    <div className="contact-infos">
                        <p> Password</p>
                        <div className="contact-infos-display">
                            <h1>********</h1>
                            <h1>Change</h1>
                        </div>
                        <div className="contact-line"></div>
                    </div>


                    <div className="contact-between">
                        <p>Address</p>
                        <h4>Add New</h4>
                    </div>
                    <div className="contact-end">
                        <div className="contact-end-info">
                            <div className="contact-end-infos">
                                <h1>Jhanvi shah</h1>
                                <p>8980252445</p>
                                <p>1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                                    derasar, Vijaynagar road </p>
                                <div className="contact-button">
                                    <h3><button>Home</button></h3>
                                    <h3><button>Default billing address</button></h3>
                                </div>
                                <div className="contact-end-end">
                                    <h3>Remove</h3>
                                    <div className="contact-end-line"></div>
                                    <h3>Edit</h3>
                                </div>
                            </div>
                        </div>

                        <div className="contact-end-info">
                        <div className="contact-end-infos">
                                <h1>Jhanvi shah</h1>
                                <p>8980252445</p>
                                <p>1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                                    derasar, Vijaynagar road </p>
                                <div className="contact-button">
                                    <h3><button>Home</button></h3>
                                    <h3><button>Default billing address</button></h3>
                                </div>
                                <div className="contact-end-end">
                                    <h3>Remove</h3>
                                    <div className="contact-end-line"></div>
                                    <h3>Edit</h3>
                                </div>
                            </div>
                        </div>

                        <div className="contact-end-info">
                        <div className="contact-end-infos">
                                <h1>Jhanvi shah</h1>
                                <p>8980252445</p>
                                <p>1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                                    derasar, Vijaynagar road </p>
                                <div className="contact-button">
                                    <h3><button>Home</button></h3>
                                </div>
                                <div className="contact-end-end">
                                    <h3>Office</h3>
                                    <div className="contact-end-line"></div>
                                    <h3>Edit</h3>
                                    <div className="contact-end-line"></div>
                                    <h3>Set as default</h3>
                                </div>
                            </div>
                        </div>

                        <div className="contact-end-info">
                        <div className="contact-end-infos">
                                <h1>Jhanvi shah</h1>
                                <p>8980252445</p>
                                <p>1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                                    derasar, Vijaynagar road </p>
                                <div className="contact-button">
                                    <h3><button>Home2</button></h3>
                                </div>
                                <div className="contact-end-end">
                                    <h3>Remove</h3>
                                    <div className="contact-end-line"></div>
                                    <h3>Edit</h3>
                                    <div className="contact-end-line"></div>
                                    <h3>Set as default</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
