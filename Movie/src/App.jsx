import './App.css'
import MovieCard from './components/MovieCard'
function App() {
 
  return (
    <>
      <MovieCard movie={{title:"Tim's Fishing Trip", release_date:'2024'}}/>
      <MovieCard movie={{title:"Tim's Fishing Trip", release_date:'2024'}}/>
      <MovieCard movie={{title:"Tim's Fishing Trip", release_date:'2024'}}/>
      <MovieCard movie={{title:"Tim's Fishing Trip", release_date:'2024'}}/>
      <MovieCard movie={{title:"Tim's Fishing Trip", release_date:'2024'}}/>
      <MovieCard movie={{title:"Tim's Fishing Trip", release_date:'2024'}}/>
    </>
  )
}
function Text({display}){
  return(
    <div>
      <p>
        {display}
      </p>
    </div>
  )
}

export default App
