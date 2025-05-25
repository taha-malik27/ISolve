import React from 'react';
import HeroSection from "../components/heroSection/heroSection";
import OfferSection from "../components/offerSection/offerSection";
import WhyUsSection from "../components/whyUsSection/whyUsSection";
import OurWorkSection from "../components/ourWorkSection/ourWorkSection";

const HomePage = () => {
    return <div>
        <HeroSection/>
        <OfferSection/>
        <WhyUsSection/>
        <OurWorkSection/>
    </div>;
};

export default HomePage;