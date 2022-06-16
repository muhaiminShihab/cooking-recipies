import ImageOne from "../../assets/images/1.png";
import ImageTwo from "../../assets/images/2.png";

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Area */}
            <div className="hero-area mt-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <h1 className="mb-5">Best <span className="badge bg-primary">Cooking Recipies</span> finder.</h1>

                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-arrow-down-square-fill mt-5" viewBox="0 0 16 16">
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Story Area */}
            <div className="story-area mt-150">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-5">
                            <img src={ImageOne} alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-7">
                            <h3 className="text-center text-md-start mb-5 mb-md-0">Our Story</h3>
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis et animi aperiam eius at enim molestiae corporis assumenda ducimus corrupti placeat cum perspiciatis, a nemo ex beatae quod ea esse.

                                <br /><br />

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta nemo reprehenderit ipsam magni veritatis consequuntur laudantium excepturi suscipit, non culpa tenetur, natus officiis architecto deleniti libero amet aspernatur provident, perspiciatis ratione inventore autem iusto. Nihil illo, quod itaque enim cupiditate temporibus libero consequuntur. Totam explicabo quae recusandae molestias officia? Harum iure itaque nulla labore exercitationem dolore sequi quo doloremque?
                            </p>
                        </div>
                    </div>
                    <div className="row align-items-center mt-5">
                        <div className="col-lg-7 order-2 order-md-1">
                            <h3 className="mb-5 mb-md-0 text-center text-md-start">How we do this!</h3>
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis et animi aperiam eius at enim molestiae corporis assumenda ducimus corrupti placeat cum perspiciatis, a nemo ex beatae quod ea esse.

                                <br /><br />

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta nemo reprehenderit ipsam magni veritatis consequuntur laudantium excepturi suscipit, non culpa tenetur, natus officiis architecto deleniti libero amet aspernatur provident, perspiciatis ratione inventore autem iusto. Nihil illo, quod itaque enim cupiditate temporibus libero consequuntur. Totam explicabo quae recusandae molestias officia? Harum iure itaque nulla labore exercitationem dolore sequi quo doloremque?
                            </p>
                        </div>
                        <div className="col-lg-5 order-1 order-md-2">
                            <img src={ImageTwo} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;