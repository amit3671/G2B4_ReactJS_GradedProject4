import "./MovieCard.css";
import { Singlem } from "./singlemovie";

var idValue = 0;

const MovieCard = ({ movie }) => {

    const { imdbRating, title, genres, posterurl, releaseDate, id } = movie;

    const CheckMovie = () => {
        idValue = id;

        return (
            <Singlem></Singlem>
        )
    }
    
    return (
        <>
            <div className="card-container">
                <div className="card-img-container">
                    <img onClick={CheckMovie} className="card-img" src={posterurl} alt="movide-card" />
                </div>
                <div className='card-details'>
                    <div>
                        <span className='title'>{title}</span>
                    </div>
                    <div>
                        <span className='genre'>Genre: {genres} </span>
                    </div>
                    <div className="rating">
                        <span>Rating: {imdbRating} </span> <br />
                        <span>Release Date : {releaseDate}</span>
                    </div>
                </div>
            </div>
            </>
    )
}

export { MovieCard , idValue };
