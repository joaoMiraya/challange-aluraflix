import PropType from 'prop-types';


function Carousel({ topThree }) {
    Carousel.propTypes = {
        topThree: PropType.array.isRequired,
    }
    

    return (

        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    {topThree.map((filme) => {
                        return (
                            <div key={filme.id} className="carousel-item active relative">

                                <img src={`https://image.tmdb.org/t/p/w500${filme.backdrop_path}`} alt={filme.title} className="d-block w-100 h-1/3 object-center z-0 " />
                                <div className="hidden md:absolute md:flex justify-center items-center bg-black z-10 w-1/2  h-full top-0 left-0 shadowClass">
                                    <div className="carousel-caption d-none d-md-block z-40">
                                        <div className=" flex flex-col items-center gap-4" >
                                            <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.title} width={420} className="d-block rounded-xl drop-shadow-2x " />
                                            <h5 className="text-2xl text-white font-bold">{filme.title}</h5>
                                            <p className=" text-white font-light">{filme.overview}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}


export default Carousel;