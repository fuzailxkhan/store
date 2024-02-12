

interface carouselProps{
    images: string [];
}

const Carousel = ({images}:carouselProps) => {
  return (
    <div id="carouselExampleCaptions" className="carousel carousel-dark slide">

        <div className="carousel-indicators">
            {images?.map((_, index) => (
            <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
            ></button>
            ))}
        </div>

        <div className="carousel-inner">
            {images?.map((img, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img src={img} className="d-block h-auto w-100" alt={`Slide ${index + 1}`} />
                <div className="carousel-caption d-none d-md-block">
                {/* Add your carousel caption here if needed */}
                </div>
            </div>
            ))}
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
  )
}

export default Carousel