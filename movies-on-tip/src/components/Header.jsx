import '../App.css';

const Header = ({ getMoviestopratedmovies, getMovieintheaters, getMoviescoming, getMoviestopratedindia, getfavouritemovies }) => {
    return (
        <div className='topic'>
            <button onClick={getMoviescoming} className='topicDetails'>Upcoming Movies</button>
            <button onClick={getMoviestopratedmovies} className='topicDetails'>Top Rated Movies</button>
            <button onClick={getMoviestopratedindia} className='topicDetails'>Top Rated Indian Movies</button>
            <button onClick={getMovieintheaters} className='topicDetails'>Movies in Theater</button>
            <button onClick={getfavouritemovies} className='topicDetails'>Favourite Movies</button>
        </div>
    )
}

export { Header };