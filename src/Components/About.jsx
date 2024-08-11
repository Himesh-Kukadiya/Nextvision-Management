import { aboutData } from "../Scripts/index"

const About = () => {
    return (
        <>
            <section id="about" className="about py-5">
                <div className="container">
                    <h2 className="text-center mb-5">About Us</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={aboutData.img1} alt="About Us" className="about-img img-fluid" />
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <p className="about-paragraph">{aboutData.paragraph1} </p>
                            <p> {aboutData.paragraph2}</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <p className="about-paragraph"> {aboutData.paragraph3} </p>
                            <p> {aboutData.paragraph4}</p>
                        </div>
                        <div className="col-md-6">
                            <img src={aboutData.img2} alt="About Us" className="about-img img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About