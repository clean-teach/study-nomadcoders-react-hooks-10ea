import defaultAxios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (option, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });
  const [reFetchCode, setReFetchCode] = useState(0);

  const reFetch = () => {
    setReFetchCode(Date.now());
  };

  useEffect(() => {
    axiosInstance(option)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error,
        });
      });
  }, [reFetchCode]);
  return { ...state, reFetch };
};
