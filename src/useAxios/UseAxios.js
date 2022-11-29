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
const AppUseAxios = () => {
  const { loading, error, data, refetch } = useAxios({
    url: "https://yts.am/api/v2/list_movies.json",
  });
  console.log(`Loading: ${loading}\n Error: ${error}\n data: ${data}`);
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default AppUseAxios;
