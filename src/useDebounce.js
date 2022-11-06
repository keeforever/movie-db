
import {useEffect} from 'react'

const useDebounce=(callback,value,delay)=>{

  useEffect(()=>{
    const handler=setTimeout(callback,delay)
    return ()=>clearTimeout(handler);
  },[value])
  return(
    {callback,value,delay}
    )
}

export {useDebounce}