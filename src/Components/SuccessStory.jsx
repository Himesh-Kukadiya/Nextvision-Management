import { successStoriesList } from "../Scripts"

const SuccessStory = () => {
    return (
        <>
            <section id="success-stories" className="success-stories py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Success Stories</h2>
                        <p className="section-description">{"Discover how we've helped businesses thrive and grow with our solutions."}
                        </p>
                    </div>
                    <div className="row">
                        {
                            successStoriesList.map(ss => (
                                <div key={ss.title} className="col-md-4 mb-4">
                                    <div className="story-card p-4 text-center">
                                        <div className="story-icon mb-3">
                                            <i className={ss.icon}></i>
                                        </div>
                                        <h4 className="story-title">{ss.title}</h4>
                                        <p className="story-description">{ss.description}</p>
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

export default SuccessStory