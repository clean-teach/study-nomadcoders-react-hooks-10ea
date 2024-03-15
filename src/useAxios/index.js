import { useAxios } from "./useAxios";

function UseAxiosComponent() {
  const { data, loading, error, reFetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json ",
  });
  //   console.log(data);
  return (
    <>
      {loading ? (
        <h3>Loading ...</h3>
      ) : (
        <div>
          <h2>{data.status}</h2>
          <ul>
            {data.data.data.movies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      )}
      <button type="button" onClick={reFetch}>
        다시 요청
      </button>
    </>
  );
}

export default UseAxiosComponent;
