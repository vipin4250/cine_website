import React from 'react';
import './Rating.css';
import Navbar from './Components/Navbar';
import SemiNavbar from './Components/SemiNavbar';
import RatingCard from './Components/RatingCard';
import Footer from './Components/Footer';


function Rating() {

    const movies =[
        {
            name : 'harry potter',
            date : 30+'feb'+2005,
            episodes: 6,
            members: 34345
        },
        {
            name : 'avengers',
            date : 4+'june'+2012,
            episodes: 10,
            members: 67895
        },
        {
            name : 'man from toronto',
            date : 3+'march'+2019,
            episodes: 1,
            members: 98345
        },
        {
            name : 'terminator',
            date : 30+'april'+2017,
            episodes: 3,
            members: 43454
        },
        {
            name : 'transformer',
            date : 8+'feb'+2011,
            episodes: 5,
            members: 97438
        },
        {
            name : 'fast and furious',
            date : 12+'dec'+2012,
            episodes: 2,
            members: 98768
        }
    ]



  return (
    <>
    <div className='container _2'>
        <Navbar/>
        <div className="status_1">TOP MOVIES</div>
        <SemiNavbar/>
        <div>{movies.map(movie => <RatingCard movie = {movie} />)}</div>
        <Footer/>
    </div>
    </>
  )
}
export default Rating;