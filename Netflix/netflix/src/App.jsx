import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import {originals,action,ComedyMovies,Trending,RomanceMovies,HorrorMovies,Documentaries} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
function App() {
  return (
    <div className='App'>
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Originals'/>
        <RowPost url ={Trending} title='Trending' isSmall/>
        <RowPost url ={action} title='Action' isSmall/>
        <RowPost url ={ComedyMovies} title='Comedy' isSmall/>
        <RowPost url ={RomanceMovies} title='Romance' isSmall/>
        <RowPost url ={HorrorMovies} title='Horror' isSmall/>
        <RowPost url ={Documentaries} title='Documentaries' isSmall/>
        
    </div>
  );
}

export default App;
