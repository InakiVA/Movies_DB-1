import httpInstance from '../httpInstance';


export const getDetails = async (movieid: string) => {
    let res: any;
    const endpoint = `${movieid}?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;
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

export default getDetails;