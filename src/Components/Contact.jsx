import {contact} from "../Scripts/assets"

const Contact = () => {
    return (
        <>
            <section id="contact" className="contact py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={contact} alt="Contact Us" className="contact-img img-fluid" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h2 className="contact-title">Get in Touch</h2>
                    <p className="contact-desc">{"We'd love to hear from you! Fill out the form below to reach out."}</p>
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="What's Your Good Name?" required />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="What's Your Email Address?" required />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" rows="4" placeholder="What You Want To Say?" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Contact