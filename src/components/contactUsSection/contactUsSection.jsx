// ContactForm.jsx
import React, {useEffect, useState, useRef} from "react";
import  "../../styles/contactUsSection.css"

const ContactForm = () => {
    const [resultMsg, setResultMsg] = useState("");
    const [msgColor, setMsgColor] = useState("");
    const headingRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData.entries());

        setResultMsg("Please wait...");
        setMsgColor(""); // Neutral color while loading

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formObject),
            });

            const data = await response.json();

            if (response.status === 200) {
                setResultMsg(data.message);
                setMsgColor("success"); // add your custom success styling
            } else {
                setResultMsg(data.message || "Submission failed.");
                setMsgColor("error"); // add your custom error styling
            }
        } catch (err) {
            console.error(err);
            setResultMsg("Something went wrong!");
            setMsgColor("error");
        }

        form.reset();
        setTimeout(() => setResultMsg(""), 5000);
    };

    //heading logic


    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    entry.target.classList.toggle('slide-in', entry.isIntersecting);
                });
            },
            { root: null, rootMargin: '0px', threshold: 0.1 }
        );

        if (headingRef.current) observer.observe(headingRef.current);
        return () => observer.disconnect();
    }, []);



    return (
        <div className="form-section">{/* ⬅ Add outer background or padding styles here */}

            {/* --- Form Header --- */}
            <div className="form-header">
                <div ref={headingRef} className="pt-5 headingOurWork">
                    <span className="underline-slide cardGlow">Contact Us</span>
                </div>
                <p className="form-subtitle">{/* ⬅ Style your subtitle or description here */}Fill out the form below to
                    send us a message.</p>
            </div>


            <div className="form-inner-container">{/* ⬅ Center and size your form container here */}


                {/* --- Form Body --- */}
                <form onSubmit={handleSubmit}>
                    {/* Hidden Web3Forms setup fields */}
                    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                    <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                    <input type="checkbox" name="botcheck" style={{ display: "none" }} />

                    {/* --- Name Field --- */}
                    <div className="form-group">{/* ⬅ Add spacing, layout, etc. */}
                        <label htmlFor="name" className="form-label">{/* ⬅ Label styling */}Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="John Doe"
                            required
                            className="form-input" // ⬅ Style input size, border, padding
                        />
                    </div>

                    {/* --- Email Field --- */}
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="you@company.com"
                            required
                            className="form-input"
                        />
                    </div>

                    {/* --- Phone Field --- */}
                    <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="+1 (555) 1234-567"
                            required
                            className="form-input"
                        />
                    </div>

                    {/* --- Company --- */}
                    <div className="form-group">
                        <label htmlFor="company">Company Name</label>
                        <input type="text" name="company" id="company" placeholder="e.g., HK Barbershop" className="form-input" />
                    </div>

                    {/* --- Website Type --- */}
                    <div className="form-group">
                        <label htmlFor="websiteType">What kind of website do you need?</label>
                        <select name="websiteType" id="websiteType" className="form-select">
                            <option value="">-- Select an option --</option>
                            <option value="business">Business Website</option>
                            <option value="ecommerce">E-commerce Store</option>
                            <option value="portfolio">Portfolio</option>
                            <option value="booking">Booking / Appointment</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* --- Budget --- */}
                    <div className="form-group">
                        <label htmlFor="budget">Estimated Budget</label>
                        <select name="budget" id="budget" className="form-select">
                            <option value="">-- Select a range --</option>
                            <option value="under1000">Under $1,000</option>
                            <option value="1000to3000">$1,000 – $3,000</option>
                            <option value="3000to5000">$3,000 – $5,000</option>
                            <option value="over5000">Over $5,000</option>
                        </select>
                    </div>

                    {/* --- Existing Website --- */}
                    <div className="form-group">
                        <label htmlFor="hasWebsite">Do you already have a website?</label>
                        <select name="hasWebsite" id="hasWebsite" className="form-select">
                            <option value="">-- Select an option --</option>
                            <option value="no">No</option>
                            <option value="yes">Yes – needs improvement</option>
                            <option value="redesign">Yes – needs full redesign</option>
                        </select>
                    </div>

                    {/* --- Preferred Contact --- */}
                    <div className="form-group">
                        <label htmlFor="contactMethod">Preferred Contact Method</label>
                        <select name="contactMethod" id="contactMethod" className="form-select">
                            <option value="">-- Select an option --</option>
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>
                            <option value="whatsapp">WhatsApp</option>
                        </select>
                    </div>

                    {/* --- Timeline --- */}
                    <div className="form-group">
                        <label htmlFor="timeline">When would you like to launch?</label>
                        <select name="timeline" id="timeline" className="form-select">
                            <option value="">-- Select a range --</option>
                            <option value="asap">ASAP</option>
                            <option value="2weeks">Within 2 weeks</option>
                            <option value="1month">Within 1 month</option>
                            <option value="2months">1–2 months</option>
                        </select>
                    </div>

                    {/* --- Message --- */}
                    <div className="form-group">
                        <label htmlFor="message">Tell us a bit more about your project</label>
                        <textarea name="message" id="message" rows="5" required placeholder="What features do you need? Who's your audience?" className="form-textarea"></textarea>
                    </div>

                    {/* --- Submit Button --- */}
                    <div className="form-group">
                        <button type="submit" className="form-button">Send Message</button>
                    </div>

                    {/* --- Feedback Message --- */}
                    {resultMsg && (
                        <p className={`form-result ${msgColor}`}>
                            {resultMsg}
                        </p>
                    )}

                </form>

            </div>
        </div>
    );
};

export default ContactForm;
