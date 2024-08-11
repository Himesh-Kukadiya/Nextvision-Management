import { servicesList} from "../Scripts/index"

const Services = () => {
    return (
        <>
            <section id="services" className="services py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Our Services</h2>
                        <p className="section-description">Explore the wide range of services we offer to help your business grow
                            and succeed.</p>
                    </div>
                    <div className="row">
                        {servicesList.map(service => (
                            <div key={service.id} className="col-md-4 mb-4 d-flex align-items-stretch">
                                <div className="service-card p-4 text-center">
                                    <div className="service-icon mb-3">
                                        <i className={service.iconClass}></i>
                                    </div>
                                    <h4 className="service-title">{service.title}</h4>
                                    <p className="service-description">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services