
import {Routes,Route} from 'react-router-dom';

import SearchForm from "./SearchForm"
import MovieCardsContainer from "./MovieCardsContainer";
import MovieDetail from '../pages/MovieDetail'
import NoPage from '../pages/NoPage'
const Home = () => {
  return (
    <section className="app-container">
      <Routes>
        <Route exact path="/" element={
        <>
           <SearchForm/>
           <MovieCardsContainer/>
        </>}
        />
        <Route path='/Movie/:id' element={
          <>
          <div></div>
          <MovieDetail/>
          </>
        }/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </section>
  )
}

export default Home
