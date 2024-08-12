
const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Contact Us</h4>
                            <p>Phone: (XXX) XXX-XXXX</p>
                            <p>Email: info@nextvisionmanagement.com</p>
                            <p>Address: [Insert Address]</p>
                            <p>Hours of Operation: Monday - Friday: 9 AM - 6 PM</p>
                        </div>
                        <div className="col-md-6 text-center">
                            <h4>Quick Links</h4>
                            <ul className="list-unstyled">
                                <li><a href="#home" className="footer-link">Home</a></li>
                                <li><a href="#about" className="footer-link">About</a></li>
                                <li><a href="#services" className="footer-link">Services</a></li>
                                <li><a href="#contact" className="footer-link">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <p>&copy; 2024 Nextvision Management. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer