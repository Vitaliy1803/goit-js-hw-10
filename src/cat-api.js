import axios from "axios";
const BASE_URL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common["x-api-key"] = "live_ovszj7lWYxeV3KftLBnEE4ByIkdCvSjwlnWzAVvGLn0Mi8aXftT3udNvA6XurFkN";

export {fetchBreeds, fetchCatByBreed};


async function fetchBreeds(){
    // console.log('start');

    const ENDPOIND = '/breeds';

    try {
    const response = await axios.get(`${BASE_URL}${ENDPOIND}`)

    // console.log(response);
    // console.log('end');
    return response.data;
    
    } catch (error) {
        throw new Error(response.statusText);
    }

}

async function fetchCatByBreed (breedId){
    const ENDPOIND = '/images/search';

    try {
        const response = await axios.get(`${BASE_URL}${ENDPOIND}?breed_ids=${breedId}`)
        return response.data;
    }
}


