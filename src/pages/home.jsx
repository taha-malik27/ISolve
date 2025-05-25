import React from 'react';
import HeroSection from "../components/heroSection/heroSection";
import OfferSection from "../components/offerSection/offerSection";
import WhyUsSection from "../components/whyUsSection/whyUsSection";
import OurWorkSection from "../components/ourWorkSection/ourWorkSection";
import ContactUsSection from "../components/contactUsSection/contactUsSection";

const HomePage = () => {
    return <div>
        <HeroSection/>
        <OfferSection/>
        <WhyUsSection/>
        <OurWorkSection/>
        <ContactUsSection/>
    </div>;
};

export default HomePage;