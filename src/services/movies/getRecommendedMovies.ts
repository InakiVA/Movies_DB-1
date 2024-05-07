import httpInstance from '../httpInstance';


export const getRecommendedMovies = async (movieid: string) => {
    let res: any;
    const endpoint = `${movieid}/recommendations?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;
    await httpInstance
    .get(endpoint)
    .then((response) => {
    res = response;
    })
    .catch((err) => {
    res = err.message;
    })
    return res;
    };

export default getRecommendedMovies;