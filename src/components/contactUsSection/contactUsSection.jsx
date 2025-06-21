// ContactForm.jsx
import React, { useState, useEffect, useRef } from "react";
import "../../styles/contactUsSection.css";
import logoIcon    from '../../assets/logoIconBW.png';


const ContactForm = () => {
    const [resultMsg, setResultMsg] = useState("");
    const [msgColor, setMsgColor] = useState("");
    const textRef = useRef(null);
    const formRef = useRef(null);


    // Slide‑in heading observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                        entry.target.classList.toggle("appear", entry.isIntersecting)

                    }
                );
            },
            { threshold: 0.1 }
        );

        if (textRef.current) {observer.observe(textRef.current);}
        if (formRef.current) observer.observe(formRef.current);

        return () => observer.disconnect();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData.entries());

        setResultMsg("Please wait...");
        setMsgColor("");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (res.status === 200) {
                setResultMsg(data.message);
                setMsgColor("success");
            } else {
                setResultMsg(data.message || "Submission failed.");
                setMsgColor("error");
            }
        } catch {
            setResultMsg("Something went wrong!");
            setMsgColor("error");
        }

        e.target.reset();
        setTimeout(() => setResultMsg(""), 5000);
    };

    return (
        <div className="form-section glow" id="contactUs">
            {/* Header column */}
            <div ref = {textRef} className="slideTextRight headerBox  ">
                <img  src={logoIcon} style={{maxWidth :  "100px"}} className="glow form-img" />

                <h2 className="form-header glow">
                    <span className="underline-slide"> Contact Us </span>
                </h2>
                <p  className="form-subtitle glow">
                    Start your journey of digital excellence with ISolve today.
                </p>
            </div>

            {/* Form column */}
            <form ref = {formRef} onSubmit={handleSubmit} className="slideFormLeft form-box glow">
                {/* Web3Forms hidden fields */}
                <input type="hidden" name="access_key" value="71fff338-ae3c-423e-920f-69826bc8747e" />
                <input
                    type="hidden"
                    name="subject"
                    value="New Submission from Web3Forms"
                />
                <input type="checkbox" name="botcheck" style={{ display: "none" }} />

                {/* Full Name */}
                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                        Full Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                        className="form-input"
                    />
                </div>

                {/* Email Address */}
                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        Email Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        className="form-input"
                    />
                </div>

                {/* Phone Number */}
                <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                        Phone Number
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="+1 (234) 567-8910"
                        required
                        className="form-input"
                    />
                </div>

                {/* Company Name */}
                <div className="form-group">
                    <label htmlFor="company" className="form-label">
                        Company Name
                    </label>
                    <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="e.g., HK Barbershop"
                        className="form-input"
                    />
                </div>

                {/* Website Type */}
                <div className="form-group">
                    <label htmlFor="websiteType" className="form-label">
                        What kind of website do you need?
                    </label>
                    <select id="websiteType" name="websiteType" className="form-select">
                        <option value="">-- Select an option --</option>
                        <option value="business">Business Website</option>
                        <option value="ecommerce">E‑commerce Store</option>
                        <option value="portfolio">Portfolio</option>
                        <option value="booking">Booking / Appointment</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Estimated Budget */}
                <div className="form-group">
                    <label htmlFor="budget" className="form-label">
                        Estimated Budget
                    </label>
                    <select id="budget" name="budget" className="form-select">
                        <option value="">-- Select a range --</option>
                        <option value="under1000">Under $1,000</option>
                        <option value="1000to3000">$1,000 – $3,000</option>
                        <option value="3000to5000">$3,000 – $5,000</option>
                        <option value="over5000">Over $5,000</option>
                    </select>
                </div>

                {/* Existing Website */}
                <div className="form-group">
                    <label htmlFor="hasWebsite" className="form-label">
                        Do you already have a website?
                    </label>
                    <select id="hasWebsite" name="hasWebsite" className="form-select">
                        <option value="">-- Select an option --</option>
                        <option value="no">No</option>
                        <option value="yes">Yes – needs improvement</option>
                        <option value="redesign">Yes – needs full redesign</option>
                    </select>
                </div>

                {/* Preferred Contact */}
                <div className="form-group">
                    <label htmlFor="contactMethod" className="form-label">
                        Preferred Contact Method
                    </label>
                    <select
                        id="contactMethod"
                        name="contactMethod"
                        className="form-select"
                    >
                        <option value="">-- Select an option --</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="whatsapp">WhatsApp</option>
                    </select>
                </div>

                {/* Timeline */}
                <div className="form-group">
                    <label htmlFor="timeline" className="form-label">
                        When would you like to launch?
                    </label>
                    <select id="timeline" name="timeline" className="form-select">
                        <option value="">-- Select a range --</option>
                        <option value="asap">ASAP</option>
                        <option value="2weeks">Within 2 weeks</option>
                        <option value="1month">Within 1 month</option>
                        <option value="2months">1–2 months</option>
                    </select>
                </div>

                {/* Message */}
                <div className="form-group">
                    <label htmlFor="message" className="form-label">
                        Tell us a bit more about your project
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="What features do you need? Who’s your audience?"
                        required
                        className="form-textarea"
                    />
                </div>

                {/* Submit Button */}
                <div className="form-group">
                    <button type="submit" className="form-button">
                        Send Message
                    </button>
                </div>

                {/* Feedback Message */}
                {resultMsg && (
                    <p className={`form-result ${msgColor}`}>{resultMsg}</p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
