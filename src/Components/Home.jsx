import {homeData} from "../Scripts/index"


const Home = () => {
    return (
        <>
            <section id="home" className="hero-section d-flex align-items-center justify-content-center">
                <div className="text-center text-white">
                    <h1 className="display-4">{homeData.title}</h1>
                    <p className="lead">{homeData.desc}</p>
                    <a href="#" className="btn btn-primary btn-lg">Get Started</a>
                </div>
            </section>
        </>
    )
}

export default Home