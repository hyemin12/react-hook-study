import defaultAxios from "axios";
import { useState, useEffect } from "react";

const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({
      loading: true,
      error: null,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    if (!options.url) {
      return;
    }
    axiosInstance(options)
      .then((data) => {
        setState({ ...state, loading: false, data });
      })
      .catch((err) => setState({ ...state, loading: false, err }));
  }, [trigger]);
  return { ...state, refetch };
};

export default useAxios;
