import {useEffect,useState,useCallback} from 'react';
import {useDebounce} from './useDebounce'
import { useGlobalContext } from './context';

const useFetch = (url,searchParams) => {
  // const {searchParams} =dependencies
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(true)
  const [apiData, setApiData] = useState([])
  const {setSearchRes}=useGlobalContext()

  // fetch
  const fetchData=()=>{
    // always start with loading and err 
    setIsError(true)
    setIsLoading(true)
    // fetch
    fetch(url)
    .then((res)=>{
      if(res.ok){
        return res.json()
      }
    })
    .then((data)=>{
      if(data.Search!==undefined || data.imdbID!==undefined){
        setSearchRes('Movie Results')
        setApiData(data)
        setIsLoading(false)
        setIsError(false)
      }else{
        setSearchRes(data.Error)
        setApiData(apiData)
        setIsLoading(false)
        setIsError(false)
      }

    })
    .catch((error)=>{
      console.log(error);
      setIsLoading(false)
      setIsError(true)
    })
  }
  useDebounce(fetchData,searchParams,1000)

  return ({isLoading,isError,apiData})
}

export default useFetch;
