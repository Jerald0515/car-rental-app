import React from 'react';
import Navbar from './Navbar';
import '../App.css';
import Footer from './Footer';

function AboutUs() {
    return (
        <>
            <Navbar />
            <div className='about-us-container'>
                <h1>
                    About us
                </h1>
                <div className='about-us-description'>
                    Welcome to SunDrive Rentals
                </div>
                <div className='about-us-description'>
                    At SunDrive Rentals, we believe in the freedom to explore, the thrill of the open road, and the convenience of reliable transportation. With a passion for providing top-notch service and a commitment to customer satisfaction, we strive to make every journey unforgettable.
                </div>
                <h2>Our Story</h2>
                <div className='about-us-description'>
                    Established with a vision to redefine the car rental experience, SunDrive Rentals began its journey with a simple mission: to offer hassle-free, affordable, and reliable car rental services to travelers worldwide. From our humble beginnings, we have grown into a trusted name in the industry, serving countless satisfied customers.
                </div>
                <h2>What Sets Us Apart</h2>
                <div className='about-us-description'>
                    At SunDrive Rentals, we stand out from the competition in several ways:<br /><br />

                    Diverse Fleet: Whether you're seeking a compact car for a solo adventure, a spacious SUV for a family vacation, or a luxury vehicle for a special occasion, we have the perfect vehicle to suit your needs and preferences.<br /><br />

                    Exceptional Service: From the moment you contact us to the completion of your rental, our dedicated team is committed to providing personalized assistance and support. We prioritize customer satisfaction above all else, ensuring a seamless and enjoyable rental experience.<br /><br />

                    Convenience: We understand that travel plans can be unpredictable, which is why we offer flexible booking options and convenient pickup and drop-off locations. With SunDrive Rentals, you can enjoy the freedom to explore at your own pace, without any unnecessary stress or hassle.<br /><br />

                    Competitive Pricing: We believe that quality transportation should be accessible to everyone, which is why we offer competitive rates and transparent pricing with no hidden fees. With SunDrive Rentals, you can enjoy affordable rentals without sacrificing quality or reliability.           </div>
                <h2>Our Commitment</h2>
                <div className='about-us-description'>
                    At SunDrive Rentals, we are committed to excellence in everything we do. Whether you're embarking on a cross-country road trip, exploring a new city, or simply need a reliable vehicle for your daily commute, we are here to make your journey unforgettable.                </div>
                <h2>Contact Us</h2>
                <div className='about-us-description'>
                    Ready to start your adventure? Contact us today to book your rental and experience the convenience, affordability, and reliability of SunDrive Rentals.<br /><br />

                    Thank you for choosing SunDrive Rentals. We look forward to serving you!            </div>

            </div>



            <Footer />

        </>


    )
}

export default AboutUs