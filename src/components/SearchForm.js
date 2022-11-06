import { useGlobalContext } from "../context";

const SearchForm = () => {
  const {setSearchValue,movieErrorRes} =useGlobalContext();
  const inputHandler=(e)=>{
    const value=e.currentTarget.value

    if(value===''){
      return setSearchValue('indian');
    }
    setSearchValue(value)
  }

  return (
    <section className="search__bar-container">
      <h1>Search Movies</h1>
      <form className="form-control">
        <input type="text"  className="form-control input1" onChange={inputHandler}/>
      </form>
      <p className="result-info">{movieErrorRes}</p>
    </section>
  )
}

export default SearchForm;
