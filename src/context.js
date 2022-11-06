import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useState("indian");
  const [movieErrorRes, setMovieErrorRes] = useState("");

  // set search value
  const setSearchValue = (value) => {
    setSearchParams(value);
  };

  //set movie api error response
  const setSearchRes = (res) => {
    setMovieErrorRes(res);
  };

  return (
    <AppContext.Provider
      value={{
        setSearchValue,
        searchParams,
        setSearchRes,
        movieErrorRes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useGlobalContext };
