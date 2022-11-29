import useAxios from "./useAxios";

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
