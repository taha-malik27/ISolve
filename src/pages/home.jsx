import React from 'react';
import HeroSection from "../components/heroSection/heroSection";
import OfferSection from "../components/offerSection/offerSection";
import WhyUsSection from "../components/whyUsSection/whyUsSection";
import OurWorkSection from "../components/ourWorkSection/ourWorkSection";
import ContactUsSection from "../components/contactUsSection/contactUsSection";
import PageFooter from "../components/pageFooter/pageFooter";

const HomePage = () => {
    return <div>
        <HeroSection/>
        <OfferSection/>
        <WhyUsSection/>
        <OurWorkSection/>
        <ContactUsSection/>
        <PageFooter/>
    </div>;
};

export default HomePage;