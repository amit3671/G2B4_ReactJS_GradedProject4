import "./singlemovie.css";
import { Link } from 'react-router-dom';

export const Singlem = ({ movie }) => {

    const { imdbRating, title, posterurl, releaseDate, storyline, actors } = movie;

    return (
        <>
            <div className="card-container">
                <div className="card-img-container">
                    {<img className="card-img" src={posterurl} alt="movide-card" />}
                </div>
                <div className='card-details'>
                    <div>
                        <span className='title'>{title}</span>
                    </div>
                    <p>
                        <span className='genre'>Storyline: {storyline} </span>
                    </p>
                    <div>
                        <span className='actors'>Actors: {actors}</span>
                    </div>
                    <div className="rating">
                        <span>Rating: {imdbRating} </span> <br />
                        <span>Release Date : {releaseDate}</span>
                    </div>
                </div>
            </div><Link to="/MovieCard"></Link>
        </>
    )
} 