import { hiwList } from "../Scripts/index"

const HIW = () => {
    return (
        <>
            <section id="hiw" className="hiw py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="st-title">How It Works</h2>
                        <p className="st-desc">Our simple and effective process to ensure your success.</p>
                    </div>
                    <div className="row">
                        {
                            hiwList.mpa(hiw => (
                                <div key={hiw.id} className="col-md-4 mb-4">
                                    <div className="step p-4 text-center">
                                        <div className="step-icon mb-3">
                                            <i className={hiw.icon}></i>
                                        </div>
                                        <h4 className="st-title">{hiw.title}</h4>
                                        <p className="st-desc"> {hiw.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default HIW