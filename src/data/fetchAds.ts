import {Ad} from "../types/ad";

const URL = "https://my-json-server.typicode.com/akramsaouri/ad-performance/ads"

export const fetchAds = async() => {
    try {
        const response = await fetch(URL);
        return await response.json() as Promise<Ad[]>;
    }catch (error) {
        console.error(error);
        return []
    }
}
